const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    port: 9000
  },
  database: {
    url: 'mongodb://admin2:svdbcon2@ds237770.mlab.com:37770/salvus-health-db',
    properties: {
      useMongoClient: true
    }
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpireInMinutes: 1440
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  }
};
