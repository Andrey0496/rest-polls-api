import mongoose from "mongoose";
import Promise from 'bluebird';
import config from '../config';

mongoose.Promise = Promise

export default  async () => {
    const { db: { url } } = config
    await mongoose.connect(url,{ useNewUrlParser: true });

    mongoose.connection.on(
        'connected'
        , () => console.log(`Mongoose default connection is open to ${url}`)
    );

    mongoose.connection.on(
        'error'
        , (err) => console.log(`Mongoose default connection has occured ${err} error`)
    );

    mongoose.connection.on(
        'disconnected'
        , () =>console.log("Mongoose default connection is disconnected")
    );

    process.on(
        'SIGINT'
        , () => mongoose.connection.close(() => {
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0);
        })
    );
}
