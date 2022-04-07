const express = require ('express');

const app = express();

const path = require ('path')

const port = 3000

app.listen(port, () => console.log("Servidor corriendo en el puerto 3000"))


//////////////////////////////////////////////////////////////////

app.use(express.static('public'))



app.get("/babbage", (req, res) => {

    res.sendFile(path.join(__dirname, "./views/babbage.html"))
    
})

///////////////////////////////////////////////////////////////////