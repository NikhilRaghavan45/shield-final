import axios from 'axios';

async function addToCart(id, name, price) {
    const response = await axios.post('http://localhost:3001/cart', { productId: id, name, price });
    // Handle the response as needed
    console.log('Added to cart:', response.data);
    window.alert('Added to Cart')
}

export default addToCart