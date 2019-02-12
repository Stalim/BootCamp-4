//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://admin:4m4nd4te4mo@ds143953.mlab.com:43953/elchulopa', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};
