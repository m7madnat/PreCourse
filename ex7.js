const primeNumberFromOneToN = (n)=>{

    if(n === 1){
return 0;
   }
   let count = 0;
   for(let i = 2; i < n; i++){
       if(i !== 2 && i % 2 == 0){
           continue;
       }

           if(isPrime(i)){
               count++;

           }

   }
   return count;
};

function isPrime(num) {
 var sqrtnum=Math.floor(Math.sqrt(num));
   var prime = num != 1;
   for(var i=2; i<sqrtnum+1; i++) { 
       if(num % i == 0) {
           prime = false;
           break;
       }
   }
   return prime;
}