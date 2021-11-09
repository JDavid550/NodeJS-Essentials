const {exec} = require('child_process');
const { exitCode, stdout, stderr } = require('process');

exec('dir',(err,stdout, stderr) =>{
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout)
})