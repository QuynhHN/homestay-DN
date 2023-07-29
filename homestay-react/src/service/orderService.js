import axios from "axios";

export const getInforUserByNameAccount = async (username, token) => {
  try {
    const result = await axios.post(
      "http://localhost:8080/api/public/infor-user",
      { nameAccount: username }
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const paymentByPayPal = async (value, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const result = await axios.post(
      "http://localhost:8080/api/user/pay-paypal",
      value,
      { headers }
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
