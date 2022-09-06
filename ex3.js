const biggestNumber = (a,b,c)=>{
    //Your Code Here :-)
        if (a > b && a > c)
            return a;
        if (b > a && b > c)
            return b;
        else
            return c;        
     }