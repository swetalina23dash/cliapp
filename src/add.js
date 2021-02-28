const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});


 


module.exports = (args) => {

    if (args._[1] && args._[2]){
      
 
      client.set(args._[1], args._[2])
     
        console.log('Added')
   
     
    }else{
      console.log('NO Key or Value provided')
    }
    
  }