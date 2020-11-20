import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';
import Camera from './pages/Camera';
import Wifi from './pages/Wifi';
import Bluetooth from './pages/Bluetooth';
import RFID from './pages/RFID';
import GSM from './pages/GSM';
import PIR from './pages/PIR';



function App() {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Camera} />
        <Route path="/camera"component={Camera} />
        <Route path="/wifi" exact component={Wifi} />
        <Route path="/bluetooth" exact component={Bluetooth} />
        <Route path="/rfid" exact component={RFID} />
        <Route path="/gsm" exact component={GSM} />
        <Route path="/pir" exact component={PIR} />
      </Switch>
    </BrowserRouter>   
  </>);
}

export default App;