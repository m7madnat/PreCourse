const divideOrHasSeven = (start,end)=>{ 
    var x = 0;
    for (i = start; i <= end; i++) {
        if (i%7 === 0 || i.toString().indexOf('7') >= 0) {
            x += 1;
        }
    }
    return x
}