var gameData = ""


function displayImage() {
    flip1();
    flip2();
};

$(document).ready(function() {
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++)
            $(".grid").append("<div class='tile " + i + j + "' onclick='paint(this)'></div>")
    }
    for (var i = 1; i < 26; i++) {
        preload('img/PD2_carta' + num + ".png")
    }
});

function select(el) {
    Array.from(document.querySelectorAll('.color')).forEach(function(el) {
        el.classList.remove('selected');
    });
    el.classList.toggle("selected")
}

function paint(el) {
    var newColor
    var colorString
    Array.from(document.querySelectorAll('.color')).forEach(function(col) {
        if (col.classList.contains('selected')) {
            if (col.id.match('rosso')) {
                newColor = "rosso"
                colorString = "R"
            } else if (col.id.match('blu')) {
                newColor = "blu"
                colorString = "B"
            } else if (col.id.match('giallo')) {
                newColor = "giallo"
                colorString = "Y"
            } else if (col.id.match('verde')) {
                newColor = "verde"
                colorString = "V"
            } else if (col.id.match('marrone')) {
                newColor = "marrone"
                colorString = "M"
            } else if (col.id.match('fucsia')) {
                newColor = "fucsia"
                colorString = "F"
            } else if (col.id.match('nero')) {
                newColor = "nero"
                colorString = "N"
            } else if (col.id.match('grigio')) {
                newColor = "grigio"
                colorString = "G"
            } else if (col.id.match('none')) {
                newColor = ""
                colorString = "X"
            }
        }
    });
    tileNumber = el.classList[1]
    el.id = newColor
    gameData = gameData + tileNumber + colorString + "+"
}

function reset(el) {
    Array.from(document.querySelectorAll('.tile')).forEach(function(el) {
        el.id = "";
    });
    gameData = gameData + "CLEAR+"
}

var flip1 = function() {
    document.getElementById("flip").animate([
        // keyframes
        { transform: 'scaleX(100%)' },
        { transform: 'scaleX(0)' }
    ], {
        // timing options
        duration: 100,
    });
    var num = Math.floor(Math.random() * 24 + 1); // 0...6
    var rotation = Math.floor(Math.random() * 3) * 90;
    document.canvas.src = 'img/PD2_carta' + num + ".png";
    document.getElementById("img").style.transform = `rotate(${rotation}deg)`;

};

function flip2() {

    document.getElementById("flip").animate([
        // keyframes
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(100%)' }
    ], {
        // timing options
        duration: 100,
    });
};

function send() {
    var googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSf32XKVMRbQgc4p0wBpLTMBmVrQ8-psKNjv5G8ciXN_ZV03Cg/viewform?usp=pp_url&entry.381862088=DATE&entry.399250374=TIME&entry.201348009=GAME_DATA"
    var tempGameDataValue = "GAME_DATA"
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var MM = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    var hh = addZero(date.getHours())
    var mm = addZero(date.getMinutes())

    date = yyyy + '-' + MM + '-' + dd;
    time = hh + ":" + mm
    googleForm = googleForm.replace("DATE", date)
    googleForm = googleForm.replace("TIME", time)
    precompiledForm = googleForm.replace(tempGameDataValue, gameData)

    window.open(precompiledForm)
}



function preload(url) {
    img = new Image()
    img.src = url
}