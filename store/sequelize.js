//const config = require('../config');
const { Sequelize, Model, DataTypes,QueryTypes } = require('sequelize');

// conection
let sequelize;

function handleCon() {

    //sequelize = new Sequelize(config.postgresql.database,config.postgresql.user, config.postgresql.password, {
    sequelize = new Sequelize(process.env.POSTGRESQL_DATABASE,process.env.POSTGRESQL_USER, process.env.POSTGRESQL_PASSWORD, {
        //host: config.postgresql.host,
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

}

handleCon();

async function postItem(table,data) {
    
    const User = sequelize.define('stopWatcherRecords', {
        timeInit: Sequelize.TIME,
        timeEnd: Sequelize.TIME,
    
    });    

    console.log('Body',data);
    const user = await User.create({
        timeInit: data.timeInit,
        timeEnd: data.timeEnd,
      });
   
}

function getList(table,id) {

    return new Promise( (resolve, reject) => {

        const User = sequelize.define('stopWatcherRecords', {
            timeInit: Sequelize.TIME,
            timeEnd: Sequelize.TIME,
        });    
        User.findAll({ attributes: ['timeInit', 'timeEnd'] })
                .then(users => {
                    console.log('List',users);
                    //return users;
                    resolve(users);
        
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
