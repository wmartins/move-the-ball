(function() {

    var move = function (orientation, n) {

        var base = {
            bottom: 'top',
            right: 'left'
        },
        n = base[orientation] ? n : n * -1,
        orientation = base[orientation] || orientation;

        this.style[orientation] = (parseInt(this.style[orientation]) || 0) + n + 'px';

    },
    target = document.getElementById('red-circle'),
    socket = io.connect();

    socket.on('move', function (data){
        move.call(target, data.orientation, data.n);
    });

}());