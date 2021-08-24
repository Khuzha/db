import {
  Table, Column, Model, AllowNull,
  Length, ForeignKey, DataType, BelongsTo
} from 'sequelize-typescript';
import { User, ContactType } from '../../index';

@Table({
  schema: 'objects',
  modelName: 'contacts',
  timestamps: false
})
export default class Contact extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({ field: 'user_id', type: DataType.INTEGER })
  userId!: number;

  @ForeignKey(() => ContactType)
  @AllowNull(false)
  @Column({ field: 'type_id', type: DataType.INTEGER })
  typeId!: number;

  @AllowNull(false)
  @Length({ max: 32 })
  @Column
  value!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => ContactType)
  type!: ContactType;
}
