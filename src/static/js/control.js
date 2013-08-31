(function(window, io) {

    var ctrl = ctrl || {
        buttons: {
            top: document.getElementById('top'),
            left: document.getElementById('left'),
            right: document.getElementById('right'),
            bottom: document.getElementById('bottom')
        }
    },
    move = function(orientation, n) {
        this.emit('move', {
            orientation: orientation,
            n: n
        });
    },
    socket = io.connect(),
    click_move = function(fn) {
        var interval,
        released = false;
        this.addEventListener('mousedown', function(event){
            if(event.which === 1) { // left button
                interval = setInterval(fn,0);
                released = false;
            }
        });
        this.addEventListener('mouseup', function(event){
            if(event.which === 1) { // left button
                clearInterval(interval);
                released = true;
            }
        });
    },
    keyboard_move = function(key, fn) {
        var interval,
        released = true;
        this.addEventListener('keydown', function(event){
            if(released && event.which === key) {
                interval = setInterval(fn,0);
                released = false;
            }
        });
        this.addEventListener('keyup', function(event){
            if(event.which === key) {
                clearInterval(interval);
                released = true;
            }
        });
    },
    touch_move = (function() {
        // TODO: multiple touch

        var touches = {},
        touching = false;
        return function (fn) {
            this.addEventListener('touchstart', function(event){
                if(!touching) {
                    touches[event.touches[0].identifier] = setInterval(fn, 0);
                    touching = true;
                }
            });
            this.addEventListener('touchend', function(event){
                var touch;
                for(touch in touches) {
                    clearInterval(touches[touch]);
                    delete touches[touch];
                }
                touching = false;
            });
        };

    }());

    click_move.call(ctrl.buttons.top, function(){
        move.call(socket, 'top', 1);
    });

    click_move.call(ctrl.buttons.right, function(){
        move.call(socket, 'right', 1);
    });

    click_move.call(ctrl.buttons.left, function(){
        move.call(socket, 'left', 1);
    });

    click_move.call(ctrl.buttons.bottom, function(){
        move.call(socket, 'bottom', 1);
    });

    keyboard_move.call(window, 38, function(){ // 38 - up arrow
        move.call(socket, 'top', 1);
    });

    keyboard_move.call(window, 37, function(){ // 37 - left arrow
        move.call(socket, 'left', 1);
    });

    keyboard_move.call(window, 39, function(){ // 39 - right arrow
        move.call(socket, 'right', 1);
    });

    keyboard_move.call(window, 40, function(){ // 40 - down arrow
        move.call(socket, 'bottom', 1);
    });

    touch_move.call(ctrl.buttons.top, function(){
        move.call(socket, 'top', 1);
    });

    touch_move.call(ctrl.buttons.right, function(){
        move.call(socket, 'right', 1);
    });

    touch_move.call(ctrl.buttons.left, function(){
        move.call(socket, 'left', 1);
    });

    touch_move.call(ctrl.buttons.bottom, function(){
        move.call(socket, 'bottom', 1);
    });

}(window, io));