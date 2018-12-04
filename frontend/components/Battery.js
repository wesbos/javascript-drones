import styled from 'styled-components';

const BatteryStyles = styled.div`
  width: 100px;
  height: 200px;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 0 10px #1af21a;
  .batteryLevel {
    height: ${props => props.level}%;
    text-align: center;
    color: white;
    display: block;
    background: ${props => (props.level > 20 ? '#1af21a' : '#bb0707')};
  }
`;

const Battery = props => (
    <BatteryStyles level={props.battery}>
      <span className="batteryLevel">{props.battery}%</span>
    </BatteryStyles>
  );

Battery.defaultProps = {
  battery: 'LOADING',
};

export default Battery;
