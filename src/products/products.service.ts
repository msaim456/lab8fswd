import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: 1, name: 'Wireless Noise-Canceling Headphones', category: 'Electronics', price: 199.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Minimalist Leather Smart Watch', category: 'Electronics', price: 149.5, rating: 4.6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'Classic Denim Jacket', category: 'Fashion', price: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: 'Ergonomic Mechanical Keyboard', category: 'Electronics', price: 129, rating: 4.9, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80' },
    { id: 5, name: 'Urban Trail Running Shoes', category: 'Fashion', price: 110, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: 6, name: 'Stainless Steel Water Bottle', category: 'Lifestyle', price: 28.5, rating: 4.4, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80' },
    { id: 7, name: 'Polarized Retro Sunglasses', category: 'Fashion', price: 45, rating: 4.3, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80' },
    { id: 8, name: 'Scented Soy Wax Candle', category: 'Lifestyle', price: 22, rating: 4.8, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80' },
  ];

  findAll(category?: string, search?: string): Product[] {
    const normalizedSearch = search?.trim().toLowerCase();

    return this.products.filter((product) => {
      const matchesCategory =
        !category || category.toLowerCase() === 'all' ||
        product.category.toLowerCase() === category.toLowerCase();
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }

  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} was not found`);
    }

    return product;
  }
}
