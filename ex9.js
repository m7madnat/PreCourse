const longestWord = (sentence)=>{ 
    var str = sentence.split(" ");
     var longest = 0;
     var word = null;
     for (var i = 0; i < str.length; i++) {
         var checkedLetters = "";
         for (var j = 0; j < str[i].length; j++) {
             if (/[a-zA-Z]/.test(str[i][j])) {
                 checkedLetters += str[i][j];
             }
         if (longest < checkedLetters.length) {
             longest = checkedLetters.length;
             word = checkedLetters;
             }
         }
     }
     return word;
 }
 