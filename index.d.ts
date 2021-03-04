import { Express } from 'express';

declare module 'express-swagger-generator'

declare var generateSpecAndMount: (app: Express) => (options: expressSwaggerGenerator.ExpressSwaggerOptions) => expressSwaggerGenerator.SwaggerObject;

declare namespace expressSwaggerGenerator {
  interface ExpressSwaggerOptions {
    basedir: string,
    files: string[],
    swaggerDefinition: SwaggerObject
  }

  interface SwaggerObject {
    info: {
      title: string,
      version: string
      description?: string,
      termsOfService?: string,
      contact?: {
        name: string,
        url: string,
        email: string
      },
      license?: {
        name: string,
        url?: string
      },
    },
    host?: string,
    basePath?: string,
    schemes?: string[],
    consumes?: string[],
    produces?: string[],
    paths?: any,
    definitions?: any,
    responses?: any,
    parameters?: any,
    securityDefinitions?: any,
    security?: any,
    tags?: any,
    externalDocs?: any,
  }

}

export = generateSpecAndMount
