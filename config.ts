import { SequelizeOptions } from 'sequelize-typescript';
import User from './models/persons/user';
import Contact from './models/objects/contact';
import ContactType from './models/objects/contactType';

export const config: SequelizeOptions = {
  models: [ContactType, User, Contact],
  dialect: 'postgres',
  host: process.env.DB_HOST || '',
  port: +(process.env.DB_PORT || ''),
  database: process.env.DB_NAME || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || ''
};
