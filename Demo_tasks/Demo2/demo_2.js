//TODO: input is Object O_o
//math reference https://www.jstor.org/stable/2691523?seq=1#page_scan_tab_contents
function envelopes(envelopeA, envelopeB) {
let error = '',
    result = 0;

  error = checkInput(envelopeA, envelopeB, error);
  if (Object.keys(error).length == 0) {

    let a = Math.max(envelopeA[0], envelopeA[1]),
        b = Math.min(envelopeA[0], envelopeA[1]),
        p = Math.max(envelopeB[0], envelopeB[1]),
        q = Math.min(envelopeB[0], envelopeB[1]);

    let squareA = (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a)) / (p*p+q*q);

    let squareB = (2*a*b*p + (a*a-b*b)*Math.sqrt(a*a+b*b-p*p)) / (a*a+b*b);

    if ((p <= a && q <= b) || (p > a && b >= squareA)) {
        result = envelopeB;
    }
    if ((a <= p && b <= q) || (a > p && q >= squareB)) {
        result = envelopeA;
    }
  } else {
      result = error;
  }

  return result;
}

function checkInput(envelopeA, envelopeB, error) {
    if (!Array.isArray(envelopeA) || !Array.isArray(envelopeB)) {
        error = {status: 'failed', reason: 'wrong input format'};
    }
    if (envelopeA.length < 2  || envelopeB.length < 2 || envelopeA == undefined || envelopeB == undefined) {
        error = {status: 'failed', reason: 'not all parameters are present'};
    }
    if (!isFinite(envelopeA[0]) || !isFinite(envelopeA[1]) || !isFinite(envelopeB[0]) || !isFinite(envelopeB[0])) {
        error = {status: 'failed', reason: 'some of paramerers is not correct'};
    }
    return error;
}
console.log(envelopes([2,2], [2,4]));
console.log(envelopes([12,2], [2,4]));
console.log(envelopes([12,1], [2,4]));
//console.log(envelopes(12, [2,4]));
//console.log(envelopes(['xx',2], [2,4]));
//console.log(envelopes([2,4],[]));
