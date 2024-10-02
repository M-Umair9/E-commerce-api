import  Cart  from '../models/CartModels.js';

// Add item to the cart
export const addItemToCart = async (req, res) => {  
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Cart exists, check if the product is already in the cart
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      
      if (itemIndex > -1) {
        // Product exists, update the quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Product does not exist, add it to the cart
        cart.items.push({ productId, quantity });
      }

    } else {
      // No cart exists for this user, create a new cart
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    }

    await cart.save();
    res.status(201).json(cart);

  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
};

// Remove item from the cart
export const removeItemFromCart = async (req, res) => {
  const { userId } = req.body;
  const { itemId } = req.params;


   // Validation check
   if (!userId || !itemId) {
    return res.status(400).json({ message: 'userId and itemId are required' });
  }
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      console.log(`Cart not found for userId: ${userId}`); // Log the error
      return res.status(404).json({ message: 'Cart not found' });
    }
      const itemIndex = cart.items.findIndex(item => item._id.toString() === itemId);

      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
        await cart.save();
        res.json({ message: 'Item removed from cart', cart });
      } else {
        res.status(404).json({ message: 'Item not found in cart' });
      }
   

  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart', error: error.message });
  }
};

// Get current cart
export const getCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error: error.message });
  }
};
