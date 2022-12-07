import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list')
  async listPaintings() {
    const [ rows ] = await db.execute('SELECT title FROM paintings')


    return {
      paintings: rows,
    };
  }
}
