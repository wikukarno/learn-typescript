import { info } from "console";
import { Category, Product } from "../src/type-alias";

describe('Type Alias', function() { 
    it('should support in typescript', function() {
        const category: Category = {
            id: 1,
            name: 'Macbook Pro 2020'
        };

        const product: Product = {
            id: '1',
            name: 'Macbook Pro 2020',
            price: 30000000,
            category: category
        };

        info(category);
        info(product);

    });
})