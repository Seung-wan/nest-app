import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'Get All Students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
  }

  @Post()
  createStudent() {
    return 'Student Created';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Student Updated By Id';
  }
}
