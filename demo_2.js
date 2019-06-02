//TODO: fix the logic
//math reference https://www.jstor.org/stable/2691523?seq=1#page_scan_tab_contents
function envelopes(envelopeA, envelopeB) {
    let a = envelopeA[0],
        b = envelopeA[1],
        p = envelopeB[0],
        q = envelopeB[1],
        envelopeASquare = a*b,
        envelopeBSquare = p*q;
    
    if ((p <= a && q <= b) || (p > a && b >= (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a)) / (p*p+q*q))) {
        return envelopeA;
    }
    if ((q <= a && p <= b) || (q > a && b >= (2*q*p*a + (q*q-p*p)*Math.sqrt(q*q+p*p-a*a)) / (q*q+p*p))) {
        return envelopeA;
    }
    if ((a <= p && b <= q) || (a > p && q >= (2*a*b*p + (a*b-b*b)*Math.sqrt(a*a+b*b-p*p)) / (a*a+b*b))) {
        return envelopeB;
    }
    if ((b <= p && a <= q) || (b > p && q >= (2*b*a*p + (b*a-a*a)*Math.sqrt(b*b+a*a-p*p)) / (a*a+b*b))) {
        return envelopeB;
    }
    return 0;
}
envelopes([2,2],[2,4]);
envelopes([12,2],[2,4]);
envelopes([12,1],[2,4]);
