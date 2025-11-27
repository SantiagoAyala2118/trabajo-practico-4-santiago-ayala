"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
const logMessage = (level, message) => {
    console.log(`El nivel de peligro es ${level}, el mensaje que contiene es ${message}`);
};
const message = logMessage(LogLevel.Error, "Ha ocurrido un error mortífero, *Desinstalando System 32*");
