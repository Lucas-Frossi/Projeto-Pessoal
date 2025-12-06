CREATE DATABASE PrimeFlight;

USE  PrimeFlight;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
emailUsuario VARCHAR(45) NOT NULL,
CONSTRAINT chkEmail CHECK (emailUsuario LIKE('%@%.%')),
senha VARCHAR(45) NOT NULL,
preferencia VARCHAR(45)
);

CREATE TABLE resposta (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
pontuacao INT,
tentativa INT,
fkUsuario INT,
	CONSTRAINT fkUsuarioResposta FOREIGN KEY (fkUsuario)
		REFERENCES usuario (idUsuario)
);