import io from 'socket.io-client';

const socket = io('http://localhost:6767');

export default socket;
