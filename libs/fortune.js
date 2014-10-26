var fortuneCookies = [
  "Conquer your feats or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what oyu don't know.",
  "you will have a pleasant suprise.",
  "Whenever possible, keep it simple."
];

exports.getFortune = function () {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};

