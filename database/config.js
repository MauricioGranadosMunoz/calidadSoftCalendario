const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect( 'mongodb+srv://fideRunnerAdmin:4m0kRPQXbxRVT4Cu@fiderunnerstore.7hlns.mongodb.net/fideRunnerDB?retryWrites=true&w=majority' , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}