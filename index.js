    const express = require('express');
    const routes = require('./routes');

    app = express();
    const port = 3004;    

    routes(app);

    app.listen(port, () => console.log(`Servidor rodando na port ${port}`));

    module.exports = app;

