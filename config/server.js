// Available to Server, not available to Client
module.exports = {
  APPLICATION_ID: process.env.APPLICATION_ID || 'REPLACE WITH UNSPLASH APP ID',
  SECRET: process.env.SECRET || 'REPLACE WITH UNSPLASH APP SECRET',
  CALLBACK_URL: 'http://localhost:5000'
}
