import React from 'react'
import axios, { post } from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class UploadForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
            NotificationManager.success(response.data.responseText, 'Title here');
        })
    }
    goLive=()=>{
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
            alert(response.data.responseText);
            NotificationManager.success(response.data.responseText, 'Title here');
        })
    }

    onChange(e) {
        console.log('change');
        // NotificationManager.info('wait');
        const img = e.target.files[0];
        console.log(img);
        //img.setAttribute("name", "vrimage");
        this.setState({ file: img })
        // this.goLive(this.state.file)
    }
    fileUpload(file) {
        const url = 'http://localhost:5056/';
        const formData = new FormData();
        formData.append('vrimage', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        }
        console.log(formData);
        return post(url, formData, config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="changeCamera" name="vrimage">
                <label className="att-each">
                    <input type="file" name="vrimage" style={{display:'none'}} id="vrimage" onChange={this.onChange} />
                </label>
                <button type="submit" name="vrimage" className="ui icon big button"><i className="ui eye icon"></i></button>
                <NotificationContainer/>
            </form>
        )
    }
}



export default UploadForm;