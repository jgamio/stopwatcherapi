'strict'

const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../config.js');

const stopwatcherApiRouter = require('./components/stopwatcher/network');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/stopwatches/',stopwatcherApiRouter); 

app.listen(config.api.port, () => {
    console.log('Server is running on port ' + config.api.port);
});

