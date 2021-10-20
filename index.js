
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