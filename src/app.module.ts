import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AlbumsModule } from './albums/albums.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true 
    }), // Подключаем конфигурацию глобально
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER || 'defaultUser',
      password: process.env.DB_PASSWORD || 'defaultPassword',
      database: process.env.DB_NAME || 'defaultDatabase',
      autoLoadEntities: true, // Автоматически загружает сущности
      synchronize: true, // Только для разработки: синхронизирует структуру БД с сущностями
    }),
    AlbumsModule,
    AuthModule,
  ],
})
export class AppModule {}

