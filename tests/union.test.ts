import { info } from "console";

describe("union", function () {
  it("should must declare union", function () {
    let phone: string | number;
    phone = "0822";
    phone = 62822;
    info(phone);
  });

  it("should support typeof", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }
    expect(process("Wiku")).toBe("WIKU");
    expect(process(22)).toBe(24);
    expect(process(true)).toBe(false);
  });
});
