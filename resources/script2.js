function Home() {
	document.getElementById("menuoptions").style.display= "block";
	document.getElementById("authentification").style.display = "none";
	document.getElementById("d1").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.paddingTop = "24vh";
	document.getElementById("nimHome").style.display = "block";
	document.getElementById("home2").style.display = "none";
	document.getElementById("home2").style.display = "none";
	document.getElementById("setting").style.display= "none";
	document.getElementById("scores").style.display= "none";
	document.getElementById("helpB").style.display = "none";
	document.getElementById("body1").style.backgroundImage = "url('./resources/background_02.png')";
}

function GoToStuff() {
	document.getElementById("menuoptions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("home2").style.display = "block";
	document.getElementById("helpB").style.display = "list-item";
}

function BackFromBoard() {
	document.getElementById("home").style.display = "block";
	document.getElementById("home2").style.display = "none";
	document.getElementById("menuoptions").style.display= "block";
	document.getElementById("d1").style.display = "none";
	document.getElementById("helpB").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("setting").style.display = "none";
	document.getElementById("scores").style.display = "none";
	document.getElementById("body1").style.backgroundImage = "url('./resources/background_02.png')";
	if(online==1){
		online=0;
		leave();
	}
	else decrScore();
}


function Oneplayer(){
	GoToStuff();
	document.getElementById("d1").style.display = "list-item";
	document.getElementById("body1").style.backgroundImage = "url('./resources/background_01.png')";
}

function Settings(){
	GoToStuff();
	document.getElementById("setting").style.display = "block";
}

function Help(){
	GoToStuff();
	document.getElementById("instructions").style.display = "block";
}

function Scores() {
	var data = JSON.parse(localStorage.getItem("data"));
	for (var i = 0; i < 7; i++) {
		var num = data[0].com[i];
		var j = i + 4;
		document.getElementById("b" + j).innerHTML = num;
		var num2 = data[0].player[i];
		document.getElementById("u" + j).innerHTML = num2;
	}
	GoToStuff();
	document.getElementById("scores").style.display = "block";
}

function updateTextInput1(val) {
    document.getElementById('textInput1').value=val;
 }
 function updateTextInputj(val) {
     document.getElementById('textInputj').value=val;
  }
function updateTextInput2(val) {
    document.getElementById('textInput2').value=val;
 }
