const ing= require('readline-sync');
const figlet1 = require('figlet');

let word_password=[],word_letters=null,word=null,finish_chack=false,i=10;

function letter_chack(gt) {
    if ( (gt.charCodeAt(0) >= 65 && gt.charCodeAt(0) <= 90 && gt.length==1) || (gt.charCodeAt(0) >= 97 && gt.charCodeAt(0) <= 122 && gt.length==1) ) 
    {
    return false
        }
        return true
    }
    
    function start_game() {
    let words =  ['algorithm','argument','arrays','python','react','developer','loops','function','android','coding']
         word = words[Math.floor(Math.random() * words.length)];
        word_letters=word.split('');
        word_password.length=word_letters.length;
        word_password.fill('*');
        }

function chack_win(lg){
    let lf=0
    for (let f = 0; f < lg.length; f++) {
        if(lg[f]=='*'){
            lf++;
         }
        }
    if(lf==0){
        finish_chack=true;
    }
    }
     start_game();
     console.log(figlet1.textSync('hangman!', {
        font: 'ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 95,
        whitespaceBreak: true
    }));
    
    while(finish_chack==false){
        console.log('You have '+i+ ' guesses \nThe word is: \n '+word_password.join('')+'\nWhat is your guess?');
        let letter = ing.prompt();
        if (letter_chack(letter)==true){
            i=i
        console.log('Please enter only one character');
        }        
        else
         {
        for (let k = 0; k < word_letters.length; k++)
         {
            if ((letter.toUpperCase()==word_letters[k]) || (letter.toLowerCase()==word_letters[k]))
            {
                word_password.splice(k,1,word_letters[k]);
                i++
             }                       
         }
         i--;
        chack_win(word_password);
        if(finish_chack==true){
           console.log("Great you guessed it" );
        }
        if(i==0){
            console.log("Sorry but you didnt guessed it.\nHere is the word-" + word);
            break;
        }
    }
}