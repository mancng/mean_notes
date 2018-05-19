var Note = require( './../controllers/notes.js' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

module.exports = function(app){

    //Notes
    app.get('/api/notes', Note.getAllNotes)
    app.post('/api/notes', Note.addNote)

    //Route all other routes to home
    app.all('*', (req, res, next) =>{
        res.sendFile(path.resolve( __dirname + '/../../mainApp/dist/index.html'));
    });


};