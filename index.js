const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        success: true
    });
});

app.listen(8080, () => {
    console.log("Serveur en écoute sur le port 8080....");
})