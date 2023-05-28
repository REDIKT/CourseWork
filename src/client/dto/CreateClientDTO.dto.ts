import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClientDto { 

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  phone_number: string;

  @IsNotEmpty()
  password: string;
}