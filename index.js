"use strict"

let count = 0;
let countEL = document.getElementById("count-el")

function increment() {
    count += 1;
    return countEL.innerHTML = `${count}`
}

function reset() {
    count = 0;
    return countEL.innerHTML = `${count}`
}

let secretCount = 0;
let countSecret = document.getElementById("demo")

function secret() {
    secretCount += 1;
    switch(secretCount) {
        case 1:
            countSecret.innerHTML = ("Why did you click this?");
            break;
        case 2:
            countSecret.innerHTML = ("Please stop clicking!");
            break;
        case 3:
            countSecret.innerHTML = ("Stop!");
            break;
        case 4:
            countSecret.innerHTML = ("Why are you doing this!");
            break;
        case 5:
            countSecret.innerHTML = ("Who hired you!");
            break;
        case 6:
            countSecret.innerHTML = ("Please! I beg you!");
            break;
        case 7:
            countSecret.innerHTML = ("Stop!");
            break;
        case 8:
            countSecret.innerHTML = ("I gave up!");
            break;
        case 9:
            var a = document.createElement('a');
            var linkText = document.createTextNode("Here it is!");
            a.appendChild(linkText);
            a.title = "Here it is";
            a.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            a.setAttribute("id","Secret-link")
            document.body.appendChild(a);
            break;
        case 10:
            alert("I hate you")
            document.getElementsById("Secret-link").innerHTML = "S"
            console.log(5)
            countSecret.innerHTML = ("Now leave me alone");
            break;
    }
    return
}