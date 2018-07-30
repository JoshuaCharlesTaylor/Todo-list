var input = document.getElementById("Text");
var list = document.getElementById("list");
var form = document.getElementById("add items");

/*console.log(input);
console.log(list);
console.log(form);*/

function addItem(e) {
    e.preventDefault();
    var item= input.value;
    console.log(item);
    list.innerHTML += "<li>" + item + "</li>"
    form.reset();
}

form.addEventListener("submit", addItem);