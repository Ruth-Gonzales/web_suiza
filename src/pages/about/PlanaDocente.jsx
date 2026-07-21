import { useState, useRef } from 'react';
import { Search, Mail, Phone } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const programas = [
  {
    id: 'admin', nombre: 'Administración de Empresas', color: '#3B82F6',
    docentes: [
      { nombre: 'Lic. Adm. Roli Antenor Ramírez Vivas', rol: 'COORDINADOR', telefono: '916 085 580', email: 'roliramirez2020@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Roli-Ramirez.jpg' },
      { nombre: 'Sec. Ejec. Maura Chanella Villanueva Inuma', rol: 'SECRETARIA', telefono: '963 549 117', email: 'villanuevamaurach@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Maura-Villanueva.jpg' },
      { nombre: 'Econ. Carlos Henry Bardales Pezo', rol: 'DOCENTE', telefono: '941 373 261', email: 'carbarpezo@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Carlos-Bardales.jpg' },
      { nombre: 'Mg. Clay Nixon Saavedra Saavedra', rol: 'DOCENTE', telefono: '992 586 475', email: 'claynixon.ss72@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Clay-Saavedra.jpg' },
      { nombre: 'José Tejada Ojeda', rol: 'DOCENTE', telefono: '961 904 753', email: 'jtejada8854@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Jose-Tejada.jpg' },
      { nombre: 'Dra. Alejandrina Tuesta Gonzales', rol: 'DOCENTE', telefono: '988 491 162', email: 'alejandra.tuesta.gonzales@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Alejandrina-Tuesta.jpg' },
      { nombre: 'Mg. Segundo Regner Cárdenas del Águila', rol: 'DOCENTE', telefono: '961 070 620', email: 'tecsuiza2019@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Segundo-Cardenas.jpg' },
      { nombre: 'Mg. José Luis Meza Salinas', rol: 'DOCENTE', telefono: '961 023 288', email: 'admjms0412@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Jose-Meza.jpg' },
      { nombre: 'Lic. Pedro Jesús Díaz Picón', rol: 'DOCENTE', telefono: '968 919 205', email: 'pedrodiaz777@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Pedro-Diaz.jpg' },
      { nombre: 'Mg. Zelita Tejada Rodríguez', rol: 'DOCENTE', telefono: '951 560 963', email: 'zelitatejadarodriguez@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Zelita-Tejada.jpg' },
      { nombre: 'Mg. Anna Pegguibeth Rodríguez Gómez', rol: 'DOCENTE', telefono: '913 008 264', email: 'rodriguezanna697@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/11.-Anna-Rodriguez.jpg' },
      { nombre: 'Tec. G.T. Diana Carolina Hidalgo Gonzales', rol: 'DOCENTE', telefono: '969 888 423', email: 'carolinahidalgo.got@live.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/12.-Diana-Hidalgo.jpg' },
      { nombre: 'Ursula Norgelina Panduro Rocha', rol: 'DOCENTE', telefono: '942 462 554', email: 'uchi2113@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/13.-Ursula-Hidalgo.jpg' },
    ]
  },
  {
    id: 'turismo', nombre: 'Administración de Operaciones Turísticas', color: '#8B5CF6',
    docentes: [
      { nombre: 'Lic. Edu. Betty Rosario Ruiz Ruiz', rol: 'COORDINADOR', telefono: '971 234 947', email: 'ztorbisco15@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2023/09/DSC_9904-683x1024.jpg' },
      { nombre: 'Sec. Ejec. Alexandra Mariciela Sigueñas Becerra', rol: 'SECRETARIA', telefono: '923 574 718', email: 'alexandrasigueñas550@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Alejandra-Siguenas.jpg' },
      { nombre: 'Tec. José Manuel Cartagena Sandoval', rol: 'DOCENTE', telefono: '948 139 562', email: 'josemnauelcarsan@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Jose-Cartagena.jpg' },
      { nombre: 'Mg. Pedro Berrospi Almeida', rol: 'DOCENTE', telefono: '960 697 710', email: 'berrospi22as@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Pedro-Berrospi.jpg' },
      { nombre: 'Teolinda Torres García', rol: 'DOCENTE', telefono: '959 206 202', email: 'torres.garcia.teolinda@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Teolinda-Torres.jpg' },
    ]
  },
  {
    id: 'asist', nombre: 'Asistencia Administrativa', color: '#10B981',
    docentes: [
      { nombre: 'Mg. Suselva Sánchez Huancho', rol: 'COORDINADORA', telefono: '961 086 521', email: 'ssuselva@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Suselva-Sanchez.jpg' },
      { nombre: 'Tec. Patricia Michelle Castagne Villacorta', rol: 'SECRETARIA', telefono: '924 764 147', email: 'castagnevillacortapatriciam@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Patricia-Castagne.jpg' },
      { nombre: 'Lic. Silvia Aida Alvarado Caballero', rol: 'DOCENTE', telefono: '961 908 572', email: 'silvana0001234@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Silvia-Alvarado.jpg' },
      { nombre: 'Mg. Escarlet Escobar Pezo', rol: 'DOCENTE', telefono: '924 476 032', email: 'skrlt0704@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Escarlet-Escobar.jpg' },
      { nombre: 'Elmer Alez Huaraca Chávez', rol: 'DOCENTE', telefono: '935 089 206', email: 'alex_huaraca24@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Elmer-Huaraca.jpg' },
      { nombre: 'Laura Cárdenas Pérez', rol: 'DOCENTE', telefono: '971 264 154', email: 'cardenaslaura1160@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Laura-Cardenas.jpg' },
      { nombre: 'Lucila Elena Soria Ruíz', rol: 'DOCENTE', telefono: '947 498 262', email: 'sorialucielena@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Lucila-Soria.jpg' },
    ]
  },
  {
    id: 'cont', nombre: 'Contabilidad', color: '#F59E0B',
    docentes: [
      { nombre: 'Mg. Graciela Aleida Roca Cabrera', rol: 'COORDINADORA', telefono: '945 349 457', email: 'graciela.rocacabrera@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Graciela-Roca.jpg' },
      { nombre: 'Rosa María Farías Camba', rol: 'SECRETARIA', telefono: '923 574 718', email: 'alexandrasigueñas550@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Rosa-Farias.jpg' },
      { nombre: 'Dra. María Micaela Castillo de Lima', rol: 'DOCENTE', telefono: '9505 900 946', email: 'marcas0707@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Maria-Castillo.jpg' },
      { nombre: 'Mg. Silvia Virginia Montoya', rol: 'DOCENTE', telefono: '961 609 209', email: 'silviavirginiamontoyatorres@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Silvia-Virginia.jpg' },
      { nombre: 'Dr. Marden Odilo Vásquez Reategui', rol: 'DOCENTE', telefono: '968 156 399', email: 'odilov8@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Marden-Vasquez.jpg' },
      { nombre: 'Cpc. Carlos Saúl Miguel Velis', rol: 'DOCENTE', telefono: '977 877 426', email: 'asociadosmv@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Carlos-Miguel.jpg' },
      { nombre: 'Mg. Jimmy Edinson Silva May', rol: 'DOCENTE', telefono: '952 500 382', email: 'jesm_27@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Jimmy-Silva.jpg' },
      { nombre: 'Cpc. Lud Mi Flor Andrés Maylle', rol: 'DOCENTE', telefono: '935 777 239', email: 'florandres081195@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Lud-Andres.jpg' },
      { nombre: 'Lic. Adm. José Luis Bardales Bocanegra', rol: 'DOCENTE', telefono: '954 748 177', email: 'joseluisbardalez25@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Jose-Bardales.jpg' },
    ]
  },
  {
    id: 'civil', nombre: 'Construcción Civil', color: '#EF4444',
    docentes: [
      { nombre: 'Ing. Estuardo Alonso Lizarzaburu Velarde', rol: 'COORDINADOR', telefono: '961 020 256', email: 'estuardo209a@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Estuardo-Lizarzaburu.jpg' },
      { nombre: 'Charo Vela Sifuentes', rol: 'SECRETARIA', telefono: '962 218 003', email: 'sharosifu29@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Charo-Vela.jpg' },
      { nombre: 'Ing. Vemny Eusebio Granda Kio', rol: 'DOCENTE', telefono: '929 608 734', email: 'venidamieu@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Vemny-Granda.jpg' },
      { nombre: 'Tec. C.C. Harrinzon Ríos Rivera', rol: 'DOCENTE', telefono: '930 910 995', email: 'harririvera91@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Harrizon-Rios.jpg' },
      { nombre: 'Daniel Alcides Ramos Olivera', rol: 'DOCENTE', telefono: '929 619 600', email: 'danielramosolivera@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Daniel-Ramos.jpg' },
      { nombre: 'Tussi Quio Apuela', rol: 'DOCENTE', telefono: '939 255 156', email: 'tussi2013@hotmail.es', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Tussi-Quio.jpg' },
      { nombre: 'Ing. Pablo Angelo Ortiz Andrade', rol: 'DOCENTE', telefono: '966 020 957', email: 'pabloangello@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Pablo-Ortiz.jpg' },
    ]
  },
  {
    id: 'sistemas', nombre: 'Desarrollo de Sistemas de Información', color: '#06B6D4',
    docentes: [
      { nombre: 'Dr. Gil Torres Arévalo', rol: 'COORDINADOR', telefono: '976 681 426', email: 'giltorresarevalo@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Gil-Torres.jpg' },
      { nombre: 'Sec. Ejec. Lisniari Tuanama Seberiano', rol: 'SECRETARIA', telefono: '960 717 265', email: 'lisnairit@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Lisnairi-Tuanama.jpg' },
      { nombre: 'Dr. Ruber Torres Arévalo', rol: 'DOCENTE', telefono: '982 574 167', email: 'rutoar2015@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/Ruber-Torres.jpg' },
      { nombre: 'Mg. Christian Dustin Puyo Torres', rol: 'DOCENTE', telefono: '918 282 361', email: 'christianpuyotorres@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Christian-Puyo.jpg' },
      { nombre: 'Tec. John Saboya Fulca', rol: 'DOCENTE', telefono: '988 452 394', email: 'afheryita@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-John-Saboya.jpg' },
    ]
  },
  {
    id: 'electrica', nombre: 'Electricidad Industrial', color: '#EAB308',
    docentes: [
      { nombre: 'Luis Alberto Lecca Alva', rol: 'COORDINADOR', telefono: '968 371 524', email: 'luisalbertoleccaalva@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Luis-Lecca.jpg' },
      { nombre: 'Criz Leydy Díaz Vega', rol: 'SECRETARIA', telefono: '999 645 306', email: 'leydymaildiazvega@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Criz-Diaz.jpg' },
      { nombre: 'Cristhian Pichiule Tovar', rol: 'DOCENTE', telefono: '975 353 323', email: 'crisstovar95@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Cristhian-Pichiule.jpg' },
      { nombre: 'Julio César Cuentas Rodríguez', rol: 'DOCENTE', telefono: '961 509 321', email: 'jucuentas@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Julio-Cuentas.jpg' },
      { nombre: 'Jeperson Nicocin Vela Ramirez', rol: 'DOCENTE', telefono: '951 840 092', email: 'jepersonvelaramirez@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Jeperson-Vela.jpg' },
      { nombre: 'Joel Jaime Amaro Cosme', rol: 'DOCENTE', telefono: '975 770 340', email: 'amarofie@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Joel-Amaro.jpg' },
      { nombre: 'Jose Luis Aranda Vergara', rol: 'DOCENTE', telefono: '982 861 336', email: 'jhosep09091987@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Jose-Aranda.jpg' },
      { nombre: 'Julio Antonio Ochavano Lopez', rol: 'DOCENTE', telefono: '934 261 804', email: 'julaylopez7@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Julio-Ochavano.jpg' },
    ]
  },
  {
    id: 'enfermeria', nombre: 'Enfermería Técnica', color: '#EC4899',
    docentes: [
      { nombre: 'Mg. Orfilia Navarro Zumaeta', rol: 'COORDINADORA', telefono: '965 809 087', email: 'orfinava@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Orfilia-Navarro.jpg' },
      { nombre: 'Sec. Ejec. Kristell Laly Diaz Calampa', rol: 'SECRETARIA', telefono: '977 534 443', email: 'kristelldiaz30@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Kristell-Diaz.jpg' },
      { nombre: 'Lic. Gladys Leonor Prada Gonzales', rol: 'DOCENTE', telefono: '961 946 593', email: 'gpradag10@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Gladys-Prada.jpg' },
      { nombre: 'M. Sc. Oscar Amado Ruiz Torres', rol: 'DOCENTE', telefono: '961 938 224', email: 'osamruiztorres@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Oscar-Ruiz.jpg' },
      { nombre: 'Lic. Sadith Aspajo Vásquez', rol: 'DOCENTE', telefono: '944 975 795', email: 'sadith588@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/11.-Sadith-Aspajo.jpg' },
      { nombre: 'Mg. Cayo Eduardo Leveau Bartra', rol: 'DOCENTE', telefono: '939 388 856', email: 'edurardo43leveau@yahoo.es', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Cayo-Leveau.jpg' },
      { nombre: 'Lic. Eulalia Condor Taipe', rol: 'DOCENTE', telefono: '959 567 612', email: 'iestpjua27@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Eulalia-Condor.jpg' },
      { nombre: 'Lic. Carlos Alberto Ramos Bardales', rol: 'DOCENTE', telefono: '949 239 125', email: 'crbbardales@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/12.-Carlos-Ramos.jpg' },
      { nombre: 'Mg. Rosio Del Pilar Tafur Quevedo', rol: 'DOCENTE', telefono: '961 670 727', email: 'chiotafurq@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Rosio-Tafur.jpg' },
      { nombre: 'Lic. Kathleen Valeria Solis Vela', rol: 'DOCENTE', telefono: '935 964 693', email: 'valeriasolisvela92@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Kathleen-Solis.jpg' },
      { nombre: 'Lic. Norma Vela Silvano', rol: 'DOCENTE', telefono: '976 684 012', email: 'normavel2008@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/13.-Norma-Vela.jpg' },
      { nombre: 'Mg. Roxana Lizbeth Montoya Tejada', rol: 'DOCENTE', telefono: '961 675 909', email: 'roximo51@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Roxana-Montoya.jpg' },
      { nombre: 'Mg. Karla Rosario Vela Ríos', rol: 'DOCENTE', telefono: '991 857 347', email: 'velakarla31@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Karla-Vela.jpg' },
      { nombre: 'Marvin Teófilo Amasifuán Carrión', rol: 'DOCENTE', telefono: '961 980 383', email: 'marvincito16@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/14.-Marvin-Amasifuen.jpg' },
      { nombre: 'Pedro Tarazona Valle', rol: 'DOCENTE', telefono: '986 970 868', email: 'huanuco29@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/15.-Pedro-Tarazona.jpg' },
      { nombre: 'Lic. Diana Isabel Romero Salazar', rol: 'DOCENTE', telefono: '963 090 727', email: 'dianaromerosal@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/16.-Diana-Romero.jpg' },
    ]
  },
  {
    id: 'forestal', nombre: 'Manejo Forestal', color: '#22C55E',
    docentes: [
      { nombre: 'Ing. Merly Cabanillas Lomas', rol: 'COORDINADORA', telefono: '943 925 546', email: 'merlycl_14@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Merly-Cabanillas.jpg' },
      { nombre: 'Sec. Ej. Anita Gómez Sinarahua', rol: 'SECRETARIA', telefono: '903 167 408', email: 'anita.gomez.s1960gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Anita-Gomez-711x1024.jpg' },
      { nombre: 'Tec. William Ernesto Bar Torres', rol: 'DOCENTE', telefono: '920 794 930', email: 'billibar@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-William-Bar.jpg' },
      { nombre: 'Ing. Ángel Raúl Egoavil Recuay', rol: 'DOCENTE', telefono: '961 019 616', email: 'angel12pe@yahoo.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Angel-Egoavil.jpg' },
      { nombre: 'Tec. Horatio Córdova Vásquez', rol: 'DOCENTE', telefono: '984 629 605', email: 'horatio1973.1@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Horatio-Cordova.jpg' },
      { nombre: 'Tec. Shoyleer Ríos Vásquez', rol: 'DOCENTE', telefono: '903 167 408', email: 'sleerhoy@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Shoyleer-Rios.jpg' },
    ]
  },
  {
    id: 'mecatronica', nombre: 'Mecatrónica Automotriz', color: '#F97316',
    docentes: [
      { nombre: 'P.T. César Antonio Cauper Cárdenas', rol: 'COORDINADOR', telefono: '972 908 453', email: 'cesarcauper23@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Cesar-Cauper.jpg' },
      { nombre: 'P.T. Lucita Soplin Carbajal', rol: 'SECRETARIA', telefono: '961 912 762', email: 'LSCLariza@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Lucita-Soplin.jpg' },
      { nombre: 'Dr. Armando Vásquez Castro', rol: 'DOCENTE', telefono: '942 992 672', email: 'arvaco20.20@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Armando-Vasquez.jpg' },
      { nombre: 'P.T. Juan Miguel Álvarez García', rol: 'DOCENTE', telefono: '969 147 630', email: 'juan.miguelag@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Juan-Alvarez.jpg' },
      { nombre: 'Mg. Noe Abraham Albornoz Isidro', rol: 'DOCENTE', telefono: '961 922 286', email: 'Nalbornoz_197@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Noe-Albornoz.jpg' },
      { nombre: 'P.T. Segundo Hoshikato Katayama Gonzales', rol: 'DOCENTE', telefono: '998 977 668', email: 'katayamasegundo70@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/8.-Segundo-Katayama.jpg' },
      { nombre: 'P.T. Davis Norton Panaifo Plaza', rol: 'DOCENTE', telefono: '928 016 017', email: 'davispanaifo90@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Davis-Panaifo.jpg' },
      { nombre: 'Ing. Dennis Eyvind Chávez Ramírez', rol: 'DOCENTE', telefono: '961 587 026', email: 'chavezdennis.5253@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/9.-Dennis-Chavez.jpg' },
      { nombre: 'P.T. Wagner Lodan Ríos Vásquez', rol: 'DOCENTE', telefono: '939 262 477', email: 'wriosvasquez1@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Wagner-Rios.jpg' },
      { nombre: 'P.T. Jack Darwin Flores Cavero', rol: 'DOCENTE', telefono: '927 052 850', email: 'jackflores021280@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/10.-Jack-Flores.jpg' },
    ]
  },
  {
    id: 'agro', nombre: 'Producción Agropecuaria', color: '#84CC16',
    docentes: [
      { nombre: 'Mg. José Abraham Díaz Sandoval', rol: 'COORDINADOR', telefono: '985 039 384', email: 'jdisa17542@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/1.-Jose-Diaz.jpg' },
      { nombre: 'Sec. Ejec. Gueybi Rosmery Bartra Saenz', rol: 'SECRETARIA', telefono: '923 713 248', email: 'gueybi0329@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/2.-Gueybi-Bartra.jpg' },
      { nombre: 'Prof. Carmen del Pilar Flores Venegas', rol: 'DOCENTE', telefono: '932 623 821', email: 'carmencitafv2015@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/3.-Carmen-Flores.jpg' },
      { nombre: 'Doc. Nicolás Rodríguez Cárdenas', rol: 'DOCENTE', telefono: '937 490 859', email: 'rioucayali_5@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/4.-Nicolas-Rodriguez.jpg' },
      { nombre: 'Prof. Vicente Artemio Rivera Gómez', rol: 'DOCENTE', telefono: '990 223 881', email: 'vriveragomez40@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/5.-Vicente-Rivera.jpg' },
      { nombre: 'Ing. Jorge Luis Díaz Tangoa', rol: 'DOCENTE', telefono: '961 517 259', email: 'diastangoajorgeluis@gmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/6.-Jorge-Diaz.jpg' },
      { nombre: 'Mg. Katherine Erika Nahir Navarro Ramírez', rol: 'DOCENTE', telefono: '931 278 517', email: 'erikanahir_navarro@hotmail.com', imagen: 'https://iestpsuiza.edu.pe/wp-content/uploads/2024/06/7.-Katherine-Navarro.jpg' },
    ]
  },
];

const totalDocentes = programas.reduce((acc, p) => acc + p.docentes.length, 0);

function DocenteMiniCard({ docente, color, programa }) {
  const initials = docente.nombre.replace(/^(Lic\.|Mg\.|Dr\.|Ing\.|Tec\.|Sec\.|Econ\.|Prof\.|Doc\.|P\.T\.|M\. Sc\.|Cpc\.)\s*/i, '').split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('');
  
  return (
    <div className="rounded-2xl p-5 shadow-sm border transition-all duration-300 hover:shadow-xl hover:scale-105 h-[280px] flex flex-col items-center overflow-hidden group cursor-pointer" style={{ backgroundColor: `color-mix(in srgb, ${color} 12%, #ffffff)`, borderColor: `color-mix(in srgb, ${color} 20%, #e5e7eb)` }}>
      <div className="flex justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
        <div
          className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center text-white text-xl font-bold shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
          style={{ backgroundColor: color }}
        >
          {docente.imagen ? (
            <img
              src={docente.imagen}
              alt={docente.nombre}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className={`w-full h-full items-center justify-center ${docente.imagen ? 'hidden' : 'flex'}`}
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
        </div>
      </div>
      
      <h3 className="text-sm font-bold text-center mb-2 leading-tight line-clamp-2 min-h-[40px]" style={{ color: `color-mix(in srgb, ${color} 80%, #1e293b)` }}>
        {docente.nombre}
      </h3>
      
      <div className="flex justify-center mb-2">
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white transition-all duration-300 group-hover:scale-105"
          style={{ backgroundColor: color }}
        >
          {programa?.nombre || docente.rol}
        </span>
      </div>
      
      <p className="text-xs text-center mb-1 font-medium" style={{ color: `color-mix(in srgb, ${color} 60%, #475569)` }}>
        {docente.rol}
      </p>
      
      <p className="text-[10px] text-center mb-2" style={{ color: `color-mix(in srgb, ${color} 40%, #64748b)` }}>
        {docente.telefono}
      </p>
      
      <div className="text-center mt-auto">
        <a
          href={`mailto:${docente.email}`}
          className="text-[11px] font-medium transition-colors duration-300 truncate block max-w-[180px]"
          style={{ color: `color-mix(in srgb, ${color} 70%, #3b82f6)` }}
        >
          {docente.email}
        </a>
      </div>
    </div>
  );
}

function ProgramaSection({ programa, onDocenteClick }) {
  const coordinador = programa.docentes.find(d => d.rol.includes('COORDINADOR') || d.rol.includes('COORDINADORA'));
  const secretaria = programa.docentes.find(d => d.rol.includes('SECRETARIA'));
  const docentes = programa.docentes.filter(d => d.rol.includes('DOCENTE'));
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-16">
      <div className="rounded-t-2xl px-6 py-3 text-center mb-8" style={{ backgroundColor: programa.color }}>
        <h3 className="text-lg md:text-xl font-extrabold text-white tracking-wide">{programa.nombre}</h3>
      </div>

      {(coordinador || secretaria) && (
        <div className="flex justify-center gap-6 md:gap-10 mb-8">
          {coordinador && (
            <div onClick={() => onDocenteClick(coordinador, programa)} className="cursor-pointer w-[200px] md:w-[220px]">
              <DocenteMiniCard docente={coordinador} color={programa.color} programa={programa} />
            </div>
          )}
          {secretaria && (
            <div onClick={() => onDocenteClick(secretaria, programa)} className="cursor-pointer w-[200px] md:w-[220px]">
              <DocenteMiniCard docente={secretaria} color={programa.color} programa={programa} />
            </div>
          )}
        </div>
      )}

      {docentes.length > 0 && (
        <div className="flex justify-center mb-6">
          <div className="w-0.5 h-6 bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, ${programa.color}40, ${programa.color}10)` }} />
        </div>
      )}

      <div className="relative group">
        {docentes.length > 3 && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-dark-card shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer border border-gray-200 dark:border-dark-border/40"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {docentes.map((docente, idx) => (
            <div key={idx} onClick={() => onDocenteClick(docente, programa)} className="cursor-pointer flex-shrink-0 w-[200px] md:w-[220px]">
              <DocenteMiniCard docente={docente} color={programa.color} programa={programa} />
            </div>
          ))}
        </div>

        {docentes.length > 3 && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-dark-card shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer border border-gray-200 dark:border-dark-border/40"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function DocenteModal({ docente, programa, allDocentes, currentIndex, onNavigate, onClose }) {
  if (!docente) return null;

  const imgSrc = docente.imagen;
  const imgFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%231e293b' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='48' font-weight='bold'%3E${docente.nombre.replace(/^(Lic\.|Mg\.|Dr\.|Ing\.|Tec\.|Sec\.|Econ\.|Prof\.|Doc\.|P\.T\.|M\. Sc\.|Cpc\.)\s*/i, '').split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('')}%3C/text%3E%3C/svg%3E`;

  return (
    <div className="fixed inset-0 z-[100]" style={{ perspective: '1200px' }}>
      <div
        className="absolute inset-0 transition-all duration-500 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, color-mix(in srgb, ${programa.color} 40%, #0a0e1a) 0%, #0d1117 30%, #111827 60%, color-mix(in srgb, ${programa.color} 20%, #0a0e1a) 100%)`
        }}
        onClick={onClose}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="modal-bubble absolute rounded-full"
            style={{
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-60px`,
              backgroundColor: programa.color,
              opacity: 0.08 + Math.random() * 0.1,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-4 md:gap-4 lg:gap-6">

          <div key={`name-${docente.nombre}`} className="w-full md:w-[280px] lg:w-[340px] shrink-0 text-left md:pl-12" style={{ animation: 'nameSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            {docente.nombre.split(' ').map((word, wi) => (
              <div key={wi} className="overflow-hidden">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15]" style={{ color: programa.color, textShadow: `1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 3px 3px 0 ${programa.color}, 4px 4px 0 ${programa.color}, 5px 5px 0 ${programa.color}cc, 6px 6px 0 ${programa.color}aa`, animation: `wordSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + wi * 0.08}s both` }}>
                  {word}
                </span>
              </div>
            ))}
          </div>

          <div className="relative flex-1 flex justify-center md:justify-start md:pl-6" style={{ perspective: '900px' }}>
            <div className="absolute w-[500px] h-[600px] rounded-full blur-[180px] opacity-40 -z-10" style={{ background: `radial-gradient(circle, ${programa.color} 0%, transparent 70%)` }} />
            <div className="absolute w-[300px] h-[350px] rounded-full blur-[100px] opacity-50 -z-10" style={{ background: `radial-gradient(circle, ${programa.color} 0%, transparent 60%)`, top: '10%', left: '20%' }} />
            <div className="absolute w-[200px] h-[250px] rounded-full blur-[80px] opacity-30 -z-10" style={{ background: `radial-gradient(circle, ${programa.color} 0%, transparent 50%)`, bottom: '10%', right: '10%' }} />
            <div key={docente.nombre} className="relative w-[270px] h-[340px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[440px]" style={{ transformStyle: 'preserve-3d', animation: 'photoApproach 0.9s cubic-bezier(0.16, 1, 0.3, 1), photoRotate 6s ease-in-out 0.9s infinite' }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-[3px]" style={{ borderColor: programa.color, boxShadow: `0 0 15px ${programa.color}80, 0 0 30px ${programa.color}60, 0 0 60px ${programa.color}40, 0 0 100px ${programa.color}20, inset 0 0 15px ${programa.color}30`, animation: 'photoShadow 6s ease-in-out 0.9s infinite' }}>
                <img src={imgSrc} alt={docente.nombre} className="w-full h-full object-cover object-top" style={{ imageRendering: 'high-quality', filter: `contrast(1.1) saturate(1.2) brightness(1.05)` }} onError={(e) => { e.target.src = imgFallback; }} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${programa.color}15 0%, transparent 50%, ${programa.color}10 100%)` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[370px] lg:w-[400px] shrink-0">
            <div key={`card-${docente.nombre}`} onClick={(e) => e.stopPropagation()} className="rounded-3xl p-6 md:p-7 border-[3px]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)', borderColor: programa.color, boxShadow: `0 0 15px ${programa.color}80, 0 0 30px ${programa.color}60, 0 0 60px ${programa.color}40, 0 0 100px ${programa.color}20, inset 0 0 15px ${programa.color}30, 0 25px 60px -12px rgba(0,0,0,0.5)`, animation: 'cardSlideFromFar 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}>
              <div className="mb-3" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.2s both' }}>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: programa.color, boxShadow: `0 4px 15px ${programa.color}50` }}>{programa.nombre}</span>
              </div>
              <p className="text-xl font-extrabold mb-1" style={{ color: programa.color, textShadow: `0 0 20px ${programa.color}40`, animation: 'fadeSlideUp 0.5s ease-out 0.25s both' }}>{docente.rol}</p>
              <p className="text-xs text-white/40 font-semibold mb-1" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.28s both' }}>IESTP Suiza</p>
              <p className="text-[11px] text-white/35 font-medium flex items-center gap-1.5" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.3s both' }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Lunes a Viernes ÔÇö 7am a 4pm
              </p>
              <div className="h-[1px] my-4 rounded-full" style={{ background: `linear-gradient(90deg, ${programa.color}60, ${programa.color}10, transparent)`, animation: 'fadeSlideUp 0.5s ease-out 0.3s both' }} />
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.35s both' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: programa.color + '20', boxShadow: `0 0 15px ${programa.color}15` }}>
                    <Phone className="w-5 h-5" style={{ color: programa.color }} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider block">Teléfono</span>
                    <span className="text-[16px] text-white font-semibold">{docente.telefono}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.4s both' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: programa.color + '20', boxShadow: `0 0 15px ${programa.color}15` }}>
                    <Mail className="w-5 h-5" style={{ color: programa.color }} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider block">Correo</span>
                    <span className="text-[16px] text-white font-semibold break-all">{docente.email}</span>
                  </div>
                </div>
              </div>
              <div className="h-[1px] my-4 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${programa.color}30, transparent)`, animation: 'fadeSlideUp 0.5s ease-out 0.45s both' }} />
              <div className="flex gap-3" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.5s both' }}>
                <a href={`tel:${docente.telefono}`} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-white text-[15px] font-bold transition-all hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: programa.color, boxShadow: `0 8px 30px -8px ${programa.color}60` }}>
                  <Phone className="w-4 h-4" /> Llamar
                </a>
                <a href={`mailto:${docente.email}`} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[15px] font-bold transition-all cursor-pointer border border-white/15">
                  <Mail className="w-4 h-4" /> Correo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {allDocentes.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center z-[110]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      {allDocentes.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center z-[110]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}

      {allDocentes.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110]">
          <span className="text-white/50 text-sm font-semibold tabular-nums bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
            {currentIndex + 1} / {allDocentes.length}
          </span>
        </div>
      )}

      <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center z-[110]">Ô£ò</button>

      <style>{`
        @keyframes wordSlideUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes nameSlideIn { 0% { opacity: 0; transform: translateX(-40px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes photoApproach { 0% { opacity: 0; transform: scale(1.2) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes photoRotate { 0% { transform: scale(1) translateY(0) rotateY(0deg); } 50% { transform: scale(1.03) translateY(-8px) rotateY(180deg); } 100% { transform: scale(1) translateY(0) rotateY(360deg); } }
        @keyframes photoShadow { 0% { box-shadow: -20px 0 50px -10px rgba(0,0,0,0.4), 0 35px 90px -20px rgba(0,0,0,0.4); } 25% { box-shadow: 0 0 60px -10px rgba(0,0,0,0.2), 0 45px 110px -20px rgba(0,0,0,0.3); } 50% { box-shadow: 20px 0 50px -10px rgba(0,0,0,0.4), 0 35px 90px -20px rgba(0,0,0,0.4); } 75% { box-shadow: 0 0 60px -10px rgba(0,0,0,0.2), 0 45px 110px -20px rgba(0,0,0,0.3); } 100% { box-shadow: -20px 0 50px -10px rgba(0,0,0,0.4), 0 35px 90px -20px rgba(0,0,0,0.4); } }
        @keyframes cardSlideFromFar { 0% { opacity: 0; transform: translateX(160px) scale(0.85); } 100% { opacity: 1; transform: translateX(0) scale(1); } }
        @keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(14px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes float-modal-bubble { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40vh) scale(1.1); } 100% { transform: translateY(-100vh) scale(0.8); } }
        .modal-bubble { animation: float-modal-bubble linear infinite; }
      `}</style>
    </div>
  );
}

export default function PlanaDocente({ t }) {
  const data = t.aboutMenu?.col2?.[3] || {};
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrograma, setSelectedPrograma] = useState('all');
  const [modalData, setModalData] = useState(null);

  const filteredProgramas = programas
    .filter(p => selectedPrograma === 'all' || p.id === selectedPrograma)
    .map(p => ({ ...p, docentes: p.docentes.filter(d => d.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || d.rol.toLowerCase().includes(searchTerm.toLowerCase())) }))
    .filter(p => p.docentes.length > 0);

  const handleDocenteClick = (doc, prog) => {
    const allDocs = prog.docentes;
    const idx = allDocs.findIndex(d => d.nombre === doc.nombre);
    setModalData({ docente: doc, programa: prog, allDocentes: allDocs, currentIndex: idx });
  };

  const handleNavigate = (newIndex) => {
    if (!modalData) return;
    const { allDocentes, programa } = modalData;
    const idx = ((newIndex % allDocentes.length) + allDocentes.length) % allDocentes.length;
    setModalData({ docente: allDocentes[idx], programa, allDocentes, currentIndex: idx });
  };

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Plana Docente'}
      breadcrumb={data.title || 'Plana Docente'}
    >
      <div className="bg-circle-1 top-20 right-10" />
      <div className="bg-circle-2 bottom-20 left-10" />

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-text dark:text-white">
          Docentes por Especialidad
        </h1>
        <span className="bg-white dark:bg-dark-card px-4 py-2 rounded-full text-sm font-semibold text-slate-text dark:text-white shadow-sm border border-primary/10">
          {totalDocentes} docentes
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar docente por nombre, especialidad o carrera..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-700 dark:text-white"
          />
        </div>
        
        <div className="relative">
          <select
            value={selectedPrograma}
            onChange={(e) => setSelectedPrograma(e.target.value)}
            className="w-full md:w-64 px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border/40 hover:border-gray-300 transition-all text-gray-700 dark:text-white appearance-none cursor-pointer"
          >
            <option value="all">Todas las carreras</option>
            {programas.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {filteredProgramas.map(programa => (
        <ProgramaSection key={programa.id} programa={programa} onDocenteClick={handleDocenteClick} />
      ))}

      {filteredProgramas.length === 0 && (
        <div className="text-center py-16 text-slate-text/50 dark:text-dark-text/50">No se encontraron docentes.</div>
      )}

      {modalData && (
        <DocenteModal docente={modalData.docente} programa={modalData.programa} allDocentes={modalData.allDocentes} currentIndex={modalData.currentIndex} onNavigate={handleNavigate} onClose={() => setModalData(null)} />
      )}
    </AboutPageShell>
  );
}
