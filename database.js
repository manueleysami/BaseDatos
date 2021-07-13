/*Modulos*/

const mongoose = require("mongoose") ;

/*Connection URI*/

const uri = "mongodb+srv://manueluni:manu123@cluster0.ew1hj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;

/*Connection DB*/

async function database() {
    try {
        await mongoose.connect(uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected") ;
        
    } catch (err) {
        console.error(err) ;
    } ;
} ;

database() ; 