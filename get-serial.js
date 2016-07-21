var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/ttyACM0");

const state = {}

serialport.on('open', function() {
  console.log('Serial Port Opend');
  let dataString = '';
  const processLine = line => {
    if (line.indexOf('Box 1') >= 0) {
      state.box1 = Boolean(Number(line.split(':')[1]))
    }
    if (line.indexOf('Box 2') >= 0) {
      state.box2 = Boolean(Number(line.split(':')[1]))
    }
    if (line.indexOf('000') >= 0) {
      state.rfid = line
    }
  }
  const showData = () => {
    // console.log(dataString);
    const data = dataString.split('\n')
    data.forEach(processLine)
    console.log(state)
    dataString = '';
  }
  serialport.on('data', function(data) {
    const ds = data.toString();
    dataString += ds;
    if (dataString.indexOf('End') >= 0) {
      showData()
    }
  });
});
