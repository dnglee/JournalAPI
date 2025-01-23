import { Request, Response } from "express";
import logger from "../utils/logger"; // Import the Winston logger


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response
) => {
  // Log the error using Winston
  logger.error({
    message: err.message,
    stack: err.stack,
    request: {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      body: req.body,
    },
  });

  // Handle unexpected errors
  res.status(500).json({
    status: "error",
    message: "An unexpected error occurred",
  });
};
