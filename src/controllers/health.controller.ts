import { Request, Response } from 'express';
import { sendResponse } from '../utils/response';
import { StatusCodes } from 'http-status-codes';

export const healthCheck = (req: Request, res: Response) => {
  const data = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };

  return sendResponse(res, StatusCodes.OK, true, 'Success', data);
};
