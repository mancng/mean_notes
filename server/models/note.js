var mongoose = require( 'mongoose' );

//Define Note Schema
var NoteSchema = new mongoose.Schema({
    noteContent: { type: String, required: true, minlength: 2 }
}, { timestamps: true });

//Set model by passing their respective Schemas
mongoose.model('Note', NoteSchema);