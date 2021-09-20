var divUser = document.getElementById("user");
var divAdmin = document.getElementById("admin");
var divStart = document.getElementById("start");
var divFront = document.getElementById("front");
var divAdder = document.getElementById("adder");

divUser.style.display = "none";
divAdmin.style.display = "none";
divFront.style.display = "none";
divAdder.style.display = "none";

const data = document.getElementById("containment");

function logInAsUser() {
    divUser.style.display = "block";
    divStart.style.display = "none";
    divAdmin.style.display = "none";
    divFront.style.display = "block";
    for (let z = 0; votingMachines.length > z; z++) {
        document.getElementById("remove" + z).style.display = "none";
    }
}

function logInAsAdmin() {
    divAdmin.style.display = "block";
    divStart.style.display = "none";
    divUser.style.display = "none";
    divFront.style.display = "block";
    for (let z = 0; votingMachines.length > z; z++) {
        document.getElementById("remove" + z).style.display = "inline";
    }
}

function logOut() {
    divAdmin.style.display = "none";
    divUser.style.display = "none";
    divStart.style.display = "block";
    divFront.style.display = "none";
}

function addidas() {
    divUser.style.display = "none";
    divAdmin.style.display = "none";
    divFront.style.display = "block";
    divAdder.style.display = "block";
}

const votingMachines = [{
    question: "Kyllä vai ei?",
    yes: 2, no: 1,
}, {
    question: "Uusi vai wanha?",
    yes: 7, no: 10,
}];

function loadAll() {
    for (let z = 0; z <= votingMachines.length; z++) {

        var ul = document.createElement("ul");
        ul.setAttribute("id", "ul" + z)

        var p = document.createElement("p");
        var y = document.createElement("p");
        var n = document.createElement("p");

        p.innerHTML = votingMachines[z].question;
        y.innerHTML = votingMachines[z].yes;
        n.innerHTML = votingMachines[z].no;

        p.setAttribute("id", "p" + z);
        y.setAttribute("id", "y" + z);
        n.setAttribute("id", "n" + z);

        ul.appendChild(p);
        ul.appendChild(y);
        ul.appendChild(n);

        var buttonPlus = document.createElement("button");
        buttonPlus.innerHTML = "+";
        buttonPlus.onclick = function () {
            votingMachines[z].yes++;
            document.getElementById("y" + z).innerHTML = votingMachines[z].yes;
        };
        ul.appendChild(buttonPlus);

        var buttonMinus = document.createElement("button");
        buttonMinus.innerHTML = "-";
        buttonMinus.onclick = function () {
            votingMachines[z].no++;
            document.getElementById("n" + z).innerHTML = votingMachines[z].no;
        };
        ul.appendChild(buttonMinus);

        var buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Poista";
        buttonRemove.setAttribute("id", "remove" + z);
        buttonRemove.onclick = function () {
            removeButton(z);
        };
        ul.appendChild(buttonRemove);

        data.appendChild(ul);
    }
}

function clear(z) {
    var x = 0, y = votingMachines.length;
    switch (z) {
        default:
            votingMachines.splice(z, 1);
        case -1:
            while (x < y) {
                document.getElementById("ul" + x).remove();
                x++;
            }
    }
}

function removeButton(z) {
    clear(z);
    loadAll();
}

function newQuestion() {
    var income = document.getElementById("question").value;
    if (income.length == 0) {
        window.alert("Kysymys kenttä on tyhjä")
        return;
    }
    clear(-1);
    addQuestion(income);
    loadAll();
}

function addQuestion(income) {
    var element = {};
    element.question = income;
    element.yes = 0;
    element.no = 0;
    votingMachines.push(element);
}