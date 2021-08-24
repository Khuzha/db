import {
  Table, Column, Model,
  AllowNull, Length, HasOne
} from 'sequelize-typescript';
import { Contact } from '../../index';

@Table({
  schema: 'objects',
  modelName: 'contact_types',
  timestamps: false
})
export default class ContactType extends Model {
  @AllowNull(false)
  @Length({ max: 16 })
  @Column
  title!: string;

  @HasOne(() => Contact)
  contact!: Contact;
}
