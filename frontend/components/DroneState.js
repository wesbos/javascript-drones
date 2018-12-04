import { useState, useEffect } from 'react';
import socket from '../socket';
import Battery from './Battery';
import Tilt from './Tilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
  }, []);

  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
  }, []);
  return status;
}

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <div>
      <p>Status: {status}</p>
      <Battery battery={droneState.bat} />
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
      />
    </div>
  );
};

export default DroneState;
