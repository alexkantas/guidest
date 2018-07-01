import React, { Component } from 'react';
import '../mapComponent.css';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        const defaultProps = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
        this.state = { lat: 35.34365 ,text:'none'}
    }

    addLat = () => {
        console.log('hi');
        this.setState(prevSt => ({
            lat: prevSt.lat + 0.0005
        }))
    }

    makeVisible = () => {
        console.log('hi1');
        this.setState(prevSt => ({
            text:'block'
        }))
    }

    makeNotVisible = () => {
        console.log('hi2');
        this.setState(prevSt => ({
            text:'none'
        }))
    }

    render() {
        const AnyReactComponent = ({ text }) => (
            <div style={{
                color: 'white',
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                height: '50px',
                width: '50px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                {text}
            </div>
        );

        const KoulesComponent = ({ text }) => (
            <img style={{
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translate(-50%, -50%)'
            }} src="/img/icons/koules.png" />
        );

        const ChanioportaComponent = ({ text }) => (
            <img style={{
                width: '32px',
                height: '32px',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translate(-50%, -50%)'
            }} src="/img/icons/chanioporta.png" />
        );

        const LoggiaComponent = ({ text }) => (
            <img style={{
                width: '32px',
                height: '32px',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translate(-50%, -50%)'
            }} src="/img/icons/loggia.png" />
        );

        const PouchComponent = ({ text }) => (
            <img style={{
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translate(-50%, -50%)',
                display:this.state.text
            }} src="/img/icons/treasure32.png" />
        );

        this.props = {
            center: { lat: 35.34365, lng: 25.1362015 },
            zoom: 14
        };

        return (
            <div className="ui grid mapComponent">
                <div className="three wide column">
                    <div className="ui vertical icon menu mapSidebar">
                        <a className="item" onClick={this.makeVisible}>
                            <i className="trophy icon"></i>
                        </a>
                        <a className="item" onClick={this.makeNotVisible}>
                            <i className="map marker alternate camera icon"></i>
                        </a>
                        <a className="item">
                            <i className="university icon"></i>
                        </a>
                        <a className="item">
                            <i className="bus icon"></i>
                        </a>
                    </div>
                </div>
                <div className="thirteen wide column noPadding">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyD4N_qmhJ0yn-cfGaZ7WaPMbvlbH15eqiE' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <KoulesComponent
                            onClick={this.addLat}
                            lat={35.344678}
                            lng={25.136997}
                        />

                        <ChanioportaComponent
                            onClick={this.addLat}
                            lat={35.337006}
                            lng={25.124860}
                        />

                        <LoggiaComponent
                            onClick={this.addLat}
                            lat={35.339841}
                            lng={25.133981}
                        />
                        
                        <PouchComponent
                            onClick={this.addLat}
                            lat={35.335452}
                            lng={25.136887}
                        />
                        
                        <PouchComponent
                            onClick={this.addLat}
                            lat={35.352109}
                            lng={25.155973}
                        />
                        
                        <PouchComponent
                            onClick={this.addLat}
                            lat={35.332671}
                            lng={25.130362}
                        />
                        
                        <PouchComponent
                            onClick={this.addLat}
                            lat={35.339061}
                            lng={25.133198}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default MapComponent;