function splitAndDelimit(text,limit,delimiter){
  let output=[];
  let textArray=text.split("");
textArray.forEach((e,index)=>{
  if((index+1)%limit!==0){
    output.push(e);
  }
  else{
    output.push(e);
    if(index!==textArray.length-1){
      output.push(delimiter);
    }
   }
})
return output.join('');
}
console.log(splitAndDelimit("bellow", 2, "&"));
console.log(splitAndDelimit("magnify", 3, ":"));
console.log(splitAndDelimit("poisonous", 2, "~"));