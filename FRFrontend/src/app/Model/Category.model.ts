export default class Category{
    id: number;
    name: string;
    displayOrder: number;

    constructor(id: number, name: string, displayOrder: number)
    {
        this.id = id;
        this.name = name;
        this.displayOrder = displayOrder;
    }
}