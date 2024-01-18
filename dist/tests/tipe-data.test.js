import { info } from "console";
describe('Data Type', function () {
    it('should must declare', function () {
        let name = "Wiku karno Prasetyagama";
        let balance = 1000000;
        let isVip = true;
        info(`Name: ${name}`);
        info(`Balance: ${balance}`);
        info(`Is VIP: ${isVip}`);
        name = 100;
        balance = "1000000";
        isVip = "true";
    });
});
