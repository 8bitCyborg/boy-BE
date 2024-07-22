import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { Scribbles } from './entities/scribble.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ScribblesService {
  constructor(
    @InjectRepository(Scribbles)
    private scribbleRepository: Repository<Scribbles>,
  ){}

  async getAllScribbles(res: Response){
    try {
      const scribbles = await this.scribbleRepository.find();
      return res.status(200).send({
        message: "Scribbles retrieved successfully",
        data: scribbles, 
        status: 200,
      })
    } catch (error) {
      return res.status(400).send({
        message: "Unable to retrieve scribbles",
        error,
        status: 400,
      });
    }
  }

  async getSingleScribble(id: string, res: Response){
    try {
      const scribble = await this.scribbleRepository.findOneBy({ _id: new ObjectId(id) })
      if(Boolean(scribble._id)){
        return res.status(200).send({
          message: "Scribble retrieved successfully",
          data: scribble,
          status: 200,
        });
      }else{
        return res.status(404).send({
          message: "Scribble not found",
          error: 'find failed',
          status: 404,
        });
      };
    } catch (error) {
      return res.status(400).send({
        message: "Unable to retrieve scribble",
        error,
        status: 400,
      });
    }
  }

  async saveScribble(data: any, res: Response){
    try {
      const saveScribble = await this.scribbleRepository.save(data);
      if(Boolean(saveScribble._id)){
        return res.status(200).send({
          message: "success",
          status: 200,
          data: saveScribble,
        });
      }else{
        return res.status(400).send({
          message: 'Unable to save scribble',
          status: 400,
          error: 'save failed'
        })
      }
    } catch (error) {
      return res.status(400).send({
        message: "Unable to save scribble",
        error, 
        status: 400,
      });
    };
  };

  async deleteScribble(id: string, res: Response){
    try {
      const deleteScribble = await this.scribbleRepository.delete({ _id: new ObjectId(id) });
      console.log('delete', deleteScribble);

      return res.status(200).send({
        message: "Scribble deleted successfully",
        status: 200,
      });
    } catch (error) {
      return res.status(200).send({
        message: "Unable to delete scribble",
        status: 400,
        error,
      });
    };
  };

  async updateScribble(id: string, data: any, res: Response){
    try {
      console.log('id', id)
      const { title, content, likes, dislikes } = data;
      const updateScribble = await this.scribbleRepository.update(
        { _id: new ObjectId(id)},
        { title, content, likes, dislikes }
      );
      if(updateScribble){
        return res.status(200).send({
          message: 'Scribble updated successfully',
          status: 200,
        });
      }else{
        return res.status(400).send({
          message: 'Unable to update scribble',
          status: 400,
          error: 'Update failed',
        });
      }
    } catch (error) {
      return res.status(400).send({
        message: "Unable to update scribble",
        status: 400, 
        error,
      })
    }
  }
};
