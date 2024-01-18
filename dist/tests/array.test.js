import { info } from "console";
describe("Array", function () {
    it("should must declare", function () {
        const names = ["Wiku", "Karno", "Prasetyagama"];
        const balances = [1000000, 2000000, 3000000];
        const isVips = [true, false, true];
        info(`Name: ${names}`);
        info(`Balance: ${balances}`);
        info(`Is VIP: ${isVips}`);
    });
    // Read Only Array
    it("should must declare read only array", function () {
        const names = ["Wiku", "Karno", "Prasetyagama"];
        info(names);
        info(names[0]);
        info(names[1]);
        // Error
        // names[0] = "Wiku";
    });
    // Tuple
    it("should must declare tuple", function () {
        const biodata = ["Wiku", 22];
        info(biodata[0]);
        info(biodata[1]);
    });
});
