const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds245762.mlab.com:45762/nofood'
    }
}

module.exports = variables;