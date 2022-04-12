/*1 - Создать на странице div, указать ему id, сделать ему такие стили,
чтоб он выглядел как черный квадрат 100х100 пх. Добавить на страницу кнопку,
по клику на эту кнопку блок должен исчезать. Исчезание нужно сделать всеми
тремя способами (отдельная кнопка под каждый способ):

1) CSS (display: none), т.е. просто навесить стиль на элемент
2) JS (удаление элемента)
3) CSS+JS (навешивать на элемент класс hidden,
а в CSS прописать такие стили чтоб они скрывали всё с классом hidden)*/

const square1 = document.getElementById("square-1");

document.getElementById("btn_1-1").onclick = function(){
    square1.style.display = "none";
    alert("Для обновления результата обнови страницу!!!");
}
document.getElementById("btn_2-1").onclick = function(){
    document.getElementById("all-1").removeChild(square1);
    alert("Для обновления результата обнови страницу!!!");
}
document.getElementById("btn_3-1").onclick = function(){
    square1.classList.add('hidden');
    alert("Для обновления результата обнови страницу!!!");
}


document.getElementById("description_hid-1").onclick = function(){
    const des1 = document.getElementById("description-1");
    if(des1.style.display == "none") {
        des1.style.display = "block";
    }
    else {
        des1.style.display = "none";
    }
}

/*2 - Сделать так, чтоб по клику на кнопку блок исчезал,
если он есть, и чтоб появлялся, если он был скрыт (способ CSS+JS)*/

document.getElementById("btn-2").onclick = function(){
    const square2 = document.getElementById("square-2");
    if(square2.style.display == "none") {
        square2.style.display = "block";
    }
    else {
        square2.style.display = "none";
    }
}

document.getElementById("description_hid-2").onclick = function(){
    const des2 = document.getElementById("description-2");
    if(des2.style.display == "none") {
        des2.style.display = "block";
    }
    else {
        des2.style.display = "none";
    }
}

/*3 - Сделать на странице 5 таких блоков,
дать им всем одинаковый класс, благодаря которому
они все станут выглядеть как черные квадраты.
Сделать так чтоб они все одновременно скрывались/появлялись
по нажатию на кнопку*/

document.getElementById("btn-3").onclick = function(){
    const squares3 = document.getElementById("all-3");
    if(squares3.style.display == "none") {
        squares3.style.display = "flex";
    }
    else {
        squares3.style.display = "none";
    }
}

document.getElementById("description_hid-3").onclick = function(){
    const des2 = document.getElementById("description-3");
    if(des2.style.display == "none") {
        des2.style.display = "block";
    }
    else {
        des2.style.display = "none";
    }
}

/*4 - Добавить на страницу инпут, в который можно ввести css selector
(query selector) и при нажатии на кнопку будут скрываться/появляться
те элементы, которые соответствуют этому селектору*/

document.getElementById('btn-4').addEventListener('click',function() {
    let selector4 = document.getElementById('input-4').value,
        validation4
    for(let i = 0; i < selector4.length; i++){
        if(selector4[i] === '.'){
            validation4 = document.querySelectorAll(selector4);
        }
        else {
            validation4 = document.querySelectorAll(selector4);
        }
    }
    validation4.forEach(item4 => {item4.classList.toggle('hidden')})
})

document.getElementById("description_hid-4").onclick = function(){
    const des4 = document.getElementById("description-4");
    if(des4.style.display == "none") {
        des4.style.display = "block";
    }
    else {
        des4.style.display = "none";
    }
}

/*5 - Добавить на страницу желтый квадрат, и сделать так
чтоб при нажатии на него в первый раз выводилась надпись
"Привет" (alert), а при втором нажатии этот квадрат пропадал.
(нужно менять функцию обработчик, удалять первую и ставить вторую)*/

const square5 = document.getElementById("square-5");
function fun5(){
    alert("HELLO...");
    square5.removeEventListener("click", fun5);
    square5.addEventListener("click", function(){
        square5.style.display = "none";
    })
}
square5.addEventListener("click", fun5);

document.getElementById("description_hid-5").onclick = function(){
    const des5 = document.getElementById("description-5");
    if(des5.style.display == "none") {
        des5.style.display = "block";
    }
    else {
        des5.style.display = "none";
    }
}

/*6 - Добавить на страницу красный
квадрат 50х50 пх, который будет появляться
как только человек наводит курсор на кнопку,
и скрываться как только человек убирает курсор с кнопки*/

const btn6 = document.getElementById("btn-6");
const square6 = document.getElementById("square-6");
btn6.addEventListener("mouseover", function() {
    square6.style.display = "block";
})
btn6.addEventListener("mouseout", function() {
    square6.style.display = "none";
})

document.getElementById("description_hid-6").onclick = function(){
    const des6 = document.getElementById("description-6");
    if(des6.style.display == "none") {
        des6.style.display = "block";
    }
    else {
        des6.style.display = "none";
    }
}

/*7 - Добавить на страницу зеленый прямоугольник 50х20 пх,
который будет появляться как только человек фокусируется
на инпуте и исчезать как только человек начинает писать
текст в этот инпут*/

const rectangle7 = document.getElementById("rectangle-7");
const input7 = document.getElementById("input-7");
input7.addEventListener('click', function() {
    rectangle7.style.display = "block";
})
input7.oninput = function() {
    rectangle7.style.display = "none";
}

document.getElementById("description_hid-7").onclick = function(){
    const des7 = document.getElementById("description-7");
    if(des7.style.display == "none") {
        des7.style.display = "block";
    }
    else {
        des7.style.display = "none";
    }
}

/*8 - Добавить на страницу инпут и кнопку.
Если в инпут положить ссылку, и нажать
на кнопку то на странице появится картинка
полученная по ссылке, которую ввели в инпут*/

document.getElementById("open-8").onclick = function(){
    const input8 = document.getElementById("input-8");
    let input_value8 = input8.value;
    document.getElementById("img_href-8").src = input_value8;
}

document.getElementById("description_hid-8").onclick = function(){
    const des8 = document.getElementById("description-8");
    if(des8.style.display == "none") {
        des8.style.display = "block";
    }
    else {
        des8.style.display = "none";
    }
}

/*9 - Превратить инпут в textarea, в которую можно
вводить ссылки, каждую с новой строчки. При нажатии
на кнопку на странице появится столько картинок,
сколько ссылок ввели в textarea
(картинки берутся по ссылкам)*/

document.getElementById("btn-9").onclick = function(){
    const url_text9 = document.getElementById("textarea-9").value;
    let str9 = url_text9.split('\n');
    for(let i = 0; i < str9.length; i++){
        let el_img9 = document.createElement("img-9");
        el_img9.setAttribute("src", str9[i]);
        let all_div9 = document.getElementById("all_img-9");
        document.body.insertBefore(el_img9, all_div9);
    }
}

document.getElementById("description_hid-9").onclick = function(){
    const des9 = document.getElementById("description-9");
    if(des9.style.display == "none") {
        des9.style.display = "block";
    }
    else {
        des9.style.display = "none";
    }
}

/*10 - Сделать блок в правом верхнем углу страницы,
в котором в формате "Х: 123, У: 984" будут
выводиться координаты курсора
(обновляться в риалтайме)*/

const txt10 = document.getElementById("txt-10");
function xy(e) {
    txt10.innerHTML = `X: ${e.screenX} <br> Y: ${e.screenY}`;
}
document.querySelector('html').addEventListener('mousemove', e => xy(e));

document.getElementById("description_hid-10").onclick = function(){
    const des10 = document.getElementById("description-10");
    if(des10.style.display == "none") {
        des10.style.display = "block";
    }
    else {
        des10.style.display = "none";
    }
}

/*11 - Добавить в блок в правом верхнем углу информацию
о том какой язык выбран в браузере у пользователя*/

const text11 = document.getElementById("text-11");
let user_lang11 = navigator.language; 
text11.innerHTML = user_lang11;

document.getElementById("description_hid-11").onclick = function(){
    const des11 = document.getElementById("description-11");
    if(des11.style.display == "none") {
        des11.style.display = "block";
    }
    else {
        des11.style.display = "none";
    }
}

/*12 - Добавить в блок в правом верхнем углу отображение
широты и долготы на которой находится человек
(формат: "Ш: 34.23234, Д: 78.239482034")*/

function geo12() {
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude12  = position.coords.latitude;
        const longitude12 = position.coords.longitude;
        const txt12 = document.getElementById("txt-12");
        txt12.innerHTML = `Ш: ${latitude12} <br> Д: ${longitude12}`
    })
}
document.querySelector('html').addEventListener('mousemove', geo12());

document.getElementById("description_hid-12").onclick = function(){
    const des12 = document.getElementById("description-12");
    if(des12.style.display == "none") {
        des12.style.display = "block";
    }
    else {
        des12.style.display = "none";
    }
}

/*13 - Добавить на страницу три блока и сделать текст
внутри них редактируемым, как в инпуте (но чтоб
это был не нативный инпут). То, что человек введет
в эти "инпуты" должно в них и оставаться при
перезагрузке страницы (onload событие).
    для первого использовать localStorage
    для второго использовать cookies
    для третьего использовать sessionStorage
Загуглите в чем разница между этими способами*/

const met_113 = document.getElementById("input_1-13");
const met_213 = document.getElementById("input_2-13");
const met_313 = document.getElementById("input_3-13");

met_113.addEventListener('DOMSubtreeModified', function(){
    localStorage.setItem('1', met_113.innerHTML);
})
met_313.addEventListener('DOMSubtreeModified', function(){
    sessionStorage.setItem('3', met_313.innerHTML);
})

window.addEventListener('load', function() {
    met_113.innerHTML = localStorage.getItem('1');
    met_313.innerHTML = sessionStorage.getItem('3');
})

document.getElementById("description_hid-13").onclick = function(){
    const des13 = document.getElementById("description-13");
    if(des13.style.display == "none") {
        des13.style.display = "block";
    }
    else {
        des13.style.display = "none";
    }
}

$(document).ready(function(){
    var name13 = Cookies.get('_username');
    if (name13) {
        $('#input-2-13').val(name13);
    }
    $('#input-2-13').keydown(function(){
        var inputName13 = $('#input-2-13').val();
        Cookies.set('_username', inputName13);
    })
})

/*14 - Сделать кнопку, которая появляется
когда мы уже пролистали экран вниз и по
нажатию на которую человека плавно кидает
наверх страницы*/

$(document).ready(function(){
    $('#but-14').click(function() {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
    })
})

document.getElementById("description_hid-14").onclick = function(){
    const des14 = document.getElementById("description-14");
    if(des14.style.display == "none") {
        des14.style.display = "block";
    }
    else {
        des14.style.display = "none";
    }
}

/*15 - Сделать два блока, один внутри другого.
Навешать на каждый из них слушатель клика,
который вызывает алерт. Сделать так чтоб при
нажатии на маленький вызывался всего один алерт*/

const div115 = document.getElementById("div1-15");
const div215 = document.getElementById("div2-15");

div115.addEventListener('click', function() {
    alert("HELLO WORLD...");
})
div215.addEventListener('click', function() {
    alert("HELLO WORLD-2...");
    event.stopPropagation();
})

document.getElementById("description_hid-15").onclick = function(){
    const des15 = document.getElementById("description-15");
    if(des15.style.display == "none") {
        des15.style.display = "block";
    }
    else {
        des15.style.display = "none";
    }
}

/*16 - Сделать кнопку, по нажатию на которую
появляется серый полупрозрачный квадрат на весь
экран и нельзя было скроллить страницу пока он не
скроется. Скрывать квадрат по нажатию на него*/

const body16 = document.getElementsByTagName("BODY")[0];
const div_all16 = document.getElementById("div_all-16");
const btn16 = document.getElementById("btn-16")

btn16.addEventListener('click', function() {
    div_all16.style.display = 'block';
    body16.style.overflow = 'hidden';
})
div_all16.addEventListener('click', function() {
    div_all16.style.display = 'none';
    body16.style.overflow = 'scroll';
})

document.getElementById("description_hid-16").onclick = function(){
    const des16 = document.getElementById("description-16");
    if(des16.style.display == "none") {
        des16.style.display = "block";
    }
    else {
        des16.style.display = "none";
    }
}

/*17 - Дано: <form><input type="submit"
value="GO"></form>Сделать так чтоб при нажатии
на кнопку "GO" не перезагружалась страница*/

const inp17 = document.getElementById("submit-17")
inp17.addEventListener('click', function(e) {
    e.preventDefault()
})

document.getElementById("description_hid-17").onclick = function(){
    const des17 = document.getElementById("description-17");
    if(des17.style.display == "none") {
        des17.style.display = "block";
    }
    else {
        des17.style.display = "none";
    }
}

/*18 - Сделать красивый инпут type="file".
Сделать чтоб при перетаскивании файла на этот
инпут, он красиво менялся (drag-n-drop).
Ну и когда файл уже выбран тоже*/

const btn18 = document.getElementById('btn-18');
const input18 = document.getElementById('input-18');
const all_div18 = document.getElementById('all_div-18');
const div_img18 = document.getElementById('div_img-18');
let images18 = [];
const types18 = ['image/jpeg', 'image/png', 'image/jpg']

input18.style.display = 'none';
        
btn18.addEventListener('click', function(){
    input18.click();
})
input18.addEventListener('change', function(){
    all_div18.style.border = '3px solid #00FF00';
    var objUrl18 = getObjectURL (this.files [0]);
    if (objUrl18) {  
        div_img18.innerHTML += `<img src="${objUrl18}" alt="">`;
    }   
});
function getObjectURL(file) {  
    var url18 = null;   
    if (window.createObjectURL!=undefined) {  
        url18 = window.createObjectURL(file) ;  
    }else if (window.webkitURL!=undefined) {
        url18 = window.webkitURL.createObjectURL(file) ;  
    }  
    return url18;  
}  
all_div18.addEventListener('dragover', function(e) {
    all_div18.style.border = '3px solid #1d20ad';
    e.preventDefault();
})
all_div18.addEventListener('dragleave', function(e) {
    all_div18.style.border = '3px dashed #808080';
    e.preventDefault();
})
all_div18.addEventListener('drop', function(e) {
    all_div18.style.border = '3px solid #00FF00';
    e.preventDefault();
    const files18 = e.dataTransfer.files;
    for(let key in files18) {
        if(types18.includes(files18[key].type == 0)){
            continue;
        }
        images18.push = files18[key];
        let imagesURL18 = URL.createObjectURL(files18[key]);
        div_img18.innerHTML += `<img src="${imagesURL18}" alt="">`
    }
})

document.getElementById("description_hid-18").onclick = function(){
    const des18 = document.getElementById("description-18");
    if(des18.style.display == "none") {
        des18.style.display = "block";
    }
    else {
        des18.style.display = "none";
    }
}