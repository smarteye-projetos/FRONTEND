import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';
import Camera from './pages/Camera';
import Wifi from './pages/Wifi';
import Bluetooth from './pages/Bluetooth';
import RFID from './pages/RFID';
import GPRS from './pages/GPRS';



function App() {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Camera} />
        <Route path="/camera"component={Camera} />
        <Route path="/wifi" exact component={Wifi} />
        <Route path="/bluetooth" exact component={Bluetooth} />
        <Route path="/rfid" exact component={RFID} />
        <Route path="/gprs" exact component={GPRS} />
      </Switch>
    </BrowserRouter>   
  </>);
}

export default App;