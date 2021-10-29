var items = document.querySelectorAll('.photo .item');
var goPreBtn = document.querySelector('.photo #Prev');
var goNextBtn = document.querySelector('.photo #Next');
var pointLists = document.querySelectorAll('.photo .point');
var wrap = document.querySelector('.photo .wrap');

var index = 0;
var time = 0;
var timer = null;
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
    if (index > 8) {
        index = 0;
    }
    goIndex();
}

function goPre() {
    index--;
    if (index < 0) {
        index = 8;
    }
    goIndex();
}

function rest() {
    time++;

    if (time == 20) {
        time = 0;
        goNext();
    }
}

function openLock() {
    lock = true;
}

goNextBtn.addEventListener('click', function() {
    if (!lock) return; 
    goNext();
    time = 0;
    lock = false;
    setTimeout(openLock, 1000)

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

wrap.addEventListener('mouseover', function() {
    clearInterval(timer);
    time = 0;
})
wrap.addEventListener('mouseout', function() {
    time = 0;
    timer = setInterval(rest, 150);
})
timer = setInterval(rest, 150)