# Realtime CRM / Customer Support Backend

Dự án Backend cho hệ thống Realtime CRM, xây dựng bằng **Node.js, Express.js và TypeScript**.

## Công nghệ sử dụng
- **Framework:** Express.js
- **Ngôn ngữ:** TypeScript
- **Cơ sở dữ liệu:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod
- **Tài liệu API:** Swagger (OpenAPI 3.0)

## Hướng dẫn cài đặt và chạy dự án

### 1. Cài đặt các thư viện
```bash
yarn install
```

### 2. Thiết lập biến môi trường
Kiểm tra file `.env` chứa chuỗi kết nối PostgreSQL:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/crm_db?schema=public"
PORT=3000
```

### 3. Chạy dự án
Chế độ Development (tự động reload khi sửa code):
```bash
yarn dev
```

Build và chạy Production:
```bash
yarn build
yarn start
```

### 4. Kiểm tra mã nguồn (Linting)
```bash
yarn lint
yarn format
```

## API Documentation
Sau khi start server, truy cập Swagger UI tại:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

API Health Check: `GET /api/health`
