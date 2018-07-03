/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var mordecode ={
    ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",
    }
   var moresWord= [].fill.call(new Array(words.length),"")
    
    words.forEach((e,i) => {
        var temp = []
        temp = e.split("")
        temp.forEach((f,j) => {
            moresWord[i] = moresWord[i]+getKeyByValue(mordecode,f)
        })
    })
    console.log(moresWord)
    let map = new Map();
    moresWord.forEach((el,ind) => {
       
          //console.log(number)
         if(map.has(el)){
           console.log(el+"testt?")
        }else{
            map.set(el,1)
             console.log(el+"testt")
           
        }

    })
      console.log(map)
   // console.log(parseInt(moresWord[0].charCodeAt(0)))
  return map.size

};
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}




//Thinking

/*
Prepare all Morse Code then change all word to morse code.
set into map if not exsit or if exist then plus one.
last return number map size this number of how many mores code combination. 
*/