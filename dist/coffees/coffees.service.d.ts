import { CoffeeEntity } from './entities/coffee.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): CoffeeEntity[];
    findOne(id: string): CoffeeEntity;
    create(createCoffeeDto: any): void;
    update(id: string, updateCoffeeDto: any): void;
    remove(id: string): void;
}
