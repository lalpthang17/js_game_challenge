


let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")
let shoot1sound = new Audio("assets/audio/goalsound.mp3");
let shoot2sound = new Audio("assets/audio/boo.mp3");



let teamOneShotCount = 0;
let teamOneGoalCount = 0;

teamOneShootButtonElement.addEventListener("click", function () {
    teamOneShotCount = teamOneShotCount + 1
    teamOneShotCountElement.innerHTML = teamOneShotCount

    //if shot was successful, increment goalcount by one
    //after incrementing goalcount, set goalcountelement.innerHTML
    //equal to gaolcounta

    shoot1sound.play();


    if (Math.random() < .25) {

        teamOneGoalCount = teamOneGoalCount + 1
        teamOneGoalCountElement.innerHTML = teamOneGoalCount

    }
    

})


let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")

let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;

teamTwoShootButtonElement.addEventListener("click", function () {
    teamTwoShotCount = teamTwoShotCount + 1
    teamTwoShotCountElement.innerHTML = teamTwoShotCount
    shoot2sound.play();



    if (Math.random() < .25) {

        teamTwoGoalCount = teamTwoGoalCount + 1
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount

    }

})

let resetButtonElement = document.querySelector("#reset")
let NumberOfResetElement = document.querySelector("#num-resets")

let resetButtonCount = 0;

resetButtonElement.addEventListener("click", function () {
    resetButtonCount = resetButtonCount + 1
    NumberOfResetElement.innerHTML = resetButtonCount
    teamTwoGoalCountElement.innerHTML = 0;
    teamOneShotCountElement.innerHTML = 0;
    teamTwoShotCountElement.innerHTML = 0;
    teamOneGoalCountElement.innerHTML = 0;
    teamTwoGoalCount = 0;
    teamOneGoalCount = 0;
    teamOneShotCount = 0;
    teamTwoShotCount= 0;


})























