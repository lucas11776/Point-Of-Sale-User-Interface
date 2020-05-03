import { Image } from './image';
import { Category } from './category';
import { SubCategory } from './sub.category';

export interface Product {
    id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
    name: string;
    slug: string;
    brand: string;
    in_stock: number;
    price: number;
    discount: number;
    image?: Image;
    category?: Category;
    sub_category?: SubCategory;
    
}