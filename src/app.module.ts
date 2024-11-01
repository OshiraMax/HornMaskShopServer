import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AlbumsModule } from './albums/albums.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, AlbumsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
