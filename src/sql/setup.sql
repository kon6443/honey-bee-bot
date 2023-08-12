CREATE DATABASE IF NOT EXISTS ChatBot;
USE ChatBot;
CREATE TABLE IF NOT EXISTS `Parties` (
    `id` int NOT NULL,
    `title` varchar(100) DEFAULT NULL,
    `limit` int DEFAULT '10',
    `time` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

