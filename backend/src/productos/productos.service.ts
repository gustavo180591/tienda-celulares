import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private productos = [
        {
            id: 1,
            nombre: 'iPhone 14 Pro',
            precio: 999,
            imagen: 'https://via.placeholder.com/500x300',
        },
        {
            id: 2,
            nombre: 'Samsung Galaxy S23',
            precio: 899,
            imagen: 'https://via.placeholder.com/500x300',
        },
        {
            id: 3,
            nombre: 'Xiaomi 13 Pro',
            precio: 799,
            imagen: 'https://via.placeholder.com/500x300',
        },
    ];

    findAll() {
        return this.productos;
    }

    findOne(id: number) {
        return this.productos.find((p) => p.id === id);
    }
}
