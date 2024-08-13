import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  async createForm(createFormDto: CreateFormDto): Promise<Form> {
    const form: Form = new Form();
    console.log('createFormDto:', createFormDto);
    console.log('createFormDto.Date:', createFormDto.Date);
    console.log('createFormDto.Feedback:', createFormDto.Feedback);
    console.log('createFormDto.About:', createFormDto.About);

    form.Date = createFormDto.Date;
    form.Feedback = createFormDto.Feedback;
    form.About = createFormDto.About;

    try {
      return await this.formRepository.save(form);
    } catch (error) {
      console.error('Error saving form:', error);
      throw new Error('Could not save form');
    }
  }

  findAllForms(): Promise<Form[]> {
    return this.formRepository.find();
  }

  findOne(id: number): Promise<Form> {
    return this.formRepository.findOneBy({ id });
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    const form: Form = new Form();
    form.Date = updateFormDto.Date;
    form.Feedback = updateFormDto.Feedback;
    form.About = updateFormDto.About;
    form.id = id;
    return this.formRepository.save(form);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.formRepository.delete({ id });
  }
}
