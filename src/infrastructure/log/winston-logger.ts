import * as winston from "winston";

export function logger(winstonInstance: winston.Logger) {
    winstonInstance.configure({
        level: process.env.APP_ENV === "production" ? "info" : "debug",
        transports: [
            new winston.transports.File({filename: "error.log", level: "error"}),
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple()
                )
            })
        ]
    });
}
