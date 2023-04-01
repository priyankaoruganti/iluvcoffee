import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
export declare class CoffeesController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeesService);
    findAll(paginationQuery: any): import("./entities/coffee.entity").CoffeeEntity[];
    findOne(id: string): import("./entities/coffee.entity").CoffeeEntity;
    create(createCoffeeDto: CreateCoffeeDto): void;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): void;
    remove(id: string): void;
}
