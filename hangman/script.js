//tittle
var title=document.createElement("div");
title.style.textAlign="center";
title.classList="tittle";
title.style.position="absolute";
title.style.color="#fff";
document.body.appendChild(title);
//heading
var heading=document.createElement("h1");
heading.innerHTML="HangMan";
title.appendChild(heading);

//subtitle
var subheading=document.createElement("p");
subheading.innerHTML="Find the hidden word-Enter a letter";
title.appendChild(subheading);


var words = ["Neha" , "Elisha" , "Nepal" , "seven","corona","food","code"]; //already words ko array chha
var randomWord = words[Math.floor(Math.random() * words.length)]; //tyo array bata random ekota name pick garyo
console.log(randomWord);
var wordIntoLetters = randomWord.split('');

var Count = function() {
  for( var i=0; i < randomWord.length; i++ ) {
      var newDiv = document.createElement('div');
      newDiv.classList.add('letter');
      var divisions = document.getElementById('letter-container');
      console.log(newDiv,divisions);
      divisions.appendChild(newDiv);
  }
}
Count();





