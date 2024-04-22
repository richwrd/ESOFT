import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema'; // Importe o schema aqui

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])], // Registre o schema no MongooseModule
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
