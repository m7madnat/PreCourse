const numFactorial = (num)=>{ 
    //Your Code Here :-)
     let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact
    }