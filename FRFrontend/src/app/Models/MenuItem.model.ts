import Category from "./Category.model";
import FoodType from "./FoodType.model";

export class MenuItem{
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    foodTypeId: number;
    categoryId: number;
    category: Category;
    foodType: FoodType;
    

    constructor(id: number, name: string, description: string, image: string, price: number,
         foodTypeId: number, categoryId: number, category: Category, foodType: FoodType)
    {
        this.id = id;
        this.name = name;
        this.description=description;
        this.image = image;
        this.price = price;
        this.foodTypeId = foodTypeId;
        this.categoryId = categoryId;
        this.category = category;
        this.foodType = foodType;
    }
}