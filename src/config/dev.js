export default {
  port: parseInt(process.env.NODE_PORT,10) || 3001,
  db: {
    url: process.env.MONGODB_URL || 'mongodb://localhost/polls_db'
  }
};
