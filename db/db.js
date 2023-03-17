async function connect() {
  if (global.connection && global.connection.state !== 'disconnected') return global.connection;

  const mysql = require('mysql2/promise');
  try {
    const connection = await mysql.createPool(process.env.DATABASE_URL);
    console.log('Connected to MySQL!');
    global.connection = connection;
    return connection;
  } catch (error) {
    console.log('Fail to connect to MySQL!');
    return;
  }
}
const query = async (...q) => {
  const conn = await connect();
  const result = await conn.query(...q);
  return result[0];
};

module.exports = { connect, query };
