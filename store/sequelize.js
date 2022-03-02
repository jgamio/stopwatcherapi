const config = require('../config');
const { Sequelize, Model, DataTypes,QueryTypes } = require('sequelize');

let sequelize;

    sequelize = new Sequelize(process.env.POSTGRESQL_DATABASE,process.env.POSTGRESQL_USER, process.env.POSTGRESQL_PASSWORD, {
        host: process.env.POSTGRESQL_HOST,
        dialect: 'postgres',
    });

    sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });


async function postItem(table,data) {
    
    const Model = require(`${__dirname}/../models/${table}`)(sequelize)

    console.log(data);
    const item = await Model.create(data);
}

function getList(table,id) {

    return new Promise( (resolve, reject) => {

        const Model = require(`${__dirname}/../models/${table}`)(sequelize)

        //Model.findAll({ attributes: ['id','timeInit', 'timeEnd'] })
        Model.findAll( )
            .then(items => {
                    resolve(items);
                })
                .catch(err => {
                    return reject(err);
            });
    });
}

module.exports = {
    getList,
    postItem
};
