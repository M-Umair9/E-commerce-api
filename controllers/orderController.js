import Order from '../models/OrderModel.js';

export const placeOrder = async (req, res) => {
  const { userId, items, shippingAddress, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      userId,
      items,
      shippingAddress,
      totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error: error.message });
  }
};

export const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId).populate('items.productId', 'name price');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error: error.message });
  }
};
