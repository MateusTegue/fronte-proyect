import express from 'express';
import pg from 'pg';
import cors from 'cors';
import { Producto } from './models/Producto.js'; // ajusta la ruta si es diferente
import pedidoRoutes from './routes/pedido.js';


const app = express();
app.use(express.json());
app.use(cors()); // permite conexiones desde el frontend
app.use('/api/pedido', pedidoRoutes);

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testing_frontend',
  password: 'Univalle',
  port: 5432,
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT id, email, full_name FROM users WHERE email = $1 AND password = $2',
      [email, password] 
    );

    if (result.rows.length === 1) {
      res.json({
        success: true,
        user: result.rows[0],
      });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});

app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.findAll({
      attributes: ['id', 'nombre']
    });
    res.json(productos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener productos' });
  }
});


app.post('/api/pedido', async (req, res) => {
  const { nombre, tipo, cantidad } = req.body;

  if (!nombre || !tipo || !cantidad) {
    return res.status(400).json({ success: false, message: 'Faltan campos' });
  }

  try {
    const nuevoProducto = await Producto.create({
      nombre,
      tipo,
      cantidad
    });

    res.status(201).json({ success: true, producto: nuevoProducto });
  } catch (err) {
    console.error('Error al crear pedido:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

