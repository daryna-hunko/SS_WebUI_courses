var board = [[0,0,0,2,2,0],
            [0,3,0,0,0,0],
            [0,3,0,1,0,0],
            [0,3,0,1,0,0]];
var attacks = [[2, 1], [1, 3], [4, 2]];

function damagedOrSunk(board, attacks) {
    let sunk = 0,
        damaged = 0,
        notTouched = 3,
        points = 0,
        boats = [2,3,4],
        result;
    // change coordinates to be normal JS-like
    let reversedBoard = board.reverse();
    let reversedAttacks = [];
    attacks.forEach(function(item, i) {
        item[0] -= 1;
        item[1] -= 1;
        attacks[i] = attacks[i].reverse();
        reversedAttacks.push(attacks[i]);
    });
    // gets array of the attacked fields
    let attackedFields = [];
    reversedAttacks.forEach(function(item) {
        attackedFields.push(board[item[0]][item[1]]);
    });

    fireBoats(attackedFields, boats);
    
    //checkPoints(boats, points, damaged, sunk, notTouched, attackedFields);
    
    // FIXIT: checkPoints doesn\'t work as function - only directly here
    if (boats[0] === 1) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    if (boats[1] === 1 || boats[1] === 2) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    if (boats[2] === 1 || boats[2] === 2 || boats[2] === 3) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    for (let i = 0; i < boats.length; i++) {
        if (boats[i] === 0) {
            points = points + 1;
            sunk = sunk + 1;
            notTouched = notTouched - 1;
        }
    }
    for (let i = 0; i < attackedFields.length; i++) {
        if (attackedFields[i] == 0) {
            points = points - 1;
        }
    }
    
    result = '\{ sunk: ' + sunk + ', damaged: ' + damaged + ', notTouched: ' + notTouched + ', points: ' + points + ' \}';
    return result;
}

function fireBoats(attackedFields, boats) {
    for (let i = 0; i < attackedFields.length; i++) {
        if (attackedFields[i] == 1) {
            boats[0] -= 1;
        }
        if (attackedFields[i] == 2) {
            boats[1] -= 1;
        }
        if (attackedFields[i] == 3) {
            boats[2] -= 1;
        }
    }
}
function checkPoints(boats, points, damaged, sunk, notTouched, attackedFields) {
    if (boats[0] === 1) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    if (boats[1] === 1 || boats[1] === 2) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    if (boats[2] === 1 || boats[2] === 2 || boats[2] === 3) {
        points = points + 0.5;
        damaged = damaged + 1;
        notTouched = notTouched - 1;
    }
    for (let i = 0; i < boats.length; i++) {
        if (boats[i] === 0) {
            points = points + 1;
            sunk = sunk + 1;
            notTouched = notTouched - 1;
        }
    }
    for (let i = 0; i < attackedFields.length; i++) {
        if (attackedFields[i] == 0) {
            points = points - 1;
        }
    }
}

console.log(damagedOrSunk(board, attacks));
