const minNumberInArr = (arr)=>{ 
      
    var al = arr.length;
     min = arr[al-1];
     while (al--){
         if(arr[al] < min){
             min = arr[al]
         }
     }
     return min;
 }