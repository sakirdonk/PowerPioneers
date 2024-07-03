-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 04:11 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travners_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id` int(11) NOT NULL,
  `judul_artikel` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `main_foto` varchar(100) NOT NULL,
  `subjudul` varchar(255) DEFAULT NULL,
  `foto_list` text DEFAULT NULL,
  `sub_deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id`, `judul_artikel`, `deskripsi`, `kategori`, `main_foto`, `subjudul`, `foto_list`, `sub_deskripsi`) VALUES
(1, 'Mau liburan ke Jakarta? Sambangi wisata terkenalnya', 'Jakarta, ibukota Indonesia, merupakan kota metropolitan yang penuh dengan gemerlap dan kesibukan. Namun, di balik hiruk pikuknya, Jakarta juga menyimpan pesona wisata yang tak kalah menarik.\r\n<br/><br/>\r\nBagi kamu yang ingin berlibur ke Jakarta, berikut beberapa wisata terkenal yang wajib kamu kunjungi:', 'rekomendasi', 'artikelmain1.png', NULL, NULL, NULL),
(3, 'test', 'test', 'test', 'test', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `daftar_travel`
--

CREATE TABLE `daftar_travel` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `phone_number` int(11) DEFAULT NULL,
  `email_user` int(11) DEFAULT NULL,
  `fetch_location` int(11) DEFAULT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `status_assurance_id` int(11) DEFAULT NULL,
  `status_pemandu_khusus_id` int(11) DEFAULT NULL,
  `destinasi_id` int(11) DEFAULT NULL,
  `jumlah_orang` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL,
  `tipe_pembayaran_id` int(11) DEFAULT NULL,
  `tanggal_travel` date DEFAULT NULL,
  `expired_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `daftar_travel`
--

INSERT INTO `daftar_travel` (`id`, `user_id`, `full_name`, `phone_number`, `email_user`, `fetch_location`, `user_type_id`, `status_assurance_id`, `status_pemandu_khusus_id`, `destinasi_id`, `jumlah_orang`, `total_harga`, `tipe_pembayaran_id`, `tanggal_travel`, `expired_date`) VALUES
(1, 1, 'Admin', 88112331, 1, -31353532, 1, 1, 1, 1, 2, 250000, 1, '2024-05-10', '2024-05-20'),
(6, 1, 'Admin', 88112331, 1, -31353532, 1, 1, 1, 1, 2, 250000, 1, '2024-05-10', '2024-05-20');

-- --------------------------------------------------------

--
-- Table structure for table `destinasi`
--

CREATE TABLE `destinasi` (
  `id` int(11) NOT NULL,
  `nama_destinasi` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `provinsi` varchar(100) NOT NULL,
  `negara` varchar(100) NOT NULL,
  `id_status_promo` int(11) NOT NULL,
  `id_status_gratis_refund` int(11) NOT NULL,
  `id_status_gratis_asuransi` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `tanggal_travel` text DEFAULT NULL,
  `included` text NOT NULL,
  `not_included` text DEFAULT NULL,
  `tanggal_tiket_kadaluarsa` date NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `destinasi`
--

INSERT INTO `destinasi` (`id`, `nama_destinasi`, `harga`, `provinsi`, `negara`, `id_status_promo`, `id_status_gratis_refund`, `id_status_gratis_asuransi`, `id_kategori`, `tanggal_travel`, `included`, `not_included`, `tanggal_tiket_kadaluarsa`, `foto`, `rating`) VALUES
(1, 'Sea World Ancol, Jakarta Utara', 1500000, 'Jakarta', 'Indonesia', 1, 1, 1, 1, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Tiket masuk ke Ancol untuk 1 orang, Sesi bermain selama 3 jam di hari kerja', 'Makan dan minum, Penginapan, Penjemputan', '2024-06-11', 'img-pantaiancol.png', 4.3),
(3, 'Pantai Carita, Jakarta Utara', 1500000, 'Jakarta', 'Indonesia', 1, 1, 1, 1, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-pantaicarita.png', 4.3),
(4, 'Museum Nasional, Jakarta Pusat', 300000, 'Jakarta', 'Indonesia', 1, 1, 1, 3, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi berkeliling selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-museumnasional.png', 4.6),
(5, 'Museum Sejarah, Jakarta Pusat', 300000, 'Jakarta', 'Indonesia', 1, 1, 1, 3, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-museumsejarah.png', 4.6),
(6, 'Museum BI, Jakarta Barat', 300000, 'Jakarta', 'Indonesia', 1, 1, 1, 3, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-museumBI.png', 4.7),
(7, 'Kota Tua, Jakarta Pusat', 500000, 'Jakarta', 'Indonesia', 1, 1, 1, 3, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-kotatua.png', 4.8),
(8, 'Ancol, Jakarta Utara', 1500000, 'Jakarta', 'Indonesia', 1, 1, 1, 2, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-ancol.png', 4.8),
(9, 'Ragunan, Jakarta Selatan', 500000, 'Jakarta', 'Indonesia', 1, 1, 1, 2, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-ragunan.png', 4.8),
(10, 'Sky World, Jakarta Timur', 500000, 'Jakarta', 'Indonesia', 1, 1, 1, 2, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-skyworld.png', 4.4),
(11, 'Museum Transport, Jakarta Timur', 300000, 'Jakarta', 'Indonesia', 1, 1, 1, 3, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-museumtransport.png', 4.5),
(12, 'Dunia Fantasi, Jakarta Utara', 1500000, 'Jakarta', 'Indonesia', 1, 1, 1, 2, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi bermain selama 5 jam', 'Penginapan, Penjemputan', '0000-00-00', 'img-duniafantasi.png', 4.8),
(13, 'Pulau Pari, Kepulauan Seribu', 2500000, 'Jakarta', 'Indonesia', 1, 1, 1, 1, 'Kamis, 13 Jun%Jumat, 14 Jun%Sabtu, 15 Jun%Minggu, 16 Jun%Senin, 17 Jun%Selasa, 18 Jun', 'Disediakan makan siang untuk 1 orang, Sesi berkeliling selama 5 jam', 'Penginapan, Penjemputan', '2024-06-13', 'img-pulaupari.png', 4.7);

-- --------------------------------------------------------

--
-- Table structure for table `kabupaten`
--

CREATE TABLE `kabupaten` (
  `id` int(11) NOT NULL,
  `id_provinsi` int(11) DEFAULT NULL,
  `nama_kabupaten` varchar(100) NOT NULL,
  `harga` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kabupaten`
--

INSERT INTO `kabupaten` (`id`, `id_provinsi`, `nama_kabupaten`, `harga`) VALUES
(1, 1, 'Jakarta Selatan', 50000),
(2, 1, 'Jakarta Timur', 50000),
(3, 1, 'Jakarta Barat', 50000),
(4, 1, 'Jakarta Utara', 50000);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `kategori`) VALUES
(2, 'Hiburan'),
(3, 'Museum'),
(1, 'Pantai');

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id` int(11) NOT NULL,
  `list_bank` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pembayaran`
--

INSERT INTO `pembayaran` (`id`, `list_bank`) VALUES
(1, 'BCA Virtual Account'),
(2, 'BRI Virtual Account'),
(3, 'Mandiri Virtual Account'),
(4, 'DKI Virtual Account');

-- --------------------------------------------------------

--
-- Table structure for table `provinsi`
--

CREATE TABLE `provinsi` (
  `id` int(11) NOT NULL,
  `nama_provinsi` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provinsi`
--

INSERT INTO `provinsi` (`id`, `nama_provinsi`) VALUES
(1, 'DKI Jakarta');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
(2, 'No'),
(1, 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tipe_user`
--

CREATE TABLE `tipe_user` (
  `id` int(11) NOT NULL,
  `user_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipe_user`
--

INSERT INTO `tipe_user` (`id`, `user_status`) VALUES
(2, 'Disabilitas'),
(1, 'Umum');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama_depan` varchar(255) NOT NULL,
  `nama_belakang` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama_depan`, `nama_belakang`, `email`, `password`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', '123456'),
(2, 'admin2', 'admin2', 'admin2@gmail.com', '123456'),
(3, 'Muhammad', 'Raihan', 'raihan@gmail.com', '654321'),
(4, 'raih', 'muha', 'raih@gmail.com', '123456'),
(5, 'muh', 'rreyy', 'reeyy@gmail.com', 'password'),
(9, 'admin', 'admin', 'unknown@gmail.com', '123456'),
(10, 'admin', 'admin', 'asduajwd@gmail.com', '123456'),
(11, 'asdasd', 'asdasd', 'admin3@gmail.com', '123456'),
(12, 'asdsad', 'asdasd', 'admin4@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `daftar_travel`
--
ALTER TABLE `daftar_travel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `email_user` (`email_user`),
  ADD KEY `user_type_id` (`user_type_id`),
  ADD KEY `status_assurance_id` (`status_assurance_id`),
  ADD KEY `status_pemandu_khusus_id` (`status_pemandu_khusus_id`),
  ADD KEY `destinasi_id` (`destinasi_id`),
  ADD KEY `tipe_pembayaran_id` (`tipe_pembayaran_id`);

--
-- Indexes for table `destinasi`
--
ALTER TABLE `destinasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status_promo` (`id_status_promo`),
  ADD KEY `id_status_gratis_refund` (`id_status_gratis_refund`),
  ADD KEY `id_status_gratis_asuransi` (`id_status_gratis_asuransi`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `kabupaten`
--
ALTER TABLE `kabupaten`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_provinsi` (`id_provinsi`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kategori` (`kategori`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinsi`
--
ALTER TABLE `provinsi`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nama_provinsi` (`nama_provinsi`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `status` (`status`);

--
-- Indexes for table `tipe_user`
--
ALTER TABLE `tipe_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_status` (`user_status`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `daftar_travel`
--
ALTER TABLE `daftar_travel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `destinasi`
--
ALTER TABLE `destinasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `kabupaten`
--
ALTER TABLE `kabupaten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `provinsi`
--
ALTER TABLE `provinsi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipe_user`
--
ALTER TABLE `tipe_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `daftar_travel`
--
ALTER TABLE `daftar_travel`
  ADD CONSTRAINT `daftar_travel_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_2` FOREIGN KEY (`email_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_3` FOREIGN KEY (`user_type_id`) REFERENCES `tipe_user` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_4` FOREIGN KEY (`status_assurance_id`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_5` FOREIGN KEY (`status_pemandu_khusus_id`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_6` FOREIGN KEY (`destinasi_id`) REFERENCES `destinasi` (`id`),
  ADD CONSTRAINT `daftar_travel_ibfk_7` FOREIGN KEY (`tipe_pembayaran_id`) REFERENCES `pembayaran` (`id`);

--
-- Constraints for table `destinasi`
--
ALTER TABLE `destinasi`
  ADD CONSTRAINT `destinasi_ibfk_1` FOREIGN KEY (`id_status_promo`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `destinasi_ibfk_2` FOREIGN KEY (`id_status_gratis_refund`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `destinasi_ibfk_3` FOREIGN KEY (`id_status_gratis_asuransi`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `destinasi_ibfk_4` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `kabupaten`
--
ALTER TABLE `kabupaten`
  ADD CONSTRAINT `kabupaten_ibfk_1` FOREIGN KEY (`id_provinsi`) REFERENCES `provinsi` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
