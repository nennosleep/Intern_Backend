import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import healthRoute from './routes/health.route';
import { sendResponse } from './utils/response';
import { StatusCodes } from 'http-status-codes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/health', healthRoute);

// 404 Handler
app.use((req: Request, res: Response) => {
  sendResponse(res, StatusCodes.NOT_FOUND, false, 'Route not found');
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  sendResponse(
    res,
    err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    false,
    err.message || 'Internal Server Error',
    {},
    err.errors || null
  );
});

export default app;
