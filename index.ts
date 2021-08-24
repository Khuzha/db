import { Sequelize } from 'sequelize-typescript';
import { config } from './config';

export const sequelize: Sequelize = new Sequelize(config);

sequelize.sync();

export { default as User } from './models/persons/user';
export { default as Contact } from './models/objects/contact';
export { default as ContactType } from './models/objects/contactType';
