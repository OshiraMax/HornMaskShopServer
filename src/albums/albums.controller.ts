// src/albums/albums.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { Image } from './entities/image.entity';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  async findAll(): Promise<Album[]> {
    return await this.albumsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Album> {
    return await this.albumsService.findOne(+id);
  }

  @Post()
  async createAlbum(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<Album> {
    return await this.albumsService.createAlbum(title, description);
  }

  @Patch(':id')
  async updateAlbum(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<Album> {
    return await this.albumsService.updateAlbum(+id, title, description);
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string): Promise<void> {
    await this.albumsService.deleteAlbum(+id);
  }

  @Post(':albumId/images')
  async addImage(
    @Param('albumId') albumId: string,
    @Body('url') url: string,
    @Body('description') description: string,
  ): Promise<Image> {
    return await this.albumsService.addImage(+albumId, url, description);
  }

  @Delete('images/:id')
  async deleteImage(@Param('id') id: string): Promise<void> {
    await this.albumsService.deleteImage(+id);
  }
}
