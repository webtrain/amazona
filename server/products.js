import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234x', 8),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'apple watch',
      category: 'watch',
      image: '/img/product-2.jpg',
      price: 120,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 1299,
      description: 'The future is on your wrist.',
      countInStock: 10,
    },
    {
      name: 'Sony headphone',
      category: 'headphone',
      image: '/img/product-5.jpg',
      price: 99,
      brand: 'Sony',
      rating: 4,
      numReviews: 869,
      description: 'high quality headphone',
      countInStock: 20,
    },
    {
      name: 'Nike shoe',
      category: 'shoe',
      image: '/img/product-7.jpg',
      price: 139,
      brand: 'Nike',
      rating: 4,
      numReviews: 2551,
      description: 'high quality street shoe',
      countInStock: 0,
    },
    {
      name: 'amazon echo',
      category: 'electronics',
      image: '/img/product-11.jpg',
      price: 179,
      brand: 'amazon',
      rating: 5,
      numReviews: 136,
      description: 'high quality home product',
      countInStock: 42,
    },
    {
      name: 'apple air pod',
      category: 'air pod',
      image: '/img/product-19.jpg',
      price: 189,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7524,
      description: 'high quality headphone',
      countInStock: 31,
    },
  ],
};

export default data;
