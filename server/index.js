const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const properties = require('../pages/api/properties.json');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on('connect', (socket) => {
    const interval = setInterval(() => {
        const model = properties[Math.floor(Math.random() * properties.length)];
        socket.emit('property', { message: { model } });
    }, 1000);

    io.on('disconnect', () => clearInterval(interval));
});

nextApp.prepare().then(() => {
    app.get('*', nextHandler);

    server.listen(3000, (error) => {
        if (error) throw error;
        console.log(`> Ready on http://localhost:3000/`);
    });
});
