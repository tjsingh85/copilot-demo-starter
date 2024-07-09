const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Corrected path
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
