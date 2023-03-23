var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "200px;"

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-warning");
button.innerHTML = "Search Results";
button.style.marginLeft = "10px";
button.addEventListener("click", foo);

let activeCases = document.createElement("div");
activeCases.setAttribute("id", "active");

let confirmedCases = document.createElement("div");
confirmedCases.setAttribute("id", "confirmed");

let recoveredCases = document.createElement("div");
recoveredCases.setAttribute("id", "recovered");

let deathCases = document.createElement("div");
deathCases.setAttribute("id", "death");
deathCases.style.color = "red";

div.append(input, button, activeCases, confirmedCases, recoveredCases, deathCases);
document.body.append(div);

async function foo() {
    try {
        let res = document.getElementById("country").value;
        console.log(res);
        let url = `https://api.covid19api.com/total/dayone/country/${res}`;
        let res1 = await fetch(url);
        let res2 = await res1.json();
        let index = res2.length - 1;
        console.log(res2[index]);
        console.log(res2[index].Active);
        activeCases.innerHTML = `Total Active Cases in ${res} is <b> ${res2[index].Active} </b>`;
        confirmedCases.innerHTML = `Total Confirmed Cases in ${res} is <b> ${res2[index].Confirmed} </b>`;
        recoveredCases.innerHTML = `Total Recovered Cases in ${res} is <b> ${res2[index].Recovered} </b>`;
        deathCases.innerHTML = `Total Death Cases in ${res} is <b> ${res2[index].Deaths} </b>`;
    } catch (error) {
        activeCases.innerHTML = `Country Not Defined - Please Check Country Name and search again`;
        confirmedCases.innerHTML = " ";
        recoveredCases.innerHTML = " ";
        deathCases.innerHTML = " ";
    }
}