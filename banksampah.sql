-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2024 at 05:16 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banksampah`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'adnan', 'adnan');

-- --------------------------------------------------------

--
-- Table structure for table `log_saldo`
--

CREATE TABLE `log_saldo` (
  `id` int(11) NOT NULL,
  `tanggal` datetime NOT NULL DEFAULT current_timestamp(),
  `jenis_perubahan` varchar(255) DEFAULT NULL,
  `nilai_perubahan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_saldo`
--

INSERT INTO `log_saldo` (`id`, `tanggal`, `jenis_perubahan`, `nilai_perubahan`) VALUES
(1, '2024-01-18 01:47:39', 'Penambahan Saldo', 1000),
(2, '2024-01-18 01:49:50', 'Penarikan Saldo', -1200),
(3, '2024-01-18 01:50:29', 'Penambahan Saldo', 5000),
(4, '2024-01-18 03:02:47', 'Penarikan Saldo', -750),
(5, '2024-01-18 03:09:49', 'Penambahan Saldo', 70),
(6, '2024-01-18 03:10:57', 'Penarikan Saldo', -750),
(7, '2024-01-18 03:18:29', 'Penarikan Saldo', -750),
(8, '2024-01-18 03:36:57', 'Penambahan Saldo', 140),
(9, '2024-01-18 03:37:17', 'Penambahan Saldo', 2900),
(10, '2024-01-18 11:37:06', 'Penarikan Saldo', -1000),
(11, '2024-01-18 11:37:30', 'Penambahan Saldo', 350),
(12, '2024-01-18 11:41:49', 'Penarikan Saldo', -1500),
(13, '2024-01-18 12:38:15', 'Penambahan Saldo', 200),
(14, '2024-01-18 12:39:02', 'Penarikan Saldo', -750),
(15, '2024-01-18 12:52:39', 'Penambahan Saldo', 200),
(16, '2024-01-20 11:02:54', 'Penambahan Saldo', 100);

-- --------------------------------------------------------

--
-- Table structure for table `saldo`
--

CREATE TABLE `saldo` (
  `id` int(11) NOT NULL,
  `saldo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saldo`
--

INSERT INTO `saldo` (`id`, `saldo`) VALUES
(1, 3610);

-- --------------------------------------------------------

--
-- Table structure for table `stor_barang`
--

CREATE TABLE `stor_barang` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp(),
  `jumlah` varchar(50) NOT NULL,
  `barang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stor_barang`
--

INSERT INTO `stor_barang` (`id`, `tanggal`, `jumlah`, `barang`) VALUES
(1, '2024-01-18', '4', 100),
(2, '2024-01-18', '13', 70),
(3, '2024-01-18', '10', 100),
(4, '2024-01-18', '50', 100),
(5, '2024-01-18', '1', 70),
(6, '2024-01-18', '2', 70),
(7, '2024-01-18', '29', 100),
(8, '2024-01-18', '5', 70),
(9, '2024-01-18', '2', 100),
(10, '2024-01-18', '2', 100),
(11, '2024-01-20', '1', 100);

--
-- Triggers `stor_barang`
--
DELIMITER $$
CREATE TRIGGER `tambah_saldo_log` AFTER INSERT ON `stor_barang` FOR EACH ROW BEGIN
    DECLARE X INT;

    
    SET X = NEW.jumlah * NEW.barang;

    
    UPDATE saldo
    SET saldo = saldo + X
    WHERE id = 1;

    
    INSERT INTO log_saldo (jenis_perubahan, nilai_perubahan)
    VALUES ('Penambahan Saldo', X);

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tarik_saldo`
--

CREATE TABLE `tarik_saldo` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp(),
  `jumlah` int(20) NOT NULL,
  `tukar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tarik_saldo`
--

INSERT INTO `tarik_saldo` (`id`, `tanggal`, `jumlah`, `tukar`) VALUES
(3, '2024-01-18', 1, 750),
(4, '2024-01-18', 1, 1000),
(5, '2024-01-18', 1, 1200),
(6, '2024-01-18', 1, 750),
(7, '2024-01-18', 1, 750),
(8, '2024-01-18', 1, 750),
(9, '2024-01-18', 1, 1000),
(10, '2024-01-18', 2, 750),
(11, '2024-01-18', 1, 750);

--
-- Triggers `tarik_saldo`
--
DELIMITER $$
CREATE TRIGGER `tarik_saldo_log` AFTER INSERT ON `tarik_saldo` FOR EACH ROW BEGIN
    DECLARE X INT;
    SET X = NEW.jumlah * NEW.tukar;

    UPDATE saldo
    SET saldo = saldo - X
    WHERE id = 1; 

    INSERT INTO log_saldo (jenis_perubahan, nilai_perubahan)
    VALUES ('Penarikan Saldo', -X);

END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log_saldo`
--
ALTER TABLE `log_saldo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saldo`
--
ALTER TABLE `saldo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stor_barang`
--
ALTER TABLE `stor_barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tarik_saldo`
--
ALTER TABLE `tarik_saldo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `log_saldo`
--
ALTER TABLE `log_saldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `saldo`
--
ALTER TABLE `saldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stor_barang`
--
ALTER TABLE `stor_barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tarik_saldo`
--
ALTER TABLE `tarik_saldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
