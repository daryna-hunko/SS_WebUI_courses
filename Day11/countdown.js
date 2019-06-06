function countdown(ms) {
  let result = '00:00:00',
      hrs = '00',
      mnts = '00',
      scnds = '00',
      tempCountdown;
      (ms < 0) ? tempCountdown = -ms : tempCountdown = ms;

      if (tempCountdown >= 3600000) {
        hrs = tempCountdown/3600000;
        hrs = hrs.toFixed(0);
        if (hrs < 10 && hrs > 0) {
          hrs = ('0' + hrs);
        }
      }

      tempCountdown = tempCountdown - hrs*3600000;

      if (tempCountdown >= 60000) {
        mnts = tempCountdown/60000;
        mnts = mnts.toFixed(0);
        if (mnts < 10 && mnts > 0) {
          mnts = ('0' + mnts);
        }
      }

      tempCountdown = tempCountdown - mnts*60000;

      if (tempCountdown >= 1000) {
        scnds = tempCountdown/1000;
        scnds = scnds.toFixed(0);
        if (scnds < 10 && scnds > 0) {
          scnds = ('0' + scnds);
        }
      }

    (ms < 0) ?
      result = '-' + hrs + ':' + mnts + ':' + scnds
      :
      result = '+' + hrs + ':' + mnts + ':' + scnds;

    return result;

}

console.log(countdown(-154800000));  // return  '-43:00:00'
console.log(countdown(0));          // return  '+00:00:00'
console.log(countdown(61000));       // return  '+00:01:01'
console.log(countdown(360000000)); // return '+100:00:00'
