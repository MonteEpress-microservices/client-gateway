import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_MICRO_SERVICE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: PRODUCT_MICRO_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PRODUCT_MICRO_SERVICE_HOST,
          port: envs.PRODUCT_MICRO_SERVICE_PORT
        }
      },
    ]),
  ]
})
export class ProductsModule {
  constructor() {
    
  }
}
