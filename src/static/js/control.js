(function(io) {

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
    socket = io.connect();

    ctrl.buttons.top.onclick = (function() {
        return function () {
            move.call(socket, 'top', 100);
        };
    }());

    ctrl.buttons.left.onclick = (function() {
        return function () {
            move.call(socket, 'left', 100);
        };
    }());

    ctrl.buttons.right.onclick = (function() {
        return function () {
            move.call(socket, 'right', 100);
        };
    }());

    ctrl.buttons.bottom.onclick = (function() {
        return function () {
            move.call(socket, 'bottom', 100);
        };
    }());

}(io));