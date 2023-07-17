-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: homestay_dn
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id_account` int NOT NULL AUTO_INCREMENT,
  `name_account` varchar(255) DEFAULT NULL,
  `password_account` mediumtext,
  PRIMARY KEY (`id_account`),
  UNIQUE KEY `UKb78248al99h5s892whubkeg7e` (`name_account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility`
--

DROP TABLE IF EXISTS `facility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_facility` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility`
--

LOCK TABLES `facility` WRITE;
/*!40000 ALTER TABLE `facility` DISABLE KEYS */;
INSERT INTO `facility` VALUES (1,'Giường Đôi'),(2,'Vòi Hoa Sen'),(3,' Bãi Đỗ Xe'),(4,'Ấm Siêu Tốc'),(5,'Dịch Vụ Giặt Ủi'),(6,'Điều Hoà'),(7,'Bồn Tắm'),(8,'Tivi'),(9,'Bếp'),(10,'Đèn Đầu Giường'),(11,'Free Wifi'),(12,'Máy Sấy Tóc'),(13,'Tủ Lạnh'),(14,'Hệ Thống Nước Nóng');
/*!40000 ALTER TABLE `facility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` mediumtext,
  `day_feedback` date DEFAULT NULL,
  `point` int NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7k33yw505d347mw3avr93akao` (`user_id`),
  CONSTRAINT `FK7k33yw505d347mw3avr93akao` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,'Một trong những ưu điểm lớn của homestay là khả năng trải nghiệm văn hóa địa phương một cách chân thực. Du khách có cơ hội sống trong một ngôi nhà địa phương, tương tác với chủ nhà và tham gia vào các hoạt động hàng ngày của họ. Điều này mang lại trải nghiệm sâu sắc và gắn kết với văn hóa địa phương hơn so với việc ở khách sạn truyền thống.','2023-06-23',9,1),(2,' Homestay thường mang đến không gian sống thoải mái và cá nhân hơn so với khách sạn. Du khách có thể thuê một phòng riêng hoặc nguyên căn homestay, tận hưởng không gian riêng tư và tự do tổ chức các hoạt động cá nhân. Điều này đặc biệt hữu ích cho các gia đình, nhóm bạn hoặc những người muốn có không gian riêng tư để tận hưởng chuyến du lịch.','2023-05-18',9,2),(3,'Không đạt tiêu chuẩn chất lượng như mong đợi hoặc thiếu các tiện nghi của khách sạn. Điều này cần được xem xét khi lựa chọn homestay phù hợp với nhu cầu và mong muốn của mỗi du khách.','2022-09-29',10,3),(4,'Ngôi nhà truyền thống của họ rất đẹp và đầy đủ tiện nghi. Chúng tôi có một phòng riêng tư rất thoải mái và được trang bị đầy đủ các tiện nghi cần thiết. Cảm giác như ở nhà thực sự được tạo ra thông qua sự chăm sóc tỉ mỉ và không gian ấm cúng của homestay.','2023-04-02',9,4),(5,'Chủ nhà của chúng tôi đã rất hữu ích và nhiệt tình. Họ đã giới thiệu cho chúng tôi các hoạt động địa phương và địa điểm tham quan quan trọng trong khu vực. Họ cũng chia sẻ với chúng tôi về nền văn hóa, truyền thống và ẩm thực địa phương. Điều này giúp chúng tôi có một cái nhìn sâu sắc về đời sống và văn hóa Nhật Bản.','2023-06-23',9,5),(6,'Một điểm đặc biệt khác của homestay là bữa sáng. Chúng tôi được chủ nhà chuẩn bị một bữa sáng truyền thống Nhật Bản đơn giản nhưng ngon lành. Thực đơn bao gồm các món ăn địa phương như cơm, mì, trái cây và đậu phụ. Đây là một cách tuyệt vời để khám phá hương vị địa phương và thưởng thức ẩm thực truyền thống.','2023-07-11',9,6),(7,'Tổng quan, trải nghiệm homestay của chúng tôi đã vượt qua mong đợi. Chúng tôi không chỉ tận hưởng sự thoải mái và không gian cá nhân, mà còn được chứng kiến và tham gia vào cuộc sống đích thực của người dân địa phương. Homestay mang lại cho chúng tôi một trải nghiệm du lịch độc đáo và gắn kết với văn hóa địa phương.','2023-01-20',10,5);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_room`
--

DROP TABLE IF EXISTS `img_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `img_room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path_img` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_room`
--

LOCK TABLES `img_room` WRITE;
/*!40000 ALTER TABLE `img_room` DISABLE KEYS */;
INSERT INTO `img_room` VALUES (1,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9828-scaled.jpg'),(2,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9829-scaled.jpg'),(3,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9834-scaled.jpg'),(4,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9836-scaled.jpg'),(5,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9842-scaled.jpg'),(6,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/ANA9846-scaled.jpg'),(7,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9530-scaled.jpg'),(8,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9533-scaled.jpg'),(9,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9543-scaled.jpg'),(10,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9545-scaled.jpg'),(11,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9546-scaled.jpg'),(12,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9554-scaled.jpg'),(13,'https://homestaychat.com/wp-content/uploads/sites/88/2023/03/K7A8925-scaled.jpg'),(14,'https://homestaychat.com/wp-content/uploads/sites/88/2023/03/K7A8916-scaled.jpg'),(15,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/1.jpg'),(16,'https://homestaychat.com/wp-content/uploads/sites/88/2023/03/K7A9245-scaled.jpg'),(17,'https://homestaychat.com/wp-content/uploads/sites/88/2023/03/K7A9243-scaled.jpg'),(18,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/5-1.jpg'),(19,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/ANA9703-scaled.jpg'),(20,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/ANA9698-scaled.jpg'),(21,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/ANA9613-scaled.jpg'),(22,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/ANA9616-scaled.jpg'),(23,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/ANA9625-scaled.jpg'),(24,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/z3462563117342_a6f82ec4d6edd829b39b74eeb51cf7bc.jpg'),(25,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/z3462563114718_d8bce0902d170cd4450f526ca41c5001.jpg'),(26,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/z3462563103740_010632727e4d014c1c97da321641d12d.jpg'),(27,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2710-3.jpg'),(28,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2659.jpg'),(29,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2695.jpg'),(30,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2710-2.jpg'),(31,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2659.jpg'),(32,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2683-2.jpg'),(33,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2902.jpg'),(34,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/VQK_2917-1.jpg'),(35,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/5-2.jpg'),(36,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/2-2.jpg'),(37,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/3-4.jpg'),(38,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/6.jpg'),(39,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/7.jpg'),(40,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/8-2.jpg'),(41,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/25.jpg'),(42,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/5-3.jpg'),(43,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/8-3.jpg'),(44,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/9-2.jpg'),(45,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/10.jpg'),(46,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8014-2-scaled.jpg'),(47,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8016-2-scaled.jpg'),(48,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8017-2-scaled.jpg'),(49,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8021-2-scaled.jpg'),(50,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8022-2-scaled.jpg'),(51,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8035-2-scaled.jpg'),(52,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8137-2-scaled.jpg'),(53,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8141-2-scaled.jpg'),(54,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8148-2-scaled.jpg'),(55,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8156-2-scaled.jpg'),(56,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8172-2-scaled.jpg'),(57,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A8206-2-scaled.jpg'),(58,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/7-3.jpg'),(59,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/23-2.jpg'),(60,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/1-4.jpg'),(61,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/4-6.jpg'),(62,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/5-5.jpg'),(63,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/8-5.jpg'),(64,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/1-3.jpg'),(65,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/2-3.jpg'),(66,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/3-6.jpg'),(67,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/9-3.jpg'),(68,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/10-1.jpg'),(69,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/11-1.jpg'),(70,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7891-scaled.jpg'),(71,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7892-scaled.jpg'),(72,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7898-scaled.jpg'),(73,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7914-scaled.jpg'),(74,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7911-scaled.jpg'),(75,'https://homestaychat.com/wp-content/uploads/sites/88/2023/01/K7A7921-scaled.jpg'),(76,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9637-scaled.jpg'),(77,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9638-scaled.jpg'),(78,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9645-scaled.jpg'),(79,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9650-scaled.jpg'),(80,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9651-scaled.jpg'),(81,'https://homestaychat.com/wp-content/uploads/sites/88/2022/10/97A9658-scaled.jpg');
/*!40000 ALTER TABLE `img_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount_customer` int NOT NULL,
  `date_pay` date DEFAULT NULL,
  `date_receive` date DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `time_receive` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqm716iej8pqkpufruq6yw0vb0` (`room_id`),
  CONSTRAINT `FKqm716iej8pqkpufruq6yw0vb0` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code_order` varchar(255) DEFAULT NULL,
  `date_booking` date DEFAULT NULL,
  `total_money` decimal(12,0) DEFAULT NULL,
  `order_detail_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK19p8j74c74j5717x1m1i8wsf3` (`order_detail_id`),
  KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`),
  CONSTRAINT `FK19p8j74c74j5717x1m1i8wsf3` FOREIGN KEY (`order_detail_id`) REFERENCES `order_detail` (`id`),
  CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `name_role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_account`
--

DROP TABLE IF EXISTS `roles_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_account` (
  `id_account` int NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id_account`,`id_role`),
  KEY `FKnvs50pyjfjt4vt6ce6dusthr7` (`id_role`),
  CONSTRAINT `FKhmjmuey66690ke8jtj8yyfv7h` FOREIGN KEY (`id_account`) REFERENCES `account` (`id_account`),
  CONSTRAINT `FKnvs50pyjfjt4vt6ce6dusthr7` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_account`
--

LOCK TABLES `roles_account` WRITE;
/*!40000 ALTER TABLE `roles_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area_room` double NOT NULL,
  `available_room` int NOT NULL,
  `description` mediumtext,
  `name_room` varchar(255) DEFAULT NULL,
  `price` decimal(12,0) DEFAULT NULL,
  `type_room_id` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK51c5hevn772m15k39yqjq1yfb` (`type_room_id`),
  CONSTRAINT `FK51c5hevn772m15k39yqjq1yfb` FOREIGN KEY (`type_room_id`) REFERENCES `type_room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,50,1,'Tọa lạc trên con phố Châu Long yên bình, gần Đảo Ngọc Ngũ Xã, Old Quarter View 4 với bể bơi mini sẽ là điểm dừng chân lý tưởng cho các du khách. \n Với phong cách thiết kế độc đáo và hệ thống tự check in, căn hộ mang đến cho quý khách sự riêng tư và thoải mái như đang ở trong chính ngôi nhà của mình. \n Trong căn hộ có bếp với dụng cụ nấu ăn đủ dùng dành cho 2 người để quý khách có thể tự mình nấu các món ăn đơn giản; Smart Tivi đã có sẵn tài khoản Netflix, bể bơi mini riêng tư, … \n Tòa nhà có thang máy và có khu vực để xe máy miễn phí. \n Ngoài ra, Homestay CHẤT có hỗ trợ tư vấn các dịch vụ khác (tính thêm phí) như: dịch vụ đưa đón sân bay, trang trí sinh nhật – ngày kỷ niệm, trang trí bồn tắm, tiệc coldcut, …','OLD QUARTER VIEW 4 (CL4)',1099000,1,'Ngũ Hành Sơn'),(2,50,1,'Tọa lạc trên con phố Châu Long yên bình, gần Đảo Ngọc Ngũ Xã, Old Quarter View 2 sẽ là điểm dừng chân lý tưởng cho các du khách. \n Với phong cách thiết kế độc đáo và hệ thống tự check in, căn hộ mang đến cho quý khách sự riêng tư và thoải mái như đang ở trong chính ngôi nhà của mình. \n Trong căn hộ có bếp với dụng cụ nấu ăn đủ dùng dành cho 2 người để quý khách có thể tự mình nấu các món ăn đơn giản; Smart Tivi đã có sẵn tài khoản Netflix, bể bơi mini riêng tư, … \n Tòa nhà có thang máy và có khu vực để xe máy miễn phí. \n Ngoài ra, Homestay CHẤT có hỗ trợ tư vấn các dịch vụ khác (tính thêm phí) như: dịch vụ đưa đón sân bay, trang trí sinh nhật – ngày kỷ niệm, trang trí bồn tắm, tiệc coldcut, …','OLD QUATER VIEW 2 (CL2)',799000,4,'Ngũ Hành Sơn'),(3,28,1,'Nằm giữa trung tâm phố cổ chỉ cách 10 phút đi bộ ra Hồ Gươm, từng ngóc ngách trong mỗi căn homestay đem lại cảm giác được tận hưởng resort thu nhỏ giữa lòng phố cổ, với ánh sáng tự nhiên tràn ngập, cũng những gam màu dịu mát, sự tươi mới, thanh tao đơn giản. Tại đây bạn có thể tận hưởng cuộc sống đầy màu sắc của người dân phố cổ với những thanh âm đặc trưng như: tiếng rao hàng, tiếng xe cộ, những bản nhạc xưa cũ','INFINITY TUB1 (HTC1)',699000,4,'Hải Châu'),(4,28,1,'Nằm giữa trung tâm phố cổ, chỉ cách 10 phút đi bộ ra Hồ Gươm. Từng ngóc ngách trong mỗi căn homestay đem lại cảm giác được tận hưởng resort thu nhỏ giữa lòng phố cổ, với ánh sáng tự nhiên tràn ngập, cũng những gam màu dịu mát, sự tươi mới, thanh tao đơn giản. Tại đây bạn có thể tận hưởng cuộc sống đầy màu sắc của người dân phố cổ với những thanh âm đặc trưng như: tiếng rao hàng, tiếng xe cộ, những bản nhạc xưa cũ','INFINITY TUB 2 (HTC2)',699000,4,'Hải Châu'),(5,35,1,'Nằm giữa trung tâm phố cổ, chỉ cách 10 phút đi bộ ra Hồ Gươm. Từng ngóc ngách trong mỗi căn homestay đem lại cảm giác được tận hưởng resort thu nhỏ giữa lòng phố cổ, với ánh sáng tự nhiên tràn ngập, cũng những gam màu dịu mát, sự tươi mới, thanh tao đơn giản. Tại đây bạn có thể tận hưởng cuộc sống đầy màu sắc của người dân phố cổ với những thanh âm đặc trưng như: tiếng rao hàng, tiếng xe cộ, những bản nhạc xưa cũ','TROPICAL HOME 1 (HTC3)',699000,3,'Thanh Khê'),(6,35,1,'Nằm giữa trung tâm phố cổ chỉ cách 10 phút đi bộ ra Hồ Gươm. Từng ngóc ngách trong mỗi căn homestay đem lại cảm giác được tận hưởng resort thu nhỏ giữa lòng phố cổ, với ánh sáng tự nhiên tràn ngập, cũng những gam màu dịu mát, sự tươi mới, thanh tao đơn giản. Tại đây bạn có thể tận hưởng cuộc sống đầy màu sắc của người dân phố cổ với những thanh âm đặc trưng như: tiếng rao hàng rong vào mỗi sáng, tiếng xe cộ, những bản nhạc xưa cũ','TROPICAL HOME 2 (HTC4)',699000,3,'Thanh Khê'),(7,50,1,'Căn homestay nhỏ xinh tọa lạc tại 12 Hàng Than – không gian sống yên bình hướng tầm mắt ra là quang cảnh ngôi chùa cổ kính, linh thiêng và tận hưởng resort thu nhỏ giữa lòng phố cổ. \n Với lối kiến trúc mang hơi thở người Việt nhưng vẫn hiện đại, tiện nghi, căn hộ thơm đượm mùi gỗ mộc. Tất cả đều phối hợp hài hòa, bắt mắt, mang lại cảm giác ấm cúng, tinh tế, khác biệt với cuộc sống xô bồ phố thị.​ \n Đến với Homestay CHẤT bạn sẽ được trải nghiệm sự độc – lạ – chất với một góc vườn bé xinh với cây xanh, hồ nước, hiên gỗ…đem đến sự mộc mạc và gần gũi với thiên nhiên.','PAGODA VIEW 1 (HT1)',799000,2,'Cẩm Lệ'),(8,50,1,'Căn homestay nhỏ xinh tọa lạc tại 12 Hàng Than – không gian sống yên bình hướng tầm mắt ra là quang cảnh ngôi chùa cổ kính, linh thiêng và tận hưởng resort thu nhỏ giữa lòng phố cổ. \n Với lối kiến trúc mang hơi thở người Việt nhưng vẫn hiện đại, tiện nghi, căn hộ thơm đượm mùi gỗ mộc. Tất cả đều phối hợp hài hòa, bắt mắt, mang lại cảm giác ấm cúng, tinh tế, khác biệt với cuộc sống xô bồ phố thị.​ \n Đến với Homestay CHẤT bạn sẽ được trải nghiệm sự độc – lạ – chất với một góc vườn bé xinh với cây xanh, hồ nước, hiên gỗ…đem đến sự mộc mạc và gần gũi với thiên nhiên.','PAGODA VIEW2 (HT2)',799000,2,'Cẩm Lệ'),(9,30,1,'Căn homestay có vị trí đắc địa, cách Hồ Gươm chỉ 15 – 20 phút đi bộ, được thiết kế với 2 gam chủ đạo ĐEN – TRẮNG đem lại ấn tượng thị giác độc đáo và phá cách. \n Đặc biệt không thể bỏ qua trải nghiệm nhà gỗ với những bức tường ốp gỗ, bậc thang gỗ, bồn tắm gỗ…, khiến không gian trở nên sang trọng, ấm cúng, gần gũi.  Khu vực bếp được trang bị tiện nghi vừa đủ cho 2 người. ','BLACK & WHITE 1 (PCT5)',699000,3,'Hải Châu'),(10,30,1,'Căn homestay có vị trí đắc địa, cách Hồ Gươm chỉ 15 – 20 phút đi bộ, được thiết kế với 2 gam chủ đạo ĐEN – TRẮNG đem lại ấn tượng thị giác độc đáo và phá cách. \n Đặc biệt không thể bỏ qua trải nghiệm nhà gỗ với những bức tường ốp gỗ, bậc thang gỗ, bồn tắm gỗ…, khiến không gian trở nên sang trọng, ấm cúng, gần gũi.  Khu vực bếp được trang bị tiện nghi vừa đủ cho 2 người. ','BLACK & WHITE 2 (PCT4)',699000,3,'Hải Châu'),(11,65,1,'Tọa lạc tại con phố Cửa Nam – nơi có hàng loạt dãy nhà cổ kính từ thời xa xưa. \n THE OASIS VIEW được ví như một ốc đảo giữa lòng Hà Nội, căn phòng nằm ẩn mình trong một căn ngõ nhỏ hẹp chưa tới 10m2 vậy mà lại rộng rãi tới lạ thường. \n Với sự khéo léo trong việc sử dụng nguyên liệu gỗ và tông màu chủ đạo trung tính, căn phòng như một câu chuyện muốn dẫn dắt chúng ta tới để khám phá. \n Căn phòng được thiết kế trong không gian mở. Khu vực bếp tiện nghi, đầy đủ dụng cụ, rất thích hợp dành cho việc tụ tập từ 4 người trở lên. \n Chiếc ban công ngập tràn cây xanh cùng một ao cá nhỏ, view toàn cảnh Cửa Nam, đem đến cho bạn trải nghiệm cực chất đến khó tin.','OASIS VIEW 2 (CN2)',1299000,1,'Hải Châu'),(12,70,1,'Tọa lạc tại con phố Cửa Nam – nơi có hàng loạt dãy nhà cổ kính từ thời xa xưa. \n THE OASIS VIEW được ví như một ốc đảo giữa lòng Hà Nội, căn phòng nằm ẩn mình trong một căn ngõ nhỏ hẹp chưa tới 10m2 vậy mà lại rộng rãi tới lạ thường. \n Với sự khéo léo trong việc sử dụng nguyên liệu gỗ và tông màu chủ đạo trung tính, căn phòng như một câu chuyện muốn dẫn dắt chúng ta tới để khám phá. \n Căn phòng được thiết kế trong không gian mở. Khu vực bếp tiện nghi, đầy đủ dụng cụ, rất thích hợp dành cho việc tụ tập từ 4 người trở lên. \n Chiếc ban công ngập tràn cây xanh cùng một ao cá nhỏ, view toàn cảnh Cửa Nam, đem đến cho bạn trải nghiệm cực chất đến khó tin.','OASIS VIEW 1 (CN1)',1299000,1,'Hải Châu'),(13,30,1,'Tọa lạc trên con phố Châu Long yên bình, gần Đảo Ngọc Ngũ Xã, Old Quarter View 6 sẽ là điểm dừng chân lý tưởng cho các du khách','OLD QUARTER VIEW 6 (CL6)',899000,4,'Ngũ Hành Sơn'),(14,50,1,'Tọa lạc trên con phố Châu Long yên bình, gần Đảo Ngọc Ngũ Xã, Old Quarter View 3 sẽ là điểm dừng chân lý tưởng cho các du khách','OLD QUATER VIEW 3 (CL3)',799000,3,'Ngũ Hành Sơn');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_facilities`
--

DROP TABLE IF EXISTS `room_facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_facilities` (
  `room_id` int NOT NULL,
  `facilities_id` int NOT NULL,
  KEY `FK73wqdgovnh1ixeec7iqy68rus` (`facilities_id`),
  KEY `FKqu8hof7g5k9ypcai41nru1b3e` (`room_id`),
  CONSTRAINT `FK73wqdgovnh1ixeec7iqy68rus` FOREIGN KEY (`facilities_id`) REFERENCES `facility` (`id`),
  CONSTRAINT `FKqu8hof7g5k9ypcai41nru1b3e` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_facilities`
--

LOCK TABLES `room_facilities` WRITE;
/*!40000 ALTER TABLE `room_facilities` DISABLE KEYS */;
INSERT INTO `room_facilities` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(2,13),(2,14),(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12),(3,13),(3,14),(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8),(4,9),(4,10),(4,11),(4,12),(4,13),(4,14),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(5,10),(5,11),(5,12),(5,13),(5,14),(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(6,7),(6,8),(6,9),(6,10),(6,11),(6,12),(6,13),(6,14),(7,1),(7,2),(7,3),(7,4),(7,5),(7,6),(7,7),(7,8),(7,9),(7,10),(7,11),(7,12),(7,13),(7,14),(8,1),(8,2),(8,3),(8,4),(8,5),(8,6),(8,7),(8,8),(8,9),(8,10),(8,11),(8,12),(8,13),(8,14),(9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(9,7),(9,8),(9,9),(9,10),(9,11),(9,12),(9,13),(9,14),(10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),(10,8),(10,9),(10,10),(10,11),(10,12),(10,13),(10,14),(11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),(11,8),(11,9),(11,10),(11,11),(11,12),(11,13),(11,14),(12,1),(12,2),(12,3),(12,4),(12,5),(12,6),(12,7),(12,8),(12,9),(12,10),(12,11),(12,12),(12,13),(12,14),(13,1),(13,2),(13,3),(13,4),(13,5),(13,6),(13,7),(13,8),(13,9),(13,10),(13,11),(13,12),(13,13),(13,14),(14,1),(14,2),(14,3),(14,4),(14,5),(14,6),(14,7),(14,8),(14,9),(14,10),(14,11),(14,12),(14,13),(14,14);
/*!40000 ALTER TABLE `room_facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_img_rooms`
--

DROP TABLE IF EXISTS `room_img_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_img_rooms` (
  `room_id` int NOT NULL,
  `img_rooms_id` int NOT NULL,
  KEY `FKoiiqjl9kua02gp9egx5wpwkul` (`img_rooms_id`),
  KEY `FKllg2qg1b2jbjaajbac7fa5jhb` (`room_id`),
  CONSTRAINT `FKllg2qg1b2jbjaajbac7fa5jhb` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  CONSTRAINT `FKoiiqjl9kua02gp9egx5wpwkul` FOREIGN KEY (`img_rooms_id`) REFERENCES `img_room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_img_rooms`
--

LOCK TABLES `room_img_rooms` WRITE;
/*!40000 ALTER TABLE `room_img_rooms` DISABLE KEYS */;
INSERT INTO `room_img_rooms` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(3,13),(3,14),(3,15),(3,16),(3,17),(4,18),(4,19),(4,20),(4,21),(4,22),(4,23),(5,24),(5,25),(5,26),(5,27),(5,28),(6,29),(6,30),(6,31),(6,32),(6,33),(6,34),(7,35),(7,36),(7,37),(7,38),(7,39),(7,40),(8,41),(8,42),(8,43),(8,44),(8,45),(8,41),(8,42),(8,43),(8,44),(8,45),(9,46),(9,47),(9,48),(9,49),(9,50),(9,51),(10,52),(10,53),(10,54),(10,55),(10,56),(10,57),(11,58),(11,59),(11,60),(11,61),(11,62),(11,63),(12,64),(12,65),(12,66),(12,67),(12,68),(12,69),(13,70),(13,71),(13,72),(13,73),(13,74),(13,75),(14,76),(14,77),(14,78),(14,79),(14,80),(14,81);
/*!40000 ALTER TABLE `room_img_rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_room`
--

DROP TABLE IF EXISTS `type_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_type_room` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_room`
--

LOCK TABLES `type_room` WRITE;
/*!40000 ALTER TABLE `type_room` DISABLE KEYS */;
INSERT INTO `type_room` VALUES (1,'Thương gia'),(2,'Vip'),(3,'Hiện đại'),(4,'Truyền thống'),(5,'Thường');
/*!40000 ALTER TABLE `type_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `identity_card` varchar(45) DEFAULT NULL,
  `name_customer` varchar(255) DEFAULT NULL,
  `path_img` mediumtext,
  `phone_number` varchar(20) DEFAULT NULL,
  `account_id_account` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1wax3s08ckoffan9g30vrjku6` (`account_id_account`),
  CONSTRAINT `FK1wax3s08ckoffan9g30vrjku6` FOREIGN KEY (`account_id_account`) REFERENCES `account` (`id_account`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,NULL,NULL,NULL,'Lê Văn Chính','https://album.mediaset.es/cimg/1000001/2017/04/03/neymar1024_41d9.jpg?w=1024',NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL,'Nguyễn Quốc Anh','https://s.yimg.com/uu/api/res/1.2/6BryI7Ym1jO6eGeGI6nl_A--~B/aD0zNDc4O3c9NTIxNjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-10/cb48edb0-f805-11e9-bdf3-742bb64756a4',NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL,'Nguyễn Hà Anh Quốc','https://cdnmedia.webthethao.vn/uploads/media/images/files/thang.lequyet/Ro_beo1477901362.png',NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL,'Hoàng Thị Như Quỳnh','https://kpopfacts.com/wp-content/uploads/2021/04/Rose-1.jpg',NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,'Phan Văn Đồng','https://images.daznservices.com/di/library/GOAL/b1/24/vinicius-junior-real-madrid-2019-20_9xicbub0yj1h1615zqeqtls9a.jpg?t=-79285266&quality=100',NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL,'Phạm Hoàng Hải','https://images.daznservices.com/di/library/GOAL/2a/dd/marcelo-real-madrid-2019-20_1k9zgvl6la2j31bsyj48kr91r7.jpg?t=1597563916&quality=100',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17 11:40:17
