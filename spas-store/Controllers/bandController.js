const db = require("../models");
const sequelize = require('sequelize');

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.sequelize.query("SELECT * FROM `Swags`", { type: db.sequelize.QueryTypes.SELECT })
            .then(swag => {
                // We don't need spread here, since only the results will be returned for select queries
                console.log('here are all the swags ', swag);
            })
    },
    findById: function (req, res) {

    },
    create: function (req, res) {

    },
    update: function (req, res) {

    },
    remove: function (req, res) {

    }
};