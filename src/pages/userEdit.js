
import React, { useState } from 'react';
import { baseurl } from '../base/baseUrls';
import axios from 'axios';
import {Avatar, Input, Button} from 'antd';


function ProfilePageEdit() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [userInfo, setUserInfo] = useState({});
   

    function handleChangeImage(event) {
        setSelectedFile(event.target.files[0]);
    }

    function handleSubmit() {
        const formData = new FormData();
        formData.append('file', selectedFile);
        const token = localStorage.getItem('token');
        console.log(token+'este es el token')

        
        
        axios.post(`http://198.251.65.152:8080/api/usuario/uploadFile`,formData, {

              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `${localStorage.getItem('token')}`,
  
              },
         
        }, )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <Avatar src={userInfo.image}>
                {userInfo.name ? userInfo.name[0] : null}
            </Avatar>
            <Input type="file" onChange={handleChangeImage} />
            <Button onClick={handleSubmit}>Cambiar imagen</Button>
        </div>
    );
}

export default ProfilePageEdit;
