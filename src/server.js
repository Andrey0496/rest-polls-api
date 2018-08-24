import app from './app';
import appConfig from './config/';

export default app.listen(
    appConfig.port
    , () => console.log(`Running on localhost:${appConfig.port}`)
);