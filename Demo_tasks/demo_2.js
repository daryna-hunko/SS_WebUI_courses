//TODO: check the input
//math reference https://www.jstor.org/stable/2691523?seq=1#page_scan_tab_contents
function envelopes(envelopeA, envelopeB) {
    let a = Math.max(envelopeA[0], envelopeA[1]),
        b = Math.min(envelopeA[0], envelopeA[1]),
        p = Math.max(envelopeB[0], envelopeB[1]),
        q = Math.min(envelopeB[0], envelopeB[1]);

    let squareA = (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a)) / (p*p+q*q);

    let squareB = (2*a*b*p + (a*a-b*b)*Math.sqrt(a*a+b*b-p*p)) / (a*a+b*b);
        console.log(squareA, squareB);


    if ((p <= a && q <= b) || (p > a && b >= squareA)) {
        return envelopeA;
    }
    if ((a <= p && b <= q) || (a > p && q >= squareB)) {
        return envelopeB;
    }
    return 0;
}
console.log(envelopes([2,2], [2,4]));
console.log(envelopes([12,2], [2,4]));
console.log(envelopes([12,1], [2,4]));
