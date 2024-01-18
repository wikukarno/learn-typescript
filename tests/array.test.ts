import { info } from "console";

describe("Array", function () {
  it("should must declare", function () {
    const names: string[] = ["Wiku", "Karno", "Prasetyagama"];
    const balances: number[] = [1000000, 2000000, 3000000];
    const isVips: boolean[] = [true, false, true];

    info(`Name: ${names}`);
    info(`Balance: ${balances}`);
    info(`Is VIP: ${isVips}`);
  });

  // Read Only Array
    it("should must declare read only array", function () {
        const names: ReadonlyArray<string> = ["Wiku", "Karno", "Prasetyagama"];
        info(names);
        info(names[0]);
        info(names[1]);

        // Error
        // names[0] = "Wiku";
    });

    // Tuple
    it("should must declare tuple", function () {
        const biodata: [string, number] = ["Wiku", 22];
        info(biodata[0]);
        info(biodata[1]);
    });
});
