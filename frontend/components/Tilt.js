import styled from 'styled-components';

const TiltWrap = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  text-align: center;
  display: grid;
  justify-content: center;
`;
const TiltStyles = styled.div`
  background-image: url('/static/drone.jpg');
  background-size: contain;
  width: 300px;
  height: 200px;
  /* transition: all 0.2s; */
  color: white;
  transform: rotateX(${props => props.pitch}deg)
    rotate(${props => props.yaw * -1}deg)
    rotateY(${props => props.roll * -1}deg);
  position: relative;
`;

const Tilt = ({ pitch, roll, yaw }) => (
  <TiltWrap>
    Pitch: {pitch}
    Roll: {roll}
    Yaw: {yaw}
    <TiltStyles pitch={pitch} roll={roll} yaw={yaw} />
  </TiltWrap>
);

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0,
};

export default Tilt;
