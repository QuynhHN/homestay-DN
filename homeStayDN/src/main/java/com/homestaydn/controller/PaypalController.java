package com.homestaydn.controller;

import com.homestaydn.dto.OrderDTO;
import com.homestaydn.dto.PaypalRedirectDTO;
import com.homestaydn.enums.PaypalPaymentIntent;
import com.homestaydn.enums.PaypalPaymentMethod;
import com.homestaydn.model.Order;
import com.homestaydn.service.IEmailSenderService;
import com.homestaydn.service.IOrderService;
import com.homestaydn.service.impl.PaypalService;
import com.homestaydn.utils.PayPalUtils;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PaypalController {
    public static final String URL_PAYPAL_SUCCESS = "public/pay/success";
    public static final String URL_PAYPAL_CANCEL = "public/pay/cancel";

    private Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private PaypalService paypalService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IEmailSenderService emailSenderService;

    @PostMapping("/user/pay-paypal")
    public ResponseEntity<?> pay(HttpServletRequest request, @RequestBody OrderDTO orderDTO) {
        Order order = orderService.payment(orderDTO, 0,0);
        String cancelUrl = PayPalUtils.getBaseURL(request) + "/api/" + URL_PAYPAL_CANCEL + "?orderId=" + order.getId();
        String successUrl = PayPalUtils.getBaseURL(request) + "/api/" + URL_PAYPAL_SUCCESS + "?orderId=" + order.getId();
        try {
            BigDecimal totalMoney = orderDTO.getTotalMoney().divide(new BigDecimal(23000), 2, RoundingMode.DOWN);
            Payment payment = paypalService.createPayment(totalMoney, "USD", PaypalPaymentMethod.paypal, PaypalPaymentIntent.sale, "payment description", cancelUrl, successUrl);
            for (Links links : payment.getLinks())
                if (links.getRel().equals("approval_url")) return new ResponseEntity<>(new PaypalRedirectDTO(links.getHref() + "&orderId=" +order.getId()), HttpStatus.OK);
        }catch(PayPalRESTException e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(new PaypalRedirectDTO("/"), HttpStatus.OK);
    }
    @GetMapping(URL_PAYPAL_CANCEL)
    public ResponseEntity<Void> cancelPay(@RequestParam("orderId") int orderId) throws URISyntaxException {
        orderService.deleteOrderById(orderId);
        URI uri = new URI("http://localhost:3000/payment?transaction_paypal=failed");
        return ResponseEntity.status(HttpStatus.FOUND).location(uri).build();
    }
    @GetMapping(URL_PAYPAL_SUCCESS)
    public ResponseEntity<?> successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId, @RequestParam("orderId") int orderId) throws URISyntaxException {
        Order order = orderService.findOrderById(orderId);
        order.setStatusPayment(1);
        orderService.saveNewOrder(order);
        String email = order.getUser().getEmail();
        URI uri = new URI("http://localhost:3000?transaction_paypal=success");
        try {
            Payment payment = paypalService.executePayment(paymentId, payerId);
            if(payment.getState().equals("approved")) {
                emailSenderService.sendInfoOrderThroughEmail(email, order);
                return ResponseEntity.status(HttpStatus.FOUND).location(uri).build();
            }
        } catch (PayPalRESTException e) {
            log.error(e.getMessage());
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

