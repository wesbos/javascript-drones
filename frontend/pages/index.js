import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    font-size: 1rem;
  }
  * {
    font-weight: inherit;
  }
`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <DroneState />
    <Commands />
  </div>
);

export default IndexPage;
