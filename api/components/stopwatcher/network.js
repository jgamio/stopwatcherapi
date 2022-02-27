const express = require('express');
const route = express.Router();

const Controller = require('./index');
const response = require('../../../network/response');

route.get('/records',getList );
route.post('/records',postItem );

function postItem (req, res, next) {
 
  Controller.postItem(req.body)
  .then((data) => {
    response.success(req, res, data, 201);
  })
  .catch(next);

}

function getList(req, res, next) {

  Controller.getList()
  .then((listData) => {
    response.success(req, res, listData, 200);
  }).catch(next);

}

module.exports = route;