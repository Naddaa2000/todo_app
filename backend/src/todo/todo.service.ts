import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './Entity/todo.entity';
import { Repository } from 'typeorm';
import { errorResponse } from 'src/response/error';
import { successResponse } from 'src/response/success';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  async findAll(res): Promise<void> {
    try {
      const findtask = await this.todoRepository.find();
      if (findtask.length > 0) {
        successResponse(res, 'Task fetched successfully', findtask);
      }
    } catch (error) {
      errorResponse(res, error);
    }
  }

  async create(task: string, res): Promise<void> {
    try {
      if (!task) {
        errorResponse(res, 'enter a task', 400);
      } else {
        const todo = new Todo();
        todo.task = task;
        const save = await this.todoRepository.save(todo);
        successResponse(res, 'task created successfully', save);
      }
    } catch (error) {
      errorResponse(res, error);
    }
  }

  async update(id: number, completed: boolean, res): Promise<void> {
    try {
      const todo = await this.todoRepository.findOne({ where: { id } });
      if (todo) {
        todo.completed = completed;
        const update = await this.todoRepository.save(todo);
        successResponse(res, 'task updated successfully', update);
      } else {
        errorResponse(res, 'id not found', 404);
      }
    } catch (error) {
      errorResponse(res, error);
    }
  }

  async delete(id: number, res): Promise<void> {
    try {
      const findId = await this.todoRepository.findOne({ where: { id } });
      if (findId) {
        await this.todoRepository.delete(id);
        successResponse(res, 'task deleted successfully', null);
      } else {
        errorResponse(res, 'id not found', 404);
      }
    } catch (error) {
      errorResponse(res, error);
    }
  }
}
