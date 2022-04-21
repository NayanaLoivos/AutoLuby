    const express = require('express');

    app = express();

    app.use(express.json());
    app.use(express.urlencoded( { extended: true } ) );

    const port = 3004;

    app.get('/teste', (req, res) => res
        .status(200)
        .send({ mensagem: 'Olá API!'
    }));

    app.listen(port, () => console.log(`Servidor rodando na port ${port}`));

    module.exports = app;

