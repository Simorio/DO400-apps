const assert = require("assert");
const greet = require("../greet");


describe("greet", () =>{

    it("greets in italian", () => {
        assert.strictEqual("Ciao Pablo!", greet("Pablo"));
    });

});

