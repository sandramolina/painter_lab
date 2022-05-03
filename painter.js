const Painter = function () {
  this.stock = 0;
};

Painter.prototype.addCanToStock = function () {
  this.stock += 1;
};

Painter.prototype.totalLitres = function () {
  let total_litres = this.stock * 25;
  return total_litres;
};

Painter.prototype.enoughPaint = function (room) {
  let total_litres = this.stock * 25;
  if (total_litres >= room.area) {
    return true;
  } else {
    return false;
  }
};

Painter.prototype.paintRoom = function (room) {
  if (this.enoughPaint(room)) {
    paintUsedCans = room.area / 25;
    this.stock -= paintUsedCans;
    room.toPaint();
  }
};
module.exports = Painter;
