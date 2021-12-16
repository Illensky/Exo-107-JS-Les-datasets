// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');


p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString()
p2.dataset.string = p2.dataset.string.length.toString()
let array = p3.dataset.array.split(",")

for (let item of array) {
    p3.innerHTML += item;
}

if (p4.dataset.boolean === "true") {
    p4.innerHTML = "La valeur est vraie"
}
else {
    p4.innerHTML = "La valeur est fausse"
}

p5.dataset.number = "8"
p6.dataset.string = "string"
p7.dataset.array = "1,2,3,4,5,6"
p8.dataset.boolean = "true"

p5.dataset.number = (parseInt(p5.dataset.number) + 10).toString();
p6.dataset.string = p6.dataset.string.length.toString();
let array2 = p7.dataset.array.split(",");

for (let item of array2) {
    p7.innerHTML += item;
}

if (p8.dataset.boolean === "true") {
    p8.innerHTML = "La valeur est vraie";
}
else {
    p8.innerHTML = "La valeur est fausse";
}

person = {
    prenom : "John",
    nom : "doe"
}

const pBonus = document.createElement("p");
pBonus.dataset.bonus = JSON.stringify(person)
document.querySelector("body").appendChild(pBonus);