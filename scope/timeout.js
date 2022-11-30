const assert = require("node:assert");

function clickEvent(i) {
  return i;
}

for (var i = 0; i < 5; i++) {
  setTimeout((i) => assert(clickEvent(i), 10), 200);
}
