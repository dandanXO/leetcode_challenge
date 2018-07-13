/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var line = 1
    var pos = 0
    var Str = S.split("")
    var A = 'a'.charCodeAt()
    for(var i = 0 ; i<Str.length;i++){
        var long = widths[Str[i].charCodeAt()-A]
        pos = pos + long
        if(pos > 100){
            line++
            pos = long
        }
        
        
    }
    return([line,pos])
};

// Thinking

/*
 * Split all S String get a char then
 * use for loop ask all char and search how many times do this char need to type
 * last use if pos bigger then 100 add a line and Extra number give to next line and go next for loop
 */