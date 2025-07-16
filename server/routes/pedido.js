import express from 'express';
import { Pedido } from '../models/Pedido.js';
import { Producto } from '../models/Producto.js';

const router = express.Router();

// Relación: cada pedido pertenece a un producto
Pedido.belongsTo(Producto, { foreignKey: 'productoId' });

// Ruta para obtener todos los pedidos con su producto
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: [{ model: Producto }]
    });
    res.json(pedidos);
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

export default router;