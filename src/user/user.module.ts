import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userschema, User } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: userschema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
