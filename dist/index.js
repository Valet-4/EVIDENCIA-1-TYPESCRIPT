"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const operaciones_1 = require("./operaciones");
//Definiendo objetos() estudiante
const estudiante1 = {
    nombre: "Valentina",
    apellido: "Hernández",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 1019763547,
};
const estudiante2 = {
    nombre: "Luna",
    apellido: "Ramirez",
    tipoIdentificacion: "CC",
    numeroIdentificacion: 1019747853,
};
const estudiante3 = {
    nombre: "Maria",
    apellido: "Caro",
    edad: 16,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 1027534689,
};
//Crear un arreglo de estudiantes
const listaEstudiante = [estudiante1, estudiante1,];
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log(listaEstudiante);
//recorrer el arreglo
(0, recorrerEstudiantes_1.default)(listaEstudiante);
//OPERACIONES CON ARREGLOS:
console.log("----------");
console.log("Antes de insertar");
console.log(listaEstudiante);
(0, operaciones_1.insertarEstudiante)(estudiante2, listaEstudiante);
console.log("----------");
console.log("Despues de insertar");
console.log(listaEstudiante);
/*
actualizarEstudiante(1, listaEstudiante, "Chico","Serna")
console.log(listaEstudiante)*/
console.log("----------");
console.log("Antes de borrar");
console.log(listaEstudiante);
(0, operaciones_1.borrarEstudiante)(1, listaEstudiante);
console.log("----------");
console.log("Despues de borrar");
console.log(listaEstudiante);
