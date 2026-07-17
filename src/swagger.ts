import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Realtime CRM API',
      version: '1.0.0',
      description: 'API Documentation cho hệ thống Realtime CRM',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Path tới các file chứa annotations
};

export const swaggerSpec = swaggerJSDoc(options);
