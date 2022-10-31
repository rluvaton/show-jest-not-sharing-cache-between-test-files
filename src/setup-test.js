const { request } = require('undici');
const { startServer } = require('./server');

async function isServerRunning() {
  try {
    await request('http://localhost:7777');
    return true;
  } catch (error) {
    // Can't connect - meaning server is down
    if(error.code === 'ECONNREFUSED') {
      return false;
    }

    throw error;
  }
}

beforeAll(async () => {
  if(!await isServerRunning()) {
    await startServer();
  }
})
