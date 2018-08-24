export default {
    port: parseInt(process.env.NODE_PORT,10),
    db: {
      url: process.env.MONGODB_URL
    }
  };
