const express = require('express');
const cors = require('cors');
const port = 3015;
const app = express();

app.use(express.json());
app.use(cors());


app.listen(port, () => console.log('Server is UP and listen on port ' + port));
