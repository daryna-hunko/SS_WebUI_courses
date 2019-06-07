//TODO: fix the logic
//math reference https://www.jstor.org/stable/2691523?seq=1#page_scan_tab_contents
function envelopes(envelopeA, envelopeB) {
    let a,
        b,
        p,
        q;
    
    if (envelopeA[0] >= envelopeA[1]) {
        a = envelopeA[0]; 
        b = envelopeA[1];
    } else {
        a = envelopeA[1]; 
        b = envelopeA[0];
    }
    if (envelopeB[0] >= envelopeB[1]) {
        p = envelopeB[0]; 
        q = envelopeB[1];
    } else {
        p = envelopeB[1]; 
        q = envelopeB[0];
    }
    if ((p <= a && q <= b) || (p > a && b >= (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a)) / (p*p+q*q))) {
        return envelopeA;
    }
    if ((a <= p && b <= q) || (a > p && q >= (2*a*b*p + (a*b-b*b)*Math.sqrt(a*a+b*b-p*p)) / (a*a+b*b))) {
        return envelopeB;
    }
    return 0;
}
envelopes([2,2], [2,4]);
envelopes([12,2], [2,4]);
envelopes([12,1], [2,4]);
