
// Write a function called superbowlWin() in index.js that:
//  * Receives 1 argument, an Array of JavaScript Objects 
// * Each object has two properties: year and result
//  * Use find() to test each Object to see if the result is "W" — a win!
//  *  * superbowlWin() should return the year when the win occurred (if it occurred at all!). 
// If no win is found, it should return, sadly, undefined

// roommates.find( function(s) { return s === "winston" })
//  
function superbowlWin(obj){
    //with the {} around 'result' this isolates the result attribute inside of the object being
    //called in the .find iteration
    const wonGame = obj.find(({result}) => result === "W")
    // now, here, without the {} it makes 'result' a simple param, returning the entire object
    
    // const wonGame = obj.find((result) => console.log(result))
    //the lab wanted superbowlWin to return undefined if the record has no win objects, so 
    // this if/else is saying "if wonGame is true, return the year. else return undefined"
    if(wonGame){
        return wonGame['year']
    }
    else{
        return undefined 
    }
}