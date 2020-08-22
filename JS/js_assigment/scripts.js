

  console.log("question no :1")
  function render(x){
    for(let i=x; i>0; i--){
      let j=i, str = "*", string = "";
      while(j>0){      
        string+=str;
        j--;
      }
      console.log(string);
    }
  }
  render(5);



  console.log("question no:2")
  function censor(str) {
    let words =str.split(" ");
    for( let i=0; i<words.length; i++){
      if(words[i].length>4){
        words[i]='*'.repeat(words[i].length);
      }
    }
    
    return  words.join(' ');
  }
  console.log (censor(" This is coding"));


    
    
    

   console.log("........question 3........")
    function toArray(obj){
      let keys= Object.keys(obj);
      let len= keys.length;
      let arr = [];
    for( let i=0; i<len; i++) {
      arr.push([ keys[i],  obj[keys[i]] ])

    }
    return arr;
  }
  console.log(toArray({a:10,b:"apple"}));


  console.log(".............question 4.........")
  function identicalFilter(arr){
    let k=0;
    let identical =[];
    for(let i=0; i<arr.length; i++){
      let repetation= new Set(arr[i]);
      if(repetation.size===1){
        identical[k++] = arr[i];
      }
    }
    return identical;
  }
  console.log(identicalFilter(["888", "123","999"]));



  console.log(".......question 5...........")
  function keysAndValues(data){
    var keys = Object.keys(data),
        values = keys.map(function (key) {
            return data[key];
        });
    
    return [keys, values]; 
}

console.log(keysAndValues({k: 11, l: 12, m: 13}));
      
      