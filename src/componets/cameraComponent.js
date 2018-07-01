import React, { Component } from 'react';
import Webcam from 'react-webcam';
import '../cameraComponent.css';
import UploadForm from './uploadForm'

class CameraComponent extends Component {
    constructor(props) {
        super(props);
        let facingMode = Boolean(localStorage.getItem('facingMode') === "true");
        console.log('On...', facingMode);
        this.state = { "imageSrc": '', facingMode };
    }

    changeFacingMode = () => {
        this.setState(prevSt => {
            console.log('Off0.5', !prevSt.facingMode);
            localStorage.setItem('facingMode', !prevSt.facingMode);
            console.log('Off...', localStorage.getItem('facingMode'));
            return { facingMode: !prevSt.facingMode }
        });
        window.location.reload();
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({ imageSrc })
    };

    handleUserMedia = () => {
        const exact = this.state.facingMode ? 'environment' : 'users';

        const videoTrack = this.webcam.stream.getVideoTracks()[0];
        const constraints = videoTrack.getConstraints();
        constraints.facingMode = { exact };
        videoTrack.applyConstraints(constraints);
    }

    render() {
        let videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: this.state.facingMode === true ? 'environment' : 'user'
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
                <div className="changeCamera">
                    <i className="circular inverted sync alternate big icon" onClick={this.changeFacingMode}></i>
                </div>
                <UploadForm/>
            </div>
        );
    }
}

export default CameraComponent;