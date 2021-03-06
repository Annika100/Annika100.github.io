/* automatisches starten des VR Modus */
AFRAME.registerComponent('auto-enter-vr', {
    init: function () {
        this.el.sceneEl.enterVR();
    }
});


/* Sound
 Sound auf iOS zu spielen, egal in welchem Browser, benoetigt eine physische Benutzer Interaktion.
 Loesung: Audio Sprites mit Bibliothek Howler.js: https://github.com/goldfire/howler.js
 Note from: https://aframe.io/docs/0.8.0/components/sound.html
 Sound wird nach User Interaktion abgespielt*/
var sound = new Howl({
    src: ['sounds/wind.mp3'],
    autoplay: true,
    loop: true,
    volume: 2
});

sound.play();


/* event-animate Component 'event-animation': Animationen auf Klick bzw Look
*  mehrere Targets um mehrere Animationen mit einem Klick bzw mit Look auszulösen*/
AFRAME.registerComponent('event-animation', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        aevent: {default: 'animation1'},
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data = this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
        });
    }
});


/* Component 'visible-changer' entfernt Child Elemente */
AFRAME.registerComponent('visible-changer', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function (evt) {
            el.parentNode.removeChild(el);
        });
    }
});


/* Component 'score-counter' entfernt Child Elemente und zaehlt anschließend den Score +1 */
var score = 0;
AFRAME.registerComponent('score-counter', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function (evt) {
            el.parentNode.removeChild(el);
                score = score +1;
                console.log(score);
                var scoreEl = document.getElementById('scoredisplay');
                scoreEl.setAttribute('value', 'Score: ' + score);
        });
    }
});
