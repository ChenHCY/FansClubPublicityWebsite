/*the timeline vdeio part start*/
var items = document.querySelectorAll('.timeline .item');
var goPreBtn = document.querySelector('.timeline #Prev');
var goNextBtn = document.querySelector('.timeline #Next');
var pointLists = document.querySelectorAll('.timeline .point');
var wrap = document.querySelector('.timeline .wrap');
var index = 0;
var time = 0;
var lock = true; 

function clearIndex() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
        pointLists[i].className = 'point';
    }
}

function goIndex() {
    clearIndex();
    items[index].className = 'item active';
    pointLists[index].className = 'point current';
}
goIndex();

function goNext() {
    index++;
    if (index > 4) {
        index = 0;
    }
    goIndex();
}

function goPre() {
    index--;
    if (index < 0) {
        index = 4;
    }
    goIndex();
}

function rest() {
    time++;
    if (time == 100) {
        time = 0;
        goNext();  
    }
}

function openLock() {
    lock = true;
}

function startLock(){
    lock = true;
}

goNextBtn.addEventListener('click', function() {
    if (!lock) return; 
    goNext();
    time = 0;
    lock = false;
    setTimeout(openLock, 1000);
});

goPreBtn.addEventListener('click', function() {
    if (!lock) return;
    goPre();
    lock = false;
    time = 0;
    setTimeout(openLock, 1000);
});

for (var j = 0; j < pointLists.length; j++) {
    pointLists[j].setAttribute('pointIndex', j);

    pointLists[j].addEventListener('click', function() {
        var pIndex = this.getAttribute('pointIndex');
        index = pIndex;
        goIndex();
        time = 0;
    })
}
/*the timeline vdeio part ends*/

