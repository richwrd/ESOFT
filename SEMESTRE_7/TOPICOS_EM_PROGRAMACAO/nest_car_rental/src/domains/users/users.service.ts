import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.userModel.findOne({ nome: username }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
