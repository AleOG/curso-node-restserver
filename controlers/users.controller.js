
//here I difine the controllers which control the response given by the server and edit the content of the response

const { response, request } = require('express')

const usuariosGet = (req, res = response) => {

    //In the case of having a route with query params (route?q=hola&nombre=alejandro&apikey=123456) I use req.query
    //I can define a param by default in case the request doesn't have it
    const {q, nombre = 'no name', apikey} = req.query;

    res.json({
        id: 1,
        api: "get api-controller",
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res) => {
    res.json({
        id: 1,
        api: "post contorller"
    });
}

const usuariosPut = (req, res) => {

    //Get the parameter from a request route
    const id = req.params.id;

    res.json({
        nombre: 1,
        api: "put controller",
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        id: 1,
        api: "patch controller"
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        id: 1,
        api: "delete controller"
    });
}


module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
 }