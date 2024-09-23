var tests = [["Музыка на 23.09.2024",["Когда состоялось первое балетное представление в России?","Когда была основана первая балетная школа?","Когда и где появилась первая полноценная балетная труппа?","Когда в Российской империи появилась первая балетная школа?","Назовите великих танцоров и хореографов","Назовите знаменитые русские балеты"],["В конце 17 века","В 1734 году","В 1740-вых годах в Санкт-Петербурге","В 1738 году","Мая Плесецкая, Наталья Бессмертнова, Екатерина Максимова, Владимир Васильев, Галина Уланова, Николай Цискаридзе","Лебединое озеро, Спящая красавица, Щелкунчик, Ромео и Джульетта, Раймонда"]]];
window.onresize = function() {
	questionDiv.style.width = Math.floor(window.innerWidth * 0.5) + "px";
	questionDiv.style.height = Math.floor(window.innerHeight * 0.5) + "px";
	questionDiv.style.position = "absolute";
	showAnswer.style.width = Math.floor(window.innerWidth * 0.5) + "px";
	showAnswer.style.height = Math.floor(window.innerHeight * 0.5) + "px";
	showAnswer.style.left = Math.floor(window.innerWidth * 0.5) + "px";
	showAnswer.style.position = "absolute";
	yes.style.width = Math.floor(window.innerWidth * 0.5) + "px";
	yes.style.height = Math.floor(window.innerHeight * 0.45) + "px";
	yes.style.position = "absolute";
	yes.style.top = Math.floor(window.innerHeight * 0.5) + "px";
	no.style.width = Math.floor(window.innerWidth * 0.5) + "px";
	no.style.height = Math.floor(window.innerHeight * 0.45) + "px";
	no.style.position = "absolute";
	no.style.top = Math.floor(window.innerHeight * 0.5) + "px";
	no.style.left = Math.floor(window.innerWidth * 0.5) + "px";
	progress.style.width = Math.floor(window.innerWidth * 0.5) + "px";
	progress.style.height = Math.floor(window.innerWidth * 0.05) + "px";
	progress.style.position = "absolute";
	progress.style.top = Math.floor(window.innerHeight * 0.95) + "px";	
}
window.onresize();
var currentTest = 0;
/*var restTest = [tests[currentTest], [], []];
for (var i = 0; i < tests[currentTest][1].length; i++) {
	restTest[1].push(tests[currentTest][1][i]);
	restTest[2].push(tests[currentTest][2][i]);
	console.log(tests[0][i]);
}*/
//var restTest = ["name1",["q11","q12","q13"],["a11","a12","a13"]];
var currentQuestion = 0;
document.body.style.overflow = "visible";
var restTest = [];
for (var i = 0; i < tests.length; i++) {
	testsDiv.innerHTML += `<button class="ui" style="width: 250px; height: 100px;" onclick="currentTest = ${i};document.body.style.overflow = 'hidden';mainDiv.style.display = 'block';testsDiv.style.display = 'none';restTest = [tests[currentTest], [], []];for (var i = 0; i < tests[currentTest][1].length; i++) {	restTest[1].push(tests[currentTest][1][i]);	restTest[2].push(tests[currentTest][2][i]);	console.log(tests[currentTest][i]);}newQuestion();">${tests[i][0]}</button>`;
}
function newQuestion() {
	showAnswer.innerHTML = "Показать ответ";
	progress.style.width = Math.floor(window.innerWidth * (1 - restTest[1].length / tests[currentTest][1].length)) + "px";
	//console.log(restTest[1].length / tests[currentTest][1].length);
	if (restTest[1].length == 0) {
		document.body.style.overflow = 'visible';
		mainDiv.style.display = 'none';
		testsDiv.style.display = 'block';
	}
	currentQuestion = Math.floor(Math.random() * restTest[1].length);
	questionDiv.innerHTML = restTest[1][currentQuestion];
	showAnswer.onclick = function() {
		if (showAnswer.innerHTML == restTest[2][currentQuestion]) {
			showAnswer.innerHTML = "Показать ответ";
		} else {
			showAnswer.innerHTML = restTest[2][currentQuestion];
		}
	}
}
no.onclick = newQuestion;
yes.onclick = function() {
	restTest[1].splice(currentQuestion, 1);
	restTest[2].splice(currentQuestion, 1);
	newQuestion();
}
