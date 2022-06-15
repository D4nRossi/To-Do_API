import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/pg';

export interface TodoInstance extends Model {
    id: number;
    title: string;
    //mysql nn tem boolean, se der merda arrumar aqui (arrumado - )
    done: boolean;
}

export const Todo = sequelize.define<TodoInstance>('Todo', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'todos',
    timestamps: false
});