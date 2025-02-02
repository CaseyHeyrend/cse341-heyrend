// Get A name
//const routeJoeHeyrend = (req, res) => {res.send("Joe Heyrend");};
//module.exports = {routeJoeHeyrend};
const routeJoeHeyrend = (req, res) => {
  res.send("Joe Heyrend");
};

const routeDougHeyrend = (req, res) => {
  res.send("Doug Heyrend");
};

const routeSamHeyrend = (req, res) => {
  res.send("Sam Heyrend");
};

module.exports = {
  routeJoeHeyrend,
  routeDougHeyrend,
  routeSamHeyrend,
};