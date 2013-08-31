Move the ball
=============

This is a simple socket.io client-server application that allows to control the movements of an object on the screen.

Installation
============

First of all you need to have [nodejs](https://github.com/joyent/node) installed.

After installing nodejs, just clone this repository and then run the following command:

```npm install```

This will install the dependencies (express and socket.io).

How to run
==========

To run this application just execute the following command:

```node src/app.js``` (well, this is a temporary way, I swear that I will create create a build script).

Now you can access the screen containing the red ball at [http://localhost:8080](http://localhost:8080) and you also can access the control screen at [http://localhost:8080/control.html](http://localhost:8080/control.html).

What if I need to change the port?
==================================

Well, that is pretty simple, just edit the file [src/app.js](src/app.js) and change the variable ```port``` to the port that you want to use!

Contributing
============

If you want to improve this or add some features, fork and send me a pull request!

Changelog
=========

31/08/2013 - First commit with basic ball movements by click
31/08/2013 - Added keyboard events to move the ball. Thanks [@henvic](https://github.com/henvic).
