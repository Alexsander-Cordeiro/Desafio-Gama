function dicionario(numero){
	var dict = {
  "0": " ",
  "2": "A",
  "22": "B",
  "222": "C",
  "3": "D",
  "33": "E",
  "333": "F",
  "4": "G",
  "44": "H",
  "444": "I",
  "5": "J",
  "55": "K",
  "555": "L",
  "6":"M",
  "66": "N",
  "666": "O",
  "7": "P",
  "77": "Q",
  "777": "R",
  "7777": "S",
  "8": "T",
  "88": "U",
  "888":"V",
  "9": "W",
  "99": "X",
  "999": "Y",
  "9999": "Z"
  }
  if (numero in dict){
    var resp =  dict[numero];
    return resp;
  }
 }

var b = true;
var resp = "";

while (b){
  if('VALOR DO FRONT' == 1){
    b = false;
  }
  else{
    resp += dicionario('VALOR DO FRONT');
    document.getElementById("mytext").value = resp;
    
  };
}
console.log(resp);

/*$(function() {
	var pause=false, lPress = false, next=false;
	var pauseTime = 600, longTime = 700;
	var lPressTimeout, pauseTimeout;
	var lastBtnPressed;
	var count=-1;
	var numPads = {
		0:[],
		1:['.',',','!'],
		2:['a','b','c'],
		3:['d','e','f'],
		4:['g','h','i'],
		5:['j','k','l'],
		6:['m','n','o'],
		7:['p','q','r','s'],
		8:['t','u','v'],
		9:['w','x','y','z'],
		'*':[],
		'#':[]
	}

	$('#longpress').on('keyup mouseup',function(){
		console.log($(this).val());
		longTime = setTime($(this).val());
	})
	$('#pause').on('keyup mouseup',function(){
		pauseTime = setTime($(this).val());
	})
	
	$("#phone button.key").on('mousedown', function(event) {
		event.preventDefault();
		console.log('lPress: '+lPress);
		lPressTimeout = window.setTimeout(function(){
// 			This timeout is a check for long press;
			lPress = true;
			next = true;
		},longTime);

		if(pauseTimeout){
			window.clearTimeout(pauseTimeout);
		}

		if (pause) {
			count = -1;
		}

		var button_pressed = $(event.currentTarget).data("value");
	})
	$("#phone button.key").on('mouseup', function(event) {
		event.preventDefault();
		count++;
		window.clearTimeout(lPressTimeout);
		pauseTimeout = window.setTimeout(function(){
// 			This timeout is a check for small pauses for starting the letter from start;
			pause = true;
			next = true;
		},pauseTime);

		var button_pressed = $(event.currentTarget).data("value");
		$("#result").val(t9($("#result").val(), button_pressed));
		lastBtnPressed = button_pressed;
	})

	function t9(text, button_pressed) {
	
		var mText = text;
		var letter;
		if (lPress) {
			count = -1;
			letter = button_pressed;
		}else{
			if(lastBtnPressed){
				count = lastBtnPressed === button_pressed?count: 0;
			}
			if(numPads[button_pressed].length > 0){
				count = count>=numPads[button_pressed].length?0:count;
				letter = numPads[button_pressed][count];
			}else{
				letter = button_pressed;
			}
		}
		letter = ''+letter;
		mText += letter;

		if(!next && lastBtnPressed === button_pressed && !letter.match(/[#\*0]/)){
			mText = mText.substr(0, mText.length-2) + letter;
		}

		if (!lPress) {
			next = false;
		}
		pause = false;
		lPress = false;

		return mText;
	}

	var setTime = function (time) {
		var temp = time;
		return temp > 100? temp: 100;
	}
});*/


/*