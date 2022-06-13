module.exports = (sequelize, type) => ({
    firstname: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

