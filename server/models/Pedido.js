import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'pedido',
  timestamps: false,
});