const express = require('express');

const app = express();

app.listen({ port: 2023 }, async () => {
    console.log("Server started at port 2023");
});