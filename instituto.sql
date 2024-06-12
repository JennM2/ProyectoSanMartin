-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-05-2024 a las 04:44:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `instituto`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`` PROCEDURE `VerificarAgregarMateria` (IN `nombreMateria` VARCHAR(255))   BEGIN
    DECLARE countSubjects INT;

    SELECT COUNT(*) INTO countSubjects
    FROM subjects 
    WHERE subject = nombreMateria COLLATE utf8mb4_unicode_ci 
    AND stateSubject = 'activo' COLLATE utf8mb4_unicode_ci;

    IF countSubjects > 0 THEN
        -- La materia ya existe y está activa, devuelve un mensaje indicando que no se puede agregar
        SELECT 'La materia ya existe y está activa. No se puede agregar otra materia con el mismo nombre.' AS message;
    ELSE
        BEGIN
            -- Obtener el idCareer correspondiente al nombre de la carrera 'Sistemas informaticos'
            DECLARE idCareer INT;
            SELECT idCareer INTO idCareer
            FROM careers 
            WHERE career = 'Sistemas informaticos';

            -- Agregar la nueva materia con el idCareer obtenido
            INSERT INTO subjects (year, subject, stateSubject, code, preSubject, idCareer)
            VALUES (1, nombreMateria, 'activo', '4561', 'jblbj', idCareer);

            -- Devuelve un mensaje indicando que la materia se agregó correctamente
            SELECT 'La materia se agregó correctamente.' AS message;
        END;
    END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `careers`
--

CREATE TABLE `careers` (
  `idCareer` int(11) NOT NULL,
  `career` varchar(100) DEFAULT NULL,
  `stateCareer` varchar(20) NOT NULL,
  `durationCar` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `careers`
--

INSERT INTO `careers` (`idCareer`, `career`, `stateCareer`, `durationCar`) VALUES
(1, 'Sistemas informaticos', 'activo', 3),
(2, 'Mercadotecnia', 'activo', 3),
(3, 'Economiaff', 'activo', 3),
(4, 'Secretariado', 'activo', 3),
(27, 'Matematica', 'activo', 5),
(28, 'Sistemas Contables', 'inactivo', 2),
(29, 'hthtr', 'inactivo', 2),
(30, 'Sistemas jjj', 'activo', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enable`
--

CREATE TABLE `enable` (
  `idEnable` int(11) NOT NULL,
  `idTeaSub` int(11) DEFAULT NULL,
  `month` varchar(20) NOT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL,
  `schedule` varchar(20) DEFAULT NULL,
  `stateEnable` varchar(20) NOT NULL,
  `scoreTeacher` int(11) NOT NULL,
  `numEvaluations` int(11) NOT NULL,
  `creationDate` datetime DEFAULT current_timestamp(),
  `updateDate` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `enable`
--

INSERT INTO `enable` (`idEnable`, `idTeaSub`, `month`, `dateStart`, `dateEnd`, `schedule`, `stateEnable`, `scoreTeacher`, `numEvaluations`, `creationDate`, `updateDate`) VALUES
(13, 31, 'Abril', '2024-05-07', '2024-05-09', 'Mañana', 'inactivo', 80, 25, '2024-05-07 23:30:13', '2024-05-08 18:45:00'),
(14, 32, 'Abril', '2024-05-05', '2024-05-08', 'Noche', 'activo', 80, 25, '2024-05-07 23:47:24', '2024-05-07 23:47:24'),
(15, 33, 'Abril', '2024-05-05', '2024-05-08', 'Mañana', 'activo', 80, 25, '2024-05-07 23:47:42', '2024-05-07 23:47:42'),
(16, 34, 'Abril', '2024-05-05', '2024-05-07', 'Tarde', 'activo', 80, 25, '2024-05-07 23:48:10', '2024-05-07 23:48:10'),
(17, 35, 'Abril', '2024-05-05', '2024-05-08', 'Tarde', 'activo', 80, 25, '2024-05-08 18:46:20', '2024-05-08 18:46:20'),
(18, 36, 'Abril', '2024-05-19', '2024-05-23', 'Mañana', 'activo', 80, 25, '2024-05-18 02:14:16', '2024-05-18 02:14:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notifications`
--

CREATE TABLE `notifications` (
  `idNotification` int(11) NOT NULL,
  `idTypNot` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `dateNot` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `idPayment` int(11) NOT NULL,
  `idStudent` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `datePay` date DEFAULT NULL,
  `idStatePay` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programming`
--

CREATE TABLE `programming` (
  `idProgramming` int(11) NOT NULL,
  `idStudent` int(11) DEFAULT NULL,
  `idEnable` int(11) DEFAULT NULL,
  `datePro` date DEFAULT NULL,
  `parcialOne` int(11) DEFAULT NULL,
  `parcialTwo` int(11) DEFAULT NULL,
  `parcialThree` int(11) DEFAULT NULL,
  `practices` int(11) DEFAULT NULL,
  `exam` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `programming`
--

INSERT INTO `programming` (`idProgramming`, `idStudent`, `idEnable`, `datePro`, `parcialOne`, `parcialTwo`, `parcialThree`, `practices`, `exam`) VALUES
(2, 10, 14, '2024-05-15', 25, 25, 25, 25, 25),
(3, 3, 13, '2024-05-15', 25, 25, 25, 25, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secretaries`
--

CREATE TABLE `secretaries` (
  `idSecretary` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secretaries`
--

INSERT INTO `secretaries` (`idSecretary`, `idUser`) VALUES
(61, 106),
(96, 140),
(97, 140),
(98, 141),
(99, 142),
(100, 143),
(101, 143),
(102, 144),
(103, 144);

--
-- Disparadores `secretaries`
--
DELIMITER $$
CREATE TRIGGER `delete_user_after_secretary_delete` AFTER DELETE ON `secretaries` FOR EACH ROW BEGIN
    -- Eliminar el usuario correspondiente de la tabla users
    DELETE FROM users WHERE idUser = OLD.idUser;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secretaries_notification`
--

CREATE TABLE `secretaries_notification` (
  `idSecNot` int(11) NOT NULL,
  `idSecretary` int(11) DEFAULT NULL,
  `idNotification` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `state_pay`
--

CREATE TABLE `state_pay` (
  `idStatePay` int(11) NOT NULL,
  `statePay` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `idStudent` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idCareer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`idStudent`, `idUser`, `idCareer`) VALUES
(3, 47, 1),
(5, 56, 1),
(10, 61, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subjects`
--

CREATE TABLE `subjects` (
  `idSubject` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `stateSubject` varchar(20) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `preSubject` varchar(100) DEFAULT NULL,
  `idCareer` int(11) DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subjects`
--

INSERT INTO `subjects` (`idSubject`, `year`, `subject`, `stateSubject`, `code`, `preSubject`, `idCareer`, `createDate`, `updateDate`) VALUES
(1, 2, 'aqui', 'habilitado', 'Hola', 'estoy', 4, '2024-05-23 01:44:59', '2024-05-23 23:36:53'),
(2, 2, 'Matematicas', 'activo', 'Eda-864', 'dsa-776', 4, '2024-05-23 01:44:59', '2024-05-23 17:09:19'),
(3, 2, 'Lengytgf', 'inactivo', 'Eda-864', 'dsa-776', 1, '2024-05-23 01:44:59', '2024-05-23 06:06:50'),
(4, 2, 'Forence', 'inactivo', 'Sis-710', 'Sis-624', 2, '2024-05-23 01:44:59', '2024-05-23 16:12:42'),
(5, 2, 'GESTION DE DISTRIBUCION', 'inactivo', 'GED-203', NULL, 1, '2024-05-23 01:44:59', '2024-05-23 06:07:08'),
(6, 3, 'MERCADOTECNIA INTERNACIONAL', 'inactivo', 'MIN-303', 'GED-203', 2, '2024-05-23 01:44:59', '2024-05-23 16:14:33'),
(7, 2, 'Lenguajezz', 'inactivo', 'Eda-864', 'dsa-776', 1, '2024-05-23 01:44:59', '2024-05-23 16:31:40'),
(8, 2, 'CONTABILIDAD II', 'inactivo', 'CON-201', 'CON-100', 4, '2024-05-23 01:44:59', '2024-05-23 16:32:23'),
(9, 3, 'GABINETE CONTABLE', 'inactivo', 'GAC-306', 'CON-201', 3, '2024-05-23 01:44:59', '2024-05-23 16:36:22'),
(10, 1, 'OFIMATICA I', 'inactivo', 'OFI-100', NULL, 4, '2024-05-23 01:44:59', '2024-05-23 16:36:33'),
(11, 2, 'OFIMATICA II', 'inactivo', 'OFI-204', 'OFI-100', 4, '2024-05-23 01:44:59', '2024-05-23 16:50:37'),
(12, 3, 'TALLER MODALIDAD', 'activo', 'TMG-304', 'OFI-204', 4, '2024-05-23 01:44:59', '2024-05-23 01:44:59'),
(13, 1, 'PROGRAMACION IQ', 'activo', 'PRG-1000', NULL, 1, '2024-05-23 01:44:59', '2024-05-23 01:44:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers`
--

CREATE TABLE `teachers` (
  `idTeacher` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `teachers`
--

INSERT INTO `teachers` (`idTeacher`, `idUser`) VALUES
(17, 42),
(18, 43),
(21, 46),
(22, 69),
(24, 86);

--
-- Disparadores `teachers`
--
DELIMITER $$
CREATE TRIGGER `delete_user_after_teacher_delete` AFTER DELETE ON `teachers` FOR EACH ROW BEGIN
    -- Eliminar el usuario correspondiente de la tabla users
    DELETE FROM users WHERE idUser = OLD.idUser;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers_subjects`
--

CREATE TABLE `teachers_subjects` (
  `idTeaSub` int(11) NOT NULL,
  `idTeacher` int(11) DEFAULT NULL,
  `idSubject` int(11) DEFAULT NULL,
  `stateTeaSub` varchar(20) DEFAULT NULL,
  `dateTeaSub` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateTeaSubEnd` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `teachers_subjects`
--

INSERT INTO `teachers_subjects` (`idTeaSub`, `idTeacher`, `idSubject`, `stateTeaSub`, `dateTeaSub`, `dateTeaSubEnd`) VALUES
(31, 17, 1, 'activo', '2024-05-08 03:29:33', '2024-05-21 03:14:53'),
(32, 18, 4, 'activo', '2024-05-08 03:46:32', '2024-05-21 03:14:58'),
(33, 22, 7, 'activo', '2024-05-08 03:46:46', '2024-05-19 04:14:23'),
(34, 21, 10, 'inactivo', '2024-05-08 03:46:58', '2024-05-23 23:28:35'),
(35, 24, 2, 'activo', '2024-05-08 22:45:51', '2024-05-18 13:32:49'),
(36, 21, 12, 'inactivo', '2024-05-18 06:13:42', '2024-05-23 23:28:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_notifications`
--

CREATE TABLE `type_notifications` (
  `idTypNot` int(11) NOT NULL,
  `notification` varchar(100) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `stateUser` varchar(20) DEFAULT NULL,
  `paterno` varchar(255) DEFAULT NULL,
  `materno` varchar(255) DEFAULT NULL,
  `names` varchar(255) DEFAULT NULL,
  `ci` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `user`, `password`, `rol`, `stateUser`, `paterno`, `materno`, `names`, `ci`, `email`, `phone`) VALUES
(42, 'Yamil', 'Helen123224', 'Docente', 'habilitado', 'Machaca', 'Murillo', 'Yamil', '8638256', 'helenMurillo@gamil.com', '72434492'),
(43, 'Edwin', '', 'Administrador', 'habilitado', 'Machacaqq', 'Murillo', 'Edwin', '8638256', 'helen@gamil.com', '72434492'),
(46, 'Betty', '', 'Docente', 'deshabilitado', 'Machaca', 'Murillo', 'Betty', '8638256', 'hel@gamil.com', '72434492'),
(47, 'juanito', 'contraseña123', 'Estudiante', 'habilitado', 'Pérez', 'hola', 'Juan', '123456789', 'juanito@example.com', '555-123-4567'),
(56, 'Betti', 'Helen123224', 'Estudiante', 'habilitado', 'Machaca', 'Murillo', 'Betty', '8638256', 'helenMurillo@gamil.com', '72434492'),
(61, 'Betjto', 'Helen123224', 'Estudiante', 'habilitado', 'Machaca', 'Murillo', 'Betty', '8638256', 'helenMurillo@gamil.com', '72434492'),
(69, 'Jorgeo', 'Helen123224', 'Docente', 'habilitado', 'Machaca', 'Murillo', 'Jorge', '8638256', 'helenMurillo@gamil.com', '72434492'),
(86, 'Betfdfo', '', 'Docente', 'habilitado', 'Machaca', 'Murillo', 'Betty', '8638256', 'llo@gamil.com', '72434492'),
(106, 'prueba1', 'bgfn gf', 'Secretario', 'deshabilitado', 'Machaca', 'Murillo', 'Betty', '8638256', 'helenMurillo@gamil.com', '71941750'),
(140, 'vfsg', 'dsfs', 'Secretario', 'deshabilitado', 'yyyy', 'Murillo', 'Machaca', '516512', 'nuevo@email.com', '555-5555'),
(141, 'jnml', 'nlko', 'Secretario', 'deshabilitado', 'bnjkl', ' lm jbj', 'nkonk', '8638255', 'nonkl', NULL),
(142, 'mk', 'nlko', 'Secretario', 'deshabilitado', 'bnjkl', ' lm jbj', 'nkonk', '8638255', 'nonkl', 'htrhtr'),
(143, 'dsd', 'sdads', 'Secretario', 'deshabilitado', 'Machaca', 'ppp', 'Machaca', '516512', 'nuevo@email.com', '71941750'),
(144, 'fdf', 'd', 'Secretario', 'habilitado', 'yyyy', 'Machaca', 'eeee', '516512', 'rrrrrrrrr', 'rrrrrrr');

--
-- Disparadores `users`
--
DELIMITER $$
CREATE TRIGGER `insert_secretary_trigger` AFTER INSERT ON `users` FOR EACH ROW BEGIN
    IF NEW.rol = 'Secretario' THEN
        INSERT INTO secretaries (idUser) VALUES (NEW.idUser);
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `insert_teacher_trigger` AFTER INSERT ON `users` FOR EACH ROW BEGIN
    IF NEW.rol = 'Docente' THEN
        INSERT INTO teachers (idUser) VALUES (NEW.idUser);
    END IF;
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`idCareer`);

--
-- Indices de la tabla `enable`
--
ALTER TABLE `enable`
  ADD PRIMARY KEY (`idEnable`),
  ADD KEY `fk_enable_teachers_subjects` (`idTeaSub`);

--
-- Indices de la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`idNotification`),
  ADD KEY `idTypNot` (`idTypNot`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`idPayment`),
  ADD KEY `idStudent` (`idStudent`),
  ADD KEY `idStatePay` (`idStatePay`);

--
-- Indices de la tabla `programming`
--
ALTER TABLE `programming`
  ADD PRIMARY KEY (`idProgramming`),
  ADD KEY `idStudent` (`idStudent`),
  ADD KEY `idEnable` (`idEnable`);

--
-- Indices de la tabla `secretaries`
--
ALTER TABLE `secretaries`
  ADD PRIMARY KEY (`idSecretary`),
  ADD KEY `fk_secretaries_users` (`idUser`);

--
-- Indices de la tabla `secretaries_notification`
--
ALTER TABLE `secretaries_notification`
  ADD PRIMARY KEY (`idSecNot`),
  ADD KEY `idSecretary` (`idSecretary`),
  ADD KEY `idNotification` (`idNotification`);

--
-- Indices de la tabla `state_pay`
--
ALTER TABLE `state_pay`
  ADD PRIMARY KEY (`idStatePay`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`idStudent`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idCareer` (`idCareer`);

--
-- Indices de la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`idSubject`),
  ADD KEY `idCareer` (`idCareer`);

--
-- Indices de la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`idTeacher`),
  ADD KEY `fk_teachers_users` (`idUser`);

--
-- Indices de la tabla `teachers_subjects`
--
ALTER TABLE `teachers_subjects`
  ADD PRIMARY KEY (`idTeaSub`),
  ADD KEY `idSubject` (`idSubject`),
  ADD KEY `fk_teachers_teachers_subjects` (`idTeacher`);

--
-- Indices de la tabla `type_notifications`
--
ALTER TABLE `type_notifications`
  ADD PRIMARY KEY (`idTypNot`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `user` (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `careers`
--
ALTER TABLE `careers`
  MODIFY `idCareer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `enable`
--
ALTER TABLE `enable`
  MODIFY `idEnable` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `notifications`
--
ALTER TABLE `notifications`
  MODIFY `idNotification` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `idPayment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `programming`
--
ALTER TABLE `programming`
  MODIFY `idProgramming` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `secretaries`
--
ALTER TABLE `secretaries`
  MODIFY `idSecretary` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT de la tabla `secretaries_notification`
--
ALTER TABLE `secretaries_notification`
  MODIFY `idSecNot` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `state_pay`
--
ALTER TABLE `state_pay`
  MODIFY `idStatePay` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `idStudent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `subjects`
--
ALTER TABLE `subjects`
  MODIFY `idSubject` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `teachers`
--
ALTER TABLE `teachers`
  MODIFY `idTeacher` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `teachers_subjects`
--
ALTER TABLE `teachers_subjects`
  MODIFY `idTeaSub` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `type_notifications`
--
ALTER TABLE `type_notifications`
  MODIFY `idTypNot` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `enable`
--
ALTER TABLE `enable`
  ADD CONSTRAINT `fk_enable_teachers_subjects` FOREIGN KEY (`idTeaSub`) REFERENCES `teachers_subjects` (`idTeaSub`);

--
-- Filtros para la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`idTypNot`) REFERENCES `type_notifications` (`idTypNot`);

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`idStudent`) REFERENCES `students` (`idStudent`),
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`idStatePay`) REFERENCES `state_pay` (`idStatePay`);

--
-- Filtros para la tabla `programming`
--
ALTER TABLE `programming`
  ADD CONSTRAINT `programming_ibfk_1` FOREIGN KEY (`idStudent`) REFERENCES `students` (`idStudent`),
  ADD CONSTRAINT `programming_ibfk_2` FOREIGN KEY (`idEnable`) REFERENCES `enable` (`idEnable`);

--
-- Filtros para la tabla `secretaries`
--
ALTER TABLE `secretaries`
  ADD CONSTRAINT `fk_secretaries_users` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `secretaries_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `secretaries_notification`
--
ALTER TABLE `secretaries_notification`
  ADD CONSTRAINT `secretaries_notification_ibfk_1` FOREIGN KEY (`idSecretary`) REFERENCES `secretaries` (`idSecretary`),
  ADD CONSTRAINT `secretaries_notification_ibfk_2` FOREIGN KEY (`idNotification`) REFERENCES `notifications` (`idNotification`);

--
-- Filtros para la tabla `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`idCareer`) REFERENCES `careers` (`idCareer`);

--
-- Filtros para la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`idCareer`) REFERENCES `careers` (`idCareer`);

--
-- Filtros para la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `fk_teacher_user_id` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_teachers_users` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `teachers_subjects`
--
ALTER TABLE `teachers_subjects`
  ADD CONSTRAINT `fk_teachers_teachers_subjects` FOREIGN KEY (`idTeacher`) REFERENCES `teachers` (`idTeacher`) ON DELETE CASCADE,
  ADD CONSTRAINT `teachers_subjects_ibfk_1` FOREIGN KEY (`idTeacher`) REFERENCES `teachers` (`idTeacher`),
  ADD CONSTRAINT `teachers_subjects_ibfk_2` FOREIGN KEY (`idSubject`) REFERENCES `subjects` (`idSubject`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
