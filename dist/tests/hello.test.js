"use strict";
describe('Hello', () => {
    it('should return Hello World', () => {
        const name = "World";
        expect(`Hello ${name}`).toBe("Hello World");
    });
});
