import React, { Component } from 'react';
import './App.css';
import HeaderBar from './componets/headerBar';
import BottomBar from './componets/bottomBar';
import ViewSelector from './componets/viewSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'selectedView': 3
    }
  }

  changeSelectedView(newView){
    this.setState({'selectedView':newView});
  }

  render() {
    return (
      <div className="rootElement">
        <HeaderBar name="GuiDest" />
        <ViewSelector selectedView={this.state.selectedView} />
        <BottomBar selectedView={this.state.selectedView} changeSelectedView={this.changeSelectedView.bind(this)}/>
      </div>
    );
  }
}

export default App;