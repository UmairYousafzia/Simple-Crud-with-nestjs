import { Controller, Get, Param } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
   
   @Get(':id')
    getNinjas(@Param('id') id:string){
        return ['Umair','Ali','Azan', 'Osama', 2];
    }
}
