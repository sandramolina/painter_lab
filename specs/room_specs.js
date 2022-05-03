const assert = require("assert");
const Room = require("../room.js");

describe("Room", function () {
  let room1;
  this.beforeEach(function () {
    room1 = new Room(20, false);
  });

  it("Should have an area", function () {
    const actual = room1.area;
    assert.strictEqual(actual, 20);
  });

  it("Should start not painted", function () {
    const actual = room1.painted;
    assert.strictEqual(actual, false);
  });

  it("Should be able to be painted", function () {
    room1.toPaint();
    const actual = room1.painted;
    assert.strictEqual(actual, true);
  });
});
