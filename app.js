var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


// Chess Board

function onDragStart (source, piece, position, orientation) {
    console.log('Drag started:')
    console.log('Source: ' + source)
    console.log('Piece: ' + piece)
    console.log('Position: ' + Chessboard.objToFen(position))
    console.log('Orientation: ' + orientation)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  }

  function onDragMove (newLocation, oldLocation, source,
    piece, position, orientation) {
console.log('New location: ' + newLocation)
console.log('Old location: ' + oldLocation)
console.log('Source: ' + source)
console.log('Piece: ' + piece)
console.log('Position: ' + Chessboard.objToFen(position))
console.log('Orientation: ' + orientation)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}


var position = {
  h1: 'wK',
  g2: 'wR',
  h3: 'bK',
  e3: 'wK',
  f4: 'wP',
  e7: 'wB',
  h7: 'bR'

}

var config = {
    pieceTheme: './res/chessboard/img/chesspieces/wikipedia/{piece}.png',
    draggable: true,
    position: position,
    onDragStart: onDragStart,
    onDragMove: onDragMove,
   
   
  }
var board1 = Chessboard('board1', config);

