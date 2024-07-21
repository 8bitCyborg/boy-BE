import { Controller, Post, Body, Res, Get, Param, Delete, Put } from '@nestjs/common';
import { Response } from 'express'
import { ScribblesService } from './scribbles.service';

@Controller('scribbles')
export class ScribblesController {
  constructor( private readonly scribblesService: ScribblesService ){}

  @Get()
  async getAllScribbles(@Res() res: Response){
    return await this.scribblesService.getAllScribbles(res);
  };

  @Get(':id')
  async getSingleScribble(
    @Param('id') id: string,
    @Res() res: Response,
  ){
    return await this.scribblesService.getSingleScribble(id, res);
  }

  @Post()
  async saveScribble(
    @Body() data: any,
    @Res() res: Response,
  ){
    return await this.scribblesService.saveScribble(data, res);
  };

  @Delete(':id')
  async deleteScribble(
    @Param('id') id: string,
    @Res() res: Response,
  ){
    return await this.scribblesService.deleteScribble(id, res);
  }

  @Put(':id')
  async updateScribble(
    @Param('id') id: string, 
    @Body() data: any, 
    @Res() res: Response,
  ){
    return await this.scribblesService.updateScribble(id, data, res);
  }

}
