import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false
    }),
    UserModule
  ],
  providers: [AppService, AppResolver]
})
export class AppModule {}
