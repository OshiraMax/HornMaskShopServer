import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private users: User[] = []; // Для простоты, массив пользователей вместо БД

  constructor(private readonly jwtService: JwtService) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = { id: Date.now(), email: registerDto.email, password: hashedPassword };
    this.users.push(newUser);
    return newUser;
  }

  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const user = this.users.find((user) => user.email === loginDto.email);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

