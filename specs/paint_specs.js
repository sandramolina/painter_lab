const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function () {
  let paint;
  this.beforeEach(function () {
    paint = new Paint(25, false);
  });

  it("Should have a number of lits of paint", function () {
    const actual = paint.litres;
    assert.strictEqual(actual, 25);
  });

  it("Should be able to check if can is empty", function () {
    const actual = paint.empty;
    assert.strictEqual(actual, false);
  });

  it("Should be able to empty itself of paint", function () {
    paint.toEmpty();
    const actual = paint.empty;
    assert.strictEqual(actual, true);
  });
});
