var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/ttyACM0");
serialport.on('open', function() {
  console.log('Serial Port Opend');
  let dataString = '';
  const showData = ()=>{
	console.log(dataString);
	dataString = '';
  }
  serialport.on('data', function(data) {
	const ds = data.toString();
    dataString += ds;
    if(dataString.indexOf('End') >= 0 ){
		showData()
	}
  });
});
