exports.success = function(req,res,message,status) {

    let statusCode = status || 200;
    let statusMessage = message || 'success';

    res.status(status).send({
        status: statusCode,
        body: statusMessage,
        error :false
    });

};

exports.error = function(req,res,message,status) {

    let statusCode = status || 500;
    let statusMessage = message || 'Internal server error';

    res.status(status).send({
        status: statusCode,
        body: statusMessage,
        error :true
    });

};