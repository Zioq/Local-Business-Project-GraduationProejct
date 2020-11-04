// Configureation depends on application mode(Production Mode / Development Mode)
if(process.env.NODE_ENV=== 'production') {
    module.exports  = require('./prod');
} else {
    module.exports  =require('./dev');
}