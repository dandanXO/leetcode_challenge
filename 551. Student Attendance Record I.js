/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let mapS = {};
  let c = 1;
  let ans = true;
  mapS[s.split("")[0]] = 1;
  for (let i = 1; i < s.split("").length; i++) {
    if (!mapS[s.split("")[i]]) {
      mapS[s.split("")[i]] = 0;
    }
    mapS[s.split("")[i]]++;
    if (s.split("")[i - 1] === "L" && s.split("")[i] === "L") {
      c++;
    } else {
      c = 1;
    }
    if (c > 2) {
      ans = false;
    }
  }
  if (mapS["A"] > 1) {
    ans = false;
  }
  return ans;
};
