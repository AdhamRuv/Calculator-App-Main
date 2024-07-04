const buttons = ["DEL", 9, 8, 7, "+", 6, 5, 4, "-", 3, 2, 1, "x", "/", 0, ".", "=", "RESET"];
let buttonsDiv = document.querySelector(".buttons");
let screen = document.querySelector(".num");
let mainScreen = document.querySelector(".screen");
let circle = document.querySelector(".circle");
let circleSp = document.querySelector(".circleSp");
let hidden = document.querySelector(".hidden");
let span1 = document.querySelector(".sp1")
let span2 = document.querySelector(".sp2")
let span3 = document.querySelector(".sp3")
let body = document.querySelector("body");
let header = document.querySelector("header");

body.classList.add("body-active1");
mainScreen.classList.add("screen-active1");
buttonsDiv.classList.add("buttons-active1");
header.classList.add("header-active1");


for(let i=0; i<buttons.length; i++){
    let button = document.createElement("button");
    button.classList.add("button", `button-${i}`);
    button.innerHTML = buttons[i];
    buttonsDiv.appendChild(button);
    if(!isNaN(button.innerHTML) || button.innerHTML ===  "+" || button.innerHTML ===  "-" || button.innerHTML ===  "x" || button.innerHTML ===  "/" || button.innerHTML ===  "."){
        button.classList.add("whiteButton");
    };
    button.onclick = function(e){
        document.querySelectorAll(".button").forEach((btn)=>{
            btn.disabled = false
        })
        if (this.innerHTML === "=") {
            if(screen.innerHTML === ''){
                e.target.disabled = true;
            }else{
                try {
                    let arr = screen.innerHTML.split('');
                    if (arr.includes('x')) {
                        arr[arr.indexOf('x')] = '*';
                    };
                    let result = eval(arr.join('')).toFixed(1);
                    screen.innerHTML = result;
                }catch(err) {
                    screen.innerHTML = "Undefined";
                };
            }
            e.target.disabled = false;
        }else if(this.innerHTML === "DEL"){
            if(screen.innerHTML === "Undefined"){
                screen.innerHTML = '';
            }else {
                let newArr = screen.innerHTML.split('').slice(0, -1).join('');
                screen.innerHTML = newArr;
            }
        }else if(this.innerHTML === "RESET"){
            screen.innerHTML = '';
        }else{
            let value = screen.innerHTML + this.innerHTML;
            screen.innerHTML = value;
        };
        function isScreenFull(){
            const screenWidth = screen.offsetWidth;
            const mainScreenWidth = mainScreen.offsetWidth;
            if((screenWidth + 150)>= mainScreenWidth){
                document.querySelectorAll(".button").forEach((btn)=>{
                    btn.disabled = true;
                    if(btn.innerHTML === "RESET" || btn.innerHTML === "DEL" || btn.innerHTML === "="){
                        btn.disabled = false;
                    };
                });
            };
        };
        isScreenFull();
    };
};
let whiteButton = document.querySelectorAll(".whiteButton");
whiteButton.forEach((btn)=>{
    btn.classList.add("whiteButton-active1");
});
let equal = document.querySelector(".button-16");
equal.classList.add("button-16-active1");
circle.classList.add("circle-active1");
circleSp.classList.add("circleSp-active1");
let reset = document.querySelector(".button-17"); 
let del = document.querySelector(".button-0");
reset.classList.add("button-17-active1");
del.classList.add("button-0-active1");

span1.onclick = ()=>{
    circle.style.transform = "translate(-200%, -50%)";
    body.classList = '';
    body.classList.add("body-active1");
    mainScreen.classList = '';
    mainScreen.classList.add("screen-active1", "screen");
    buttonsDiv.classList = '';
    buttonsDiv.classList.add("buttons-active1", "buttons");
    whiteButton.forEach((btn)=>{
        btn.classList = '';
        btn.classList.add("button", "whiteButton-active1");
    });
    header.classList = '';
    header.classList.add("header-active1");
    equal.classList = '';
    equal.classList.add("button", "button-16", "button-16-active1");
    circle.classList = '';
    circle.classList.add("circle", "circle-active1");
    circleSp.classList= '';
    circleSp.classList.add("circleSp", "circleSp-active1");
    reset.classList = '';
    reset.classList.add("button-17", "button-17-active1", "button");
    del.classList = '';
    del.classList.add("button-0", "button-0-active1", "button");
}
span2.onclick = ()=>{
    circle.style.transform = "translate(-50%, -50%)";
    body.classList = '';
    body.classList.add("body-active2");
    mainScreen.classList = '';
    mainScreen.classList.add("screen-active2", "screen");
    buttonsDiv.classList = '';
    buttonsDiv.classList.add("buttons-active2", "buttons");
    whiteButton.forEach((btn)=>{
        btn.classList = '';
        btn.classList.add("button", "whiteButton-active2")
    });
    header.classList = '';
    header.classList.add("header-active2");
    equal.classList = '';
    equal.classList.add("button", "button-16", "button-16-active2");
    circle.classList = '';
    circle.classList.add("circle", "circle-active2");
    circleSp.classList = '';
    circleSp.classList.add("circleSp", "circleSp-active2");
    reset.classList = '';
    reset.classList.add("button-17", "button-17-active2", "button");
    del.classList = '';
    del.classList.add("button-0", "button-0-active2", "button");
};
span3.onclick = ()=>{
    circle.style.transform = "translate(100%, -50%)";
    body.classList = '';
    body.classList.add("body-active3");
    mainScreen.classList = '';
    mainScreen.classList.add("screen-active3", "screen");
    buttonsDiv.classList = '';
    buttonsDiv.classList.add("buttons-active3", "buttons");
    whiteButton.forEach((btn)=>{
        btn.classList = '';
        btn.classList.add("button", "whiteButton-active3")
    });
    header.classList = '';
    header.classList.add("header-active3");
    equal.classList = '';
    equal.classList.add("button", "button-16", "button-16-active3");
    circle.classList = '';
    circle.classList.add("circle", "circle-active3");
    circleSp.classList = '';
    circleSp.classList.add("circleSp", "circleSp-active3");
    reset.classList = '';
    reset.classList.add("button-17", "button-17-active3", "button");
    del.classList = '';
    del.classList.add("button-0", "button-0-active3", "button");
};
