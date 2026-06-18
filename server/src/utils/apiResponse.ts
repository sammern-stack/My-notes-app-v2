import type { Response } from "express";

export const sendSuccess = (
  res: Response,
  statusCode = 200,
  message: string,
  data: unknown,
  meta?: Record<string, unknown>,
): void => {
  const success = {
    ok: true,
    message,
    data,
    ...(meta && { meta }),
  };

  res.status(statusCode).json(success);
};

export const sendError = (
  res: Response,
  message: string,
  statusCode = 500,
): void => {
  const failed = {
    ok: false,
    msg: message,
  };

  res.status(statusCode).json(failed);
};
