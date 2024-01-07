const mongoose = require("mongoose")

// mongodb+srv://fanaiinaallves:<password>@cluster0.f0yxpmp.mongodb.net/?retryWrites=true&w=majority

async function main(){
    try {
        mongoose.set("strictQuery", true);
        
        await mongoose.connect(
            "mongodb+srv://fanaiinaallves:q6k1cSA77pPI7lpb@cluster0.f0yxpmp.mongodb.net/?retryWrites=true&w=majority"
            )
        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main