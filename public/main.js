var socket = io();

socket.on('state-change', newState => console.log(newState));
