var preview = document.getElementById("preview")
var display = document.getElementById("display")

var numB = document.getElementById("numB")
var rangeB = document.getElementById("rangeB")
var addB = document.getElementById("addB")
var randomB = document.getElementById("randomB")
var autoB = document.getElementById("autoB")
var stopB = document.getElementById("stopB")

var range1 = document.getElementById("range1")
var range2 = document.getElementById("range2")
var range3 = document.getElementById("range3")
var range4 = document.getElementById("range4")
var color = document.getElementById("color")

var timer = null

function createFace(){
    var nDiv = document.createElement("div")
    var avaDiv = document.createElement("div")
    
    nDiv.className = "col-xl-1 col-md-2 col-sm-3"
    
    avaDiv.style.backgroundColor = preview.style.backgroundColor
    avaDiv.className = "newAva"
    
    var newH = document.createElement("img")
    var newE = document.createElement("img")
    var newN = document.createElement("img")
    var newM = document.createElement("img")
    
    newH.src = hair.src
    newE.src = eyes.src
    newN.src = nose.src
    newM.src = mouth.src
    
    newH.style.width = hair.style.width
    newE.style.width = eyes.style.width
    newN.style.width = nose.style.width
    newM.style.width = mouth.style.width
    
    newH.style.top = hair.style.top
    newE.style.top = eyes.style.top
    newN.style.top = nose.style.top
    newM.style.top = mouth.style.top
    
    newH.className = "newItems"
    newE.className = "newItems"
    newN.className = "newItems"
    newM.className = "newItems"
    
    display.appendChild(nDiv)
    nDiv.appendChild(avaDiv)
    avaDiv.appendChild(newH)
    avaDiv.appendChild(newE)
    avaDiv.appendChild(newN)
    avaDiv.appendChild(newM)
}


function randomFace(){
    hNum = Math.floor(Math.random()*3)+1
    eNum = Math.floor(Math.random()*3)+1
    mNum = Math.floor(Math.random()*3)+1
    nNum = Math.floor(Math.random()*3)+1
    
    hair.src="img/hair"+hNum+".png"
    eyes.src="img/eyes"+eNum+".png"
    nose.src="img/nose"+nNum+".png"
    mouth.src="img/mouth"+mNum+".png"
    
    var r1 = Math.floor(Math.random()*71)
    var r2 = Math.floor(Math.random()*41)
    var r3 = Math.floor(Math.random()*31)
    var r4 = Math.floor(Math.random()*36)
    
    range1.value = r1
    range2.value = r2
    range3.value = r3
    range4.value = r4
    
    hair.style.width = range1.value+"%"
    eyes.style.width = range2.value+"%"
    nose.style.width = range3.value+"%"
    mouth.style.width = range4.value+"%"
    
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    
    preview.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

function changeType(type) {
    range1.type = type
    range2.type = type
    range3.type = type
    range4.type = type
}


color.addEventListener("change", function(){
    preview.style.backgroundColor = color.value
})

rangeB.addEventListener("click", function(){
    changeType("range")
})


numB.addEventListener("click", function(){
    changeType("number")
})

range1.addEventListener("change", function(){
    hair.style.width = range1.value+"%"
})

range2.addEventListener("change", function(){
    eyes.style.width = range2.value+"%"
})

range3.addEventListener("change", function(){
    nose.style.width = range3.value+"%"
})

range4.addEventListener("change", function(){
    mouth.style.width = range4.value+"%"
})

addB.addEventListener("click", function(){
    createFace()
})

randomB.addEventListener("click", function(){
    randomFace()
})

autoB.addEventListener("click", function(){
    if(timer == null){
        timer = setInterval(function(){
            randomFace();
            createFace();
        }, 500);
    }
});

stopB.addEventListener("click", function(){
    clearInterval(timer);
    timer = null
});








