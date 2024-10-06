//var tests = [["Музыка на 23.09.2024",["Когда состоялось первое балетное представление в России?","Когда была основана первая балетная школа?","Когда и где появилась первая полноценная балетная труппа?","Когда в Российской империи появилась первая балетная школа?","Назовите великих танцоров и хореографов","Назовите знаменитые русские балеты"],["В конце 17 века","В 1734 году","В 1740-вых годах в Санкт-Петербурге","В 1738 году","Мая Плесецкая, Наталья Бессмертнова, Екатерина Максимова, Владимир Васильев, Галина Уланова, Николай Цискаридзе","Лебединое озеро, Спящая красавица, Щелкунчик, Ромео и Джульетта, Раймонда"]]];
var tests = [["География на 26.09.2024",["Что сделали новгородцы и поморы?","Чем была Мангазея?","Как называли Мангазею?","Что и когда сделал Ермак?","Что и когда сделал Иван Москвитин?","Что и когда сделал Василий Петров?","Что и когда сделали Дежнёв и Попов?","Что и когда сделал Ерофей Хабаров?","Что и когда сделал Владимир Атласов?","Что и когда сделал Иван Камчатый (Камчатой)"],["В 11 веке открыли Кельтский п-ов, Новую Землю, побережье Белого и Баренцева морей, организовали Мангазейский острог","Главным торговым центром Сибири","Златокипящий город","В 1579 году (или 1581, в разных источниках по разному) вышел к Иртышу и присоединил Сибирское ханство","В 1639 году открыл Сахалинский залив, основал поселения и порт Охотск","В 1644 году разведал путь из реки Лены в реку Зея и прошёл по Амуру","В 1648 году прошли проливом между Азией и Америкой","В 1650 году основал первые русские укрепления по берегам Амура","В 1697 году основал экспедицию на Камчатку, Курильские острова, первым из россиян достиг Тихого океана","В середине 17 века открыл Камчатку"]],["Биология - Ткани",["Функции покровной ткани","Местонахождение покровной ткани","Особенности покровной ткани","Функции железистой ткани","Местонахождение железистой ткани","Особенности железистой ткани","Функции гладкой мышечной ткани","Местонахождение гладкой мышечной ткани","Особенности гладкой мышечной ткани","Функции поперечно-полосатой мышечной ткани","Местонахождение поперечно-полосатой мышечной ткани","Особенности поперечно-полосатой мышечной ткани","Функции соединительной ткани","Местонахождение соединительной ткани","Особенности соединительной ткани","Функции нервной ткани","Местонахождение нервной ткани","Особенности нервной ткани","Нейрон - это","Аксон - это","Дендрит - это"],["Защита, обмен веществ, регенерация","Кожные покровы, слизистые оболочки, сосуды, органы","Мелкие клетки, постоянно делятся, хорошо регенерируют, находятся близко друг к другу","Секреторная","Железы в коже, слюнные железы, железы внутренней секреции","Секреторные клетки - выделение секрета (вещества для регуляции жизнедеятельности). Экзокринные - выделение секрета наружу. Эндокринные - в кровь.","Сокращение","Желудочно-кишечный тракт, лимфотические сосуды, мочевыводящие пути.","Сокращается ритмично, медленно, способна развивать большую силу без больших затрат энергии, является непроизвольной","Сокращение","Миокард сердца","Автоматия - сокращение под действием возбуждения в клетках. Является непроизвольной. Состоит из многоядерных кардиомиоцитов, имеящих поперечную исчерченность цитоплазмы","Терморегуляция, защита, трофическая функция, опорная функция","Кровеносные лимфотические сосуды, кости, хрящи, связки и сухожилия, жировая ткань","Много межклеточного вещества, волокнистая структура, клетки расположены рыхло (подвижны)","Связь органов с окружающей средой,  взаимосвязь органов и их систем","Везде","Состоит из нейронов, дендритов, аксонов","Нервная клетка, структурная единица нервной системы","Отросток, передающий сигнал от тела нейрона к другим нейронам","Отросток, воспринимающий раздражение"]]]
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
	testsDiv.innerHTML += `<button class="ui" style="width: 250px; height: 100px; vertical-align: top;" onclick="currentTest = ${i};document.body.style.overflow = 'hidden';mainDiv.style.display = 'block';testsDiv.style.display = 'none';restTest = [tests[currentTest], [], []];for (var i = 0; i < tests[currentTest][1].length; i++) {	restTest[1].push(tests[currentTest][1][i]);	restTest[2].push(tests[currentTest][2][i]);	console.log(tests[currentTest][i]);}newQuestion();">${tests[i][0]}</button>`;
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
