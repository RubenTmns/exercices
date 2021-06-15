// Complete and add needed car properties:
const car = {
  speed: 0,
  distanceminutes: 0,

  start: function () {
    this.speed = 0;
    this.distanceminutes = 0;

    return this;
  },

  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;

    return this;
  },

  drive: function (minutes) {
    this.distanceminutes += (this.speed * minutes) / 60;
    return this;
  },

  showDistance: function () {
    console.log(`${this.distanceminutes} Km`);
    return this;
  },
};

module.exports = car;
