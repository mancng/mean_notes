//Require mongoose
var mongoose = require( 'mongoose' );

//Store model in variables
var Note = mongoose.model('Note');

module.exports = {
    getAllNotes: function(req, res){
        Note.find({}, function(err, question){
            if(err){
                console.log("Error getting all Notes", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({notes: note});
            }
        });
    },

    addNote: function(req,res){
        console.log(req.body)
        var note = new Note(req.body);

        note.save(function(err){
            if(err){
                console.log("Error while adding question");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully added"});
            }
        });
    }





};