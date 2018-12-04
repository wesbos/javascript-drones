import socket from '../socket';

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}
const Commands = () => (
  <div>
    <button onClick={sendCommand('takeoff')}>Take Off</button>
    <button onClick={sendCommand('land')}>Land</button>
    <button onClick={sendCommand('up 20')}>Up 20cm</button>
    <button onClick={sendCommand('down 20')}>Down 20cm</button>
    <button onClick={sendCommand('right 120')}>Right 120cm</button>
    <button onClick={sendCommand('left 120')}>left 120cm</button>
    <button onClick={sendCommand('forward 20')}>forward 20cm</button>
    <button onClick={sendCommand('back 20')}>back 20cm</button>
    <button onClick={sendCommand('land')}>Land</button>
    <button onClick={sendCommand('flip l')}>Flip Left!</button>
    <button onClick={sendCommand('emergency')}>emergency</button>
    <button onClick={sendCommand('streamon')}>streamon</button>
  </div>
);

export default Commands;
