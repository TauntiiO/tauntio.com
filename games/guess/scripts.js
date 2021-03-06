let element;
let premier;
let voiceline;
let audio;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function newVoiceline() {
    premier = tabsounds.shift();
    voiceline = folder + premier;
    audio = new Audio(voiceline); 
    audio.volume=0.3;
    audio.play();
}

function startGame() {
    shuffle(tabsounds);

    newVoiceline();
}

function verify() {
    var input = document.getElementById('try');
    if(input.value.indexOf(premier)!==-1) {
        window.alert(GOOD);
    }
    else {
        window.alert(WRONG);
    }
}