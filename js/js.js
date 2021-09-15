document.getElementById("user").style.display = "none";
document.getElementById("admin").style.display = "none";
document.getElementById("front").style.display = "none";

var user = 0;

function logInAsUser() {
    document.getElementById("user").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("admin").style.display = "none";
    document.getElementById("front").style.display = "block";
    upgrade();
}

function logInAsAdmin() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("user").style.display = "none";
    document.getElementById("front").style.display = "block";
    upgrade();
}

function logOut() {
    document.getElementById("admin").style.display = "none";
    document.getElementById("user").style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("front").style.display = "none";
}

const votingMachines = [
    {
        p: "Kyllä vai ei?",
        yes: 2,
        no: 1,

    },
    {
        p: "Uusi vai wanha?",
        yes: 7,
        no: 10,
    }
];


function upgrade() {
    const data = document.getElementById("containment");
    for (let z = 0; votingMachines.length > z; z++) {

        var ul = document.createElement("ul");

        var p = document.createElement("p");
        var y = document.createElement("p");
        var n = document.createElement("p");

        p.innerHTML = votingMachines[z].p;
        y.innerHTML = votingMachines[z].yes;
        n.innerHTML = votingMachines[z].no;

        ul.appendChild(p);
        ul.appendChild(y);
        ul.appendChild(n);

        data.appendChild(ul);
    }
}