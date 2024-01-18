import { info } from "console";
describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: 'Macbook Pro 2020'
        };
        const product = {
            id: '1',
            name: 'Macbook Pro 2020',
            price: 30000000,
            category: category
        };
        info(category);
        info(product);
    });
});
