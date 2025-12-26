import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentservice:StudentService) {}
    @Post()
     async AddStduent(@Body() data: Partial<Student>) {
        return this.studentservice.creatStudent(data);
     }
     @Get()

     async getstudent() {
        return this.studentservice.getAllstudent();
     }
      @Get(':id')
     async getstudentbyid(@Param('id') id:string)  {
        return this.studentservice.getStdentById(id);
     }

     @Put(':id')
     async updateStduent(
         @Param('id') id: string,
         @Body() data:Partial<Student>, 
      ) {
      return this.studentservice.updateStduent(id,data);
     }
     
      @Delete(':id')
     async DeleteStduent(
      @Param('id') id:string){
         return this.studentservice.deleteStdudent(id);
      }
}

