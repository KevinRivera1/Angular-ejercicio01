import { CategoryModel } from "./category.modul";

export interface ProductModel {
    title: string;
    price: number;
    description: string;
    category: number;
    images: string[];
}