import { info } from "console";

describe('Data Type', function(){
    it('should must declare', function(){
        const name: string = "Wiku karno Prasetyagama";
        const balance: number = 1000000;
        const isVip: boolean = true;

        info(`Name: ${name}`);
        info(`Balance: ${balance}`);
        info(`Is VIP: ${isVip}`);
    });
})