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

  createForm(createFormDto: CreateFormDto) {
    const form: Form = new Form();
    form.Date = createFormDto.Date;
    form.Feedback = createFormDto.Feedback;
    form.About = createFormDto.About;
    return this.formRepository.save(form);
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
