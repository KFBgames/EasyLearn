var tests = [["Биология - Учёные",["*img*гиппократ.jpeg","*img*клавдий_гален.webp","*img*абу_али_ибн_сина.jpg","*img*уильям гарвей.webp","*img*пирогов.webp","*img*сеченов.jpeg","*img*пастер.jpg","*img*мечников.jpg","*img*карл_линней.jpg","*img*бюффон.jpg","*img*ламарк.jpg","*img*дарвин.jpg"],["Гиппократ (ок. 470 - ок. 370 до н.э.) - создал учение о четырёх возможных типах телосложения и темперамента, собрал имеющиеся знания о строении человека","Клавдий Гален (ок. 130 - ок. 220) - написал 83 важных труда по анатомии и медицине, стал основателем фармакологии","Абу Али ибн Сина (980 - 1037) - создал важные труды по медицине","Уильям Гарвей (1578 - 1657) - первый физиолог, доказал, что кровь движется по двум замкнутым кругам, а центр - сердце","Пирогов (1810 - 1881) - впервые применил эфир для наркоза, йод и спирт - для обработки ран, гипсовую повязку при переломах","Сеченов (1829 - 1905) - создал естественно-научное направление в физиологии и работу \"Рефлексы головного мозга\"","Луи Пастер (1822 - 1895) - создание эффективных вакцин","Мечников (1845 - 1916) - создание эффективных вакцин","Карл Линней (1707 - 1778) - отводит человеку место в классификации рядом с человекоподобными обезьянами","Жорж-Луи де Бюффон (1707 - 1778) - отстаивал идею об изменяемости видов под влиянием условий среды","Жан-Батист Ламарк (1744 - 1829) - первая эволюционная теория","Чарльз Дарвин (1809 - 1882) - обосновал положение об общем предке людей и обезьян"]]];
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
	final.style.width = Math.floor(window.innerWidth) + "px";
	final.style.height = Math.floor(window.innerHeight) + "px";
	final.style.position = "absolute";
	//checkTable.style.width = Math.floor(window.innerWidth) + "px";
	//checkTable.style.height = Math.floor(window.innerHeight) + "px";
	//checkTable.style.position = "absolute";
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
var prevQuestion = -1; // чтобы избежать повторений
document.body.style.overflow = "visible";
var restTest = [];
var answeredOneAttempt = []; // ответил ли с первой попытки
var noPressed = 0;
testsDiv.innerHTML += `<button class="ui" style="width: 250px; height: 100px; vertical-align: top; background: #ecac7d;" onclick="window.location.href = 'https://kfbgames.github.io/EasyLearn-How-to-use/';">Инструкция</button>`;
for (var i = 0; i < tests.length; i++) {
	testsDiv.innerHTML += `<button class="ui" style="width: 250px; height: 100px; vertical-align: top;" oncontextmenu="check(${i}); return false;" onclick="start(${i})">${tests[i][0]}</button>`;
}
function check(index) {
	mainDiv.style.display = 'none';
	testsDiv.style.display = 'none';
	checkTable.style.display = 'block';
	checkTable.innerHTML = "";
	for (var i = 0; i < tests[index][1].length; i++) {
		var style1 = "background: #fff6d3; width: 50%; border-radius: 5px;";
		var style2 = "width: 50%;";
		if (i % 2 == 0) {
			[style1, style2] = [style2, style1];
		}
		var question = tests[index][1][i];
		if (question.startsWith("*img*")) {
			style1 += "height: 300px;";
			style2 += "height: 300px;";
			question = `<img style="max-width: 100%; max-height: 100%;" src="images/${tests[index][0].replaceAll(" ", "_").replaceAll("/", "")}/${tests[index][1][i].slice(5)}">`;
		}
		checkTable.innerHTML += `<tr><td style="${style1}">${question}</td><td style="${style2}">${tests[index][2][i]}</td><tr>`;
	}
}
function start(index) {
	currentTest = index;
	document.body.style.overflow = 'hidden';
	mainDiv.style.display = 'block';
	testsDiv.style.display = 'none';
	checkTable.style.display = 'none';
	noPressed = 0;
	answeredOneAttempt = [];
	restTest = [tests[currentTest], [], []];
	for (var i = 0; i < tests[currentTest][1].length; i++) {
		restTest[1].push(tests[currentTest][1][i]);
		restTest[2].push(tests[currentTest][2][i]);
	}
	newQuestion();
}
function newQuestion() {
	showAnswer.innerHTML = "Показать ответ";
	progress.style.width = Math.floor(window.innerWidth * (1 - restTest[1].length / tests[currentTest][1].length)) + "px";
	//console.log(restTest[1].length / tests[currentTest][1].length);
	if (restTest[1].length == 0) {
		document.body.style.overflow = 'visible';
		mainDiv.style.display = 'none';
		final.style.display = 'block';
		checkTable.style.display = 'none';
		var answeredOneAttemptCount = 0;
		for (var i = 0; i < answeredOneAttempt.length; i++) {
			answeredOneAttempt[i] == true && answeredOneAttemptCount++;
		}
		final.innerHTML = "";
		if (answeredOneAttemptCount == tests[currentTest][1].length) {
			final.innerHTML = `Вы сёмга<br>`;
		}
		final.innerHTML += `Вы ответили с первой попытки на ${answeredOneAttemptCount}/${tests[currentTest][1].length} вопросов<br>Вы ошиблись ${noPressed} раз`;
		return;
	}
	if (prevQuestion == -1 || restTest[1].length == 1) {
		currentQuestion = Math.floor(Math.random() * restTest[1].length);
	} else {
		currentQuestion = Math.floor(Math.random() * (restTest[1].length - 1));
		if (currentQuestion >= prevQuestion) {
			currentQuestion++;
		}
	}
	prevQuestion = currentQuestion;
	if (restTest[1][currentQuestion].startsWith("*img*")) {
		var codeTestName = tests[currentTest][0].replaceAll(" ", "_");
		codeTestName = codeTestName.replaceAll("/", "");
		questionDiv.innerHTML = `<img style="max-width: 100%; max-height: 100%;" src="images/${codeTestName}/${restTest[1][currentQuestion].slice(5)}">`;
	} else {
		questionDiv.innerHTML = restTest[1][currentQuestion];
	}
	showAnswer.onclick = function() {
		if (showAnswer.innerHTML == restTest[2][currentQuestion]) {
			showAnswer.innerHTML = "Показать ответ";
		} else {
			showAnswer.innerHTML = restTest[2][currentQuestion];
		}
	}
}
no.onclick = function() {
	noPressed++;
	answeredOneAttempt[currentQuestion] = false;
	newQuestion();
}
yes.onclick = function() {
	if (answeredOneAttempt[tests[currentTest][1].indexOf(restTest[1][currentQuestion])] == undefined) {
		answeredOneAttempt[tests[currentTest][1].indexOf(restTest[1][currentQuestion])] = true;
	}
	//console.log(currentQuestion, );
	restTest[1].splice(currentQuestion, 1);
	restTest[2].splice(currentQuestion, 1);
	newQuestion();
}
final.onclick = function() {
	testsDiv.style.display = "block";
	final.style.display = 'none';
	mainDiv.style.display = "none";
	checkTable.style.display = 'none';
	return false;
}
questionDiv.oncontextmenu = final.onclick;
checkTable.oncontextmenu = function() {
	document.body.style.overflow = 'visible';
	mainDiv.style.display = 'none';
	testsDiv.style.display = 'block';
	checkTable.style.display = 'none';
	return false;
}
