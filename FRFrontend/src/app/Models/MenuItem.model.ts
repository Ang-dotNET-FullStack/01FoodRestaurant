export class MenuItem{
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    foodTypeId: number;
    categoryId: number;

    constructor(id: number, name: string, description: string, image: string, price: number, foodTypeId: number, categoryId: number)
    {
        this.id = id;
        this.name = name;
        this.description=description;
        this.image = image;
        this.price = price;
        this.foodTypeId = foodTypeId;
        this.categoryId = categoryId;
    }
}