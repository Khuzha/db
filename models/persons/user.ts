import {
  Table, Column, Model,
  AllowNull, Length, HasMany
} from 'sequelize-typescript';
import { Contact } from '../../index';

@Table({
  schema: 'persons',
  modelName: 'users',
  timestamps: false
})
export default class User extends Model {
  @AllowNull(false)
  @Length({ max: 64 })
  @Column
  email!: string;

  @AllowNull(false)
  @Length({ max: 128 })
  @Column({ field: 'traffic_source' })
  traffirSource!: string;

  @Length({ max: 32 })
  @Column({ field: 'first_name' })
  firstName!: string;

  @Length({ max: 32 })
  @Column({ field: 'last_name' })
  lastName!: string;

  @Column
  birthday!: Date;

  @HasMany(() => Contact)
  contacts!: Array<Contact>;
}
