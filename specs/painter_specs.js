const assert = require("assert");
const Painter = require("../painter.js");
const Room = require("../room.js");

describe("Painter", function () {
  let painter;
  this.beforeEach(function () {
    painter = new Painter();
  });

  it("Should start with empty paint stock", function () {
    const actual = painter.stock;
    assert.strictEqual(actual, 0);
  });

  it("Should be able to add a can of paint to paint stock", function () {
    painter.addCanToStock();
    const actual = painter.stock;
    assert.strictEqual(actual, 1);
  });

  it("Should calculate total of litres of paint", function () {
    painter.addCanToStock();
    painter.addCanToStock();
    const actual = painter.totalLitres();
    assert.strictEqual(actual, 50);
  });

  it("Should calculate if enough paint", function () {
    painter.addCanToStock();
    painter.addCanToStock();
    roomToPaint = new Room(20, false);
    const actual = painter.enoughPaint(roomToPaint);
    assert.strictEqual(actual, true);
  });

  it("Should be able to paint room", function () {
    painter.addCanToStock();
    painter.addCanToStock();
    roomToPaint = new Room(25, false);
    painter.paintRoom(roomToPaint);

    const actual1 = roomToPaint.painted;
    assert.strictEqual(actual1, true);

    const actual2 = painter.stock;
    assert.strictEqual(actual2, 1);
  });
});
