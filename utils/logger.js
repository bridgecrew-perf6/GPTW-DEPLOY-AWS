const {createLogger,transports,format, transport} = require('winston');
const { combine, timestamp, level,printf,metadata } = format;
require('winston-mongodb');

const myFormat = printf(({level,message,timestamp}) => {
    return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
    transports:[
        new transports.Console({
            level:'info',
            format:combine(timestamp({format:"HH:mm:ss"}),myFormat),   
        }),
        new transports.MongoDB({
            level:'error',
            defaultMeta: { service: 'user-service' },
            db:'mongodb://localhost:27017/gptw',
            options: { useUnifiedTopology: true },
            collection:'errorLogs',
        }),
    ],
    exceptionHandlers: [
        new transports.File({ 
            filename: 'exceptions.log',
            level: 'error',
            format: combine(timestamp({format:"HH:mm:ss"}),myFormat),
        }),
      ],
    rejectionHandlers: [
        new transports.File({ 
            filename: 'rejections.log',
            level: 'error',
        }),
      ]
});


module.exports = logger;