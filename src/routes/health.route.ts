import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: API Health Check
 *     description: Kiểm tra tình trạng hoạt động của API
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Trả về trạng thái hoạt động của server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                       example: OK
 *                     timestamp:
 *                       type: string
 *                       example: 2024-01-01T00:00:00.000Z
 *                     uptime:
 *                       type: number
 *                       example: 123.45
 *                 errors:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */
router.get('/', healthCheck);

export default router;
