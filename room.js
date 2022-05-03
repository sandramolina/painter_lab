const Room = function (area, painted) {
  this.area = area;
  this.painted = painted;
};

Room.prototype.toPaint = function () {
  this.painted = true;
};

module.exports = Room;
