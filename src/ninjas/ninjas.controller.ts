import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
   
   @Get(':id')
    getNinjas(@Param('id') id:number){
        return {
            id
        };
    }
    @Post(':id')
    postninjha(@Param('id') id:string) {
        return {
            id
        }
    }

}
