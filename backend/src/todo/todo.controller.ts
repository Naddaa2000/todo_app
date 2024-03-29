import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Post,
  Res,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  findAll(@Res() res: Response): Promise<any> {
    return this.todoService.findAll(res);
  }

  @Post('/create')
  create(@Body('task') task: string, @Res() res: Response): Promise<void> {
    return this.todoService.create(task, res);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('completed') completed: boolean,
    @Res() res: Response,
  ): Promise<void> {
    return this.todoService.update(Number(id), completed, res);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    return this.todoService.delete(Number(id), res);
  }
}
