const express = require('express')
const cors = require('cors')

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //define the server routes
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //when the constructor is call then the routes method is activated
        this.routes();
    }

    middlewares() {
        this.app.use( cors() )

        //Lecture and parse of the body (server info) in JSON
        this.app.use( express.json() )

        //public directory
        this.app.use( express.static('public') );


    }

    //define a method for the connection routes
    routes() {
        //this configuration fix the route path in /api/usuarios and it calls the route methods found in the path /routes/user.routes
        this.app.use( this.usuariosPath , require('../routes/users.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        })
    }
}

module.exports = Server