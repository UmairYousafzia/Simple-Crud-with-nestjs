import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';


@Injectable()
export class StudentService {
    constructor (
    // <StudentDocument> is Document which we used in Schema
        @InjectModel(Student.name) private studentmodel:
        Model<StudentDocument>
    ) {}
    //Use Partial because we have optional Parameter
    //  Promise<Student> its means Return that created data to Controller
    async creatStudent(data:Partial<Student>):
    Promise<Student>{
         const newstudent = new this.studentmodel(data);
         return newstudent.save();
    }
    
    async getAllstudent():
    Promise<Student[]>{
        //  Promise<Student[] using arrey because it return array
        return this.studentmodel.find().exec();
    }

    async getStdentById(id:string):
    Promise<Student | null> {
         return this.studentmodel.findById(id).exec();
    }
    async updateStduent(id:string, data: Partial<Student>):
    Promise<Student | null> {
        return this.studentmodel.findByIdAndUpdate(id, data, {new:true}).exec();
    }

    async deleteStdudent(id:string) :
    Promise <Student | null> {
        return this.studentmodel.findByIdAndDelete(id).exec();
    }

}
