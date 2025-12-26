import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel:Model<User>){}
    async createuser():Promise<User>{
        const user = new this.userModel({
            name: "Umair hussain",
            address: {
                street: '123 fsfsaf',
                city: 'Islamabad',
            }
        }) 
        return user.save();
    }
    async findall(): Promise<User []> {
        return this.userModel.find();
    }

}
