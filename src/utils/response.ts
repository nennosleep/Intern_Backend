import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors: any | null;
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data: T = {} as T,
  errors: any | null = null
) => {
  const response: ApiResponse<T> = {
    success,
    message,
    data,
    errors,
  };
  return res.status(statusCode).json(response);
};
