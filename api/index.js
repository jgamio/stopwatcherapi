const express = require ('express');
const bodyParser = require('body-parser');
const config = require('../config.js');

const stopwatcherApiRouter = require('./components/stopwatcher/network');

const app = express();
app.use(bodyParser.json());

app.use('/api/stopwatches/',stopwatcherApiRouter); 
//app.use(errors);

app.listen(config.api.port, () => {
    console.log('Server is running on port ' + config.api.port);
});

