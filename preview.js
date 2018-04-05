/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var hNum = 1
var eNum = 1
var nNum = 1
var mNum = 1

hair.addEventListener("click", function(){
    hNum++
    if(hNum > 3){
        hNum = 1
    }
    hair.src="img/hair"+hNum+".png"
})


eyes.addEventListener("click", function(){
    eNum++
    if(eNum > 3){
        eNum = 1
    }
    eyes.src="img/eyes"+eNum+".png"
})


nose.addEventListener("click", function(){
    nNum++
    if(nNum > 3){
        nNum = 1
    }
    nose.src="img/nose"+nNum+".png"
})


mouth.addEventListener("click", function(){
    mNum++
    if(mNum > 3){
        mNum = 1
    }
    mouth.src="img/mouth"+mNum+".png"
})