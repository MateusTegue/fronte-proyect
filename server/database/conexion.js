import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, 
});


export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado correctamente a la base de datos');
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
    process.exit(1);
  }
};