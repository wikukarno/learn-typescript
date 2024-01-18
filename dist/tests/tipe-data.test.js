import { info } from "console";
describe('Data Type', function () {
    it('should must declare', function () {
        const name = "Wiku karno Prasetyagama";
        const balance = 1000000;
        const isVip = true;
        info(`Name: ${name}`);
        info(`Balance: ${balance}`);
        info(`Is VIP: ${isVip}`);
    });
});
