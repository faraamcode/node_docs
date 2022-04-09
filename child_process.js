const {spawn} = require("child_process");

const ls = spawn('ls', ['-la']);

ls.stdout.on('data', (data)=>{
  console.log(`my list,${data}`);
})