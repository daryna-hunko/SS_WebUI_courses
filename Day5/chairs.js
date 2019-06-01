// FIX - undefined for available chairs > 9
function meeting(rooms, chairsNeeded) {
  if (chairsNeeded === 0) {
    return ('Game On\!');
  }
  let result = [];
  let chairsAvailable = rooms.map(function(item, i, rooms) {
    return Math.abs(rooms[i][1] - rooms[i][0].length)
  });
  for (let i = 0; i < chairsAvailable.length; i++) {
    result.push(chairsAvailable[i]);
    chairsNeeded -= chairsAvailable[i];
    if (chairsNeeded === 0) {
      return result;
    }
  }
  if (chairsNeeded > 0) {
    return ('Not enough\!');
  }
}
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 8]], 0));
console.log(meeting([['XXX', 3], ['XXXXX', 6]], 4));
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));
