import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get All Student That Belong To A Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Updated Student Teacher';
  }
}
