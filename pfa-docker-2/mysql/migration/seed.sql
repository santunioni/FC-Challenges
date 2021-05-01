SET NAMES 'utf8';

CREATE TABLE `ModulosFullCycle` (
  `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ModuloNome` VARCHAR(80) NOT NULL
);

INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Docker");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Fundamentos de arquitetura de software");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Comunicação");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("RabbitMQ");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Autentificação e Keycloak");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Domain Driven Design e Arquitetura hexagonal");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Arquitetura de projeto prático - Codeflix");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Microsserviço: Catálogo de vídeos com React (Frontend)");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Microsserviço: enconder de vídeo com GoLang");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Microsserviço: API de catálogo com NodeJS");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Microsserviço: Aplicação do assinante com React.js");
INSERT INTO ModulosFullCycle (ModuloNome) VALUES ("Autentificação entre os microsserviços");