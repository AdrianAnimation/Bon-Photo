-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-12-2024 a las 09:52:35
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bon_photo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `date` datetime NOT NULL,
  `status` tinyint NOT NULL COMMENT 'Boolean-like status field',
  `user_id` int NOT NULL,
  `photo_id` int NOT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `photo_id` (`photo_id`),
  KEY `fk_comments_parent` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `date` datetime DEFAULT NULL,
  `users_id` int DEFAULT NULL,
  `photos_id` int DEFAULT NULL,
  UNIQUE KEY `users_id` (`users_id`,`photos_id`),
  KEY `user_id` (`users_id`),
  KEY `photo_id` (`photos_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text COMMENT 'Photo description for details',
  `photo_url` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `alt` varchar(255) DEFAULT NULL COMMENT 'Alternative text for accessibility',
  `upload_date` int NOT NULL,
  `status` tinyint NOT NULL COMMENT 'Boolean-like status field',
  `users_id` int DEFAULT NULL,
  `categories_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`users_id`),
  KEY `category_id` (`categories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` tinyint NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(0, 'Admin'),
(1, 'Photographer'),
(2, 'User');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('781YUPKznG-MF0UWm1ruDe4O-bG82UJw', 1734031627, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:27:07.303Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":12,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:22:39.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('AODCHQKTEQNq23i_-5X5zT4nYN1OTofM', 1734031361, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:22:40.642Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":12,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:22:39.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('BQSWtL_pU5cwFCylf1if8pHK6FPDuIU7', 1734029890, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T18:58:10.232Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":11,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T17:58:09.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('DxPZBpzB-PSzrD23wjkts3zdjrEAHtk4', 1734031698, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:28:18.389Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":13,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:28:18.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('LJdbtU2OIkyjhhGnRvEGkDvJsvPGv05S', 1734031785, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:29:45.208Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":14,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:29:45.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('NGrtqIYrWaO-KovWKTKmDu8G7y8iBUob', 1734029890, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T18:58:09.721Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":11,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T17:58:09.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('PXoWN7c388JbJrc-eSURnGVggkW8Jcx1', 1734031360, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:22:40.113Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":12,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:22:39.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('SFp_stAVJm84m6kqkoGOmXRe6tnTCRri', 1734031628, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:27:07.783Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":12,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:22:39.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('phsq8zDSLp82QXnD7Kmk1CM1UTmJwabN', 1734031786, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-12-12T19:29:45.590Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":14,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:29:45.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}'),
('xGu_jBrd2leK2zFx9EZDl66RafEUCQZ5', 1734031699, '{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2024-12-12T19:28:18.834Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":13,\"username\":\"testuser\",\"email\":\"test@example.com\",\"created_at\":\"2024-12-11T18:28:18.000Z\",\"role_id\":2,\"is_photographer\":0,\"role_name\":\"User\"},\"isAuthenticated\":true}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL COMMENT 'User display name',
  `email` varchar(100) NOT NULL,
  `password` char(60) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `role_id` tinyint DEFAULT NULL,
  `is_photographer` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_details`
--

DROP TABLE IF EXISTS `user_details`;
CREATE TABLE IF NOT EXISTS `user_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int DEFAULT NULL,
  `location` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_comments_parent` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `photo_comments` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_comments` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `Fk_likes_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_photos` FOREIGN KEY (`photos_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photo_categories` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  ADD CONSTRAINT `users_photos` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `user_details`
--
ALTER TABLE `user_details`
  ADD CONSTRAINT `Fk_user_details_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
