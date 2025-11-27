enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

const logMessage = (level: LogLevel, message: string) => {
  console.log(
    `El nivel de peligro es ${level}, el mensaje que contiene es ${message}`
  );
};

const message = logMessage(
  LogLevel.Error,
  "Ha ocurrido un error mortífero, *Desinstalando System 32*"
);
