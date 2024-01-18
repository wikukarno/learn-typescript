import { info } from "console";
describe('Any', () => {
    it('should support any type', () => {
        const person = {
            name: 'Wiku',
            age: 22,
            isMarried: false
        };
        person.name = 22;
        person.age = 'Wiku';
        person.isMarried = 'Wiku';
        info(person.name);
        info(person.age);
        info(person.isMarried);
    });
});
