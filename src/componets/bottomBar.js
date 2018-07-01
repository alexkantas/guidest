import React, { Component } from 'react';
import BarButton from "./barbutton";

class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentView = this.props.selectedView;

        return (
            <footer className="ui bottom fixed menu">
                <div className="ui four buttons">
                    <BarButton iconClass="profpic" isActive={currentView === 0} onClick={() => { this.props.changeSelectedView(0) }} />
                    <BarButton iconClass="labyrinth" isActive={currentView === 1} onClick={() => { this.props.changeSelectedView(1) }} />
                    <BarButton iconClass="mytrip" isActive={currentView === 2} onClick={() => { this.props.changeSelectedView(2) }} />
                    <BarButton iconClass="recocam" isActive={currentView === 3} onClick={() => { this.props.changeSelectedView(3) }} />
                </div>
            </footer>
        );
    }
}

export default BottomBar;