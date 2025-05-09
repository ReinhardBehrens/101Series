function clickme()
{
    console.log("Clicked!");
}

document.getElementById("clickme2").addEventListener("click", () => { 
    console.log("Clicked! 2");
});

function changeTextForInput()
{
    document.getElementById("changeText").textContent = "Text Changed";
}

function changeBGColorViaQuerySelector()
{
    document.querySelector("div.boxClass").style.backgroundColor = "red";
}

let classBtn = document.getElementById("toggleBtn");
classBtn.addEventListener("click", () => {
    classBtn.classList.toggle("active");
})

function appendDocumentChild(child)
{
    let p = document.createElement(child);
    p.textContent = "Dynamically added <p> tag";
    document.body.appendChild(p);
}

function removeElementFromDOM(elementID)
{
    let el = document.getElementById(elementID);
    el.remove();
}

/*
    Exercise 50 - DOMContentLoaded Event
*/
function isDOMReady()
{
    return new Promise((resolve => {
            if(document.readyState == "loading"){
                document.addEventListener("DOMContentLoaded", () => resolve(true) );
            }
            else{
                resolve = true;
            }
    }));
}

isDOMReady().then(()=> {
    console.log("DOM Ready");
});