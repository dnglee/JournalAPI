import { createLogger, format, transports } from "winston";


const logger = createLogger({
    level: "info",
    format: format.combine(
      format.timestamp(),
      format.json() // Logs in JSON format
    ),
    defaultMeta: { service: "journal-service" },
    transports: [
      // Console logging (for development)
      new transports.Console({
        format: format.combine(
          format.colorize(), // Colorized output for better readability in the console
          format.simple()    // Simplified format for console
        ),
      }),
      // File logging (for errors)
      new transports.File({ filename: "logs/error.log", level: "error" }),
      // File logging (for all logs)
      new transports.File({ filename: "logs/combined.log" }),
    ],
  });
  
  export default logger;