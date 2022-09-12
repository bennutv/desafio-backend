-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Set-2022 às 22:41
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bunne`
--
CREATE DATABASE IF NOT EXISTS `bunne` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bunne`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `publisher_name` varchar(256) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `subtitle` varchar(256) DEFAULT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `publisher_media` varchar(256) DEFAULT NULL,
  `news_category_id` int(11) DEFAULT NULL,
  `publisher_media_2` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `news`
--

INSERT INTO `news` (`id`, `publisher_name`, `title`, `subtitle`, `image_url`, `date`, `publisher_media`, `news_category_id`, `publisher_media_2`) VALUES
(782973, 'Correio do Povo', 'Ex-paciente transplantada do Clínicas retribui gratidão às crianças internadas', 'Clarissa Auler recebeu um coração em agosto e nesta quarta-feira, ela voltou ao hospital para agradecer', 'https://bobcontents.bennuapp.com.br/images/news/correio-do-povo/201910311620275dbb33fbb17a4.JPG%3F%2524p%3Dd8abdfe%26Tamanho%3D720', '2019-10-31 13:20:14', 'https://bobcontents.bennuapp.com.br/publisher_medias/correio-do-povo-color.png', 2, 'https://bobcontents.bennuapp.com.br/publisher_medias/correio_povo/logo-color.svg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=782974;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
