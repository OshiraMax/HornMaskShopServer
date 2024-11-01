// src/albums/albums.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './entities/album.entity';
import { Image } from './entities/image.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
    
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  // Получить все альбомы
  async findAll(): Promise<Album[]> {
    return await this.albumRepository.find({ relations: ['images'] });
  }

  // Получить альбом по ID
  async findOne(id: number): Promise<Album> {
    const album = await this.albumRepository.findOne({ where: { id }, relations: ['images'] });
    if (!album) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
    return album;
  }

  // Создать новый альбом
  async createAlbum(title: string, description: string): Promise<Album> {
    const album = this.albumRepository.create({ title, description });
    return await this.albumRepository.save(album);
  }

  // Обновить альбом по ID
  async updateAlbum(id: number, title: string, description: string): Promise<Album> {
    const album = await this.findOne(id);
    album.title = title;
    album.description = description;
    return await this.albumRepository.save(album);
  }

  // Удалить альбом по ID
  async deleteAlbum(id: number): Promise<void> {
    const result = await this.albumRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
  }

  // Добавить изображение в альбом
  async addImage(albumId: number, url: string, description: string): Promise<Image> {
    const album = await this.findOne(albumId);
    const order = album.images.length + 1;
    const image = this.imageRepository.create({ url, description, order, album });
    return await this.imageRepository.save(image);
  }

  // Удалить изображение по ID
  async deleteImage(id: number): Promise<void> {
    const result = await this.imageRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Image with ID ${id} not found`);
    }
  }
}
