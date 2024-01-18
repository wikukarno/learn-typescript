import { sayHello } from "../src/say-hello";

describe('sayHello', function(){
    it('should return Hello Wiku', function(){
        expect(sayHello('Wiku')).toBe('Hello Wiku');
    });
})