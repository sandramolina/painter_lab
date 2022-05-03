const Paint = function (litres, empty) {
  this.litres = litres;
  this.empty = empty;
};

Paint.prototype.toEmpty = function () {
  this.empty = true;
};

module.exports = Paint;
