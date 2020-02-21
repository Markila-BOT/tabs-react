import React from 'react';
import Main from './components/Main/Main';
import Routes from './components/Routes/Routes';
import { Grid } from './styledComponents';

function App() {
  return (
    <div className="mainContainer">
      <div className="tabContainer">
        <div className="componentsContainer">
          <Grid>
            <Main />
            <Routes />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
