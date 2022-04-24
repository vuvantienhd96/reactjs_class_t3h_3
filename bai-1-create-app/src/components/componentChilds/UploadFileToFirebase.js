import { Avatar, Box, Button } from '@mui/material';
import React from 'react';
import { storage } from './../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function UploadFileToFirebase({
    id,
    handleGetImage
}) {

    const [img, setImg] = React.useState(null);
    const [urlImg, setUrlImg] = React.useState(null);

    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    }

    const submit = () => {
        const imgRef = ref(storage, id);
        uploadBytes(imgRef, img).then(() => {
            getDownloadURL(imgRef).then(elUrl => 
                {
                    setUrlImg(elUrl);
                    handleGetImage(elUrl)
                }
            
            ).catch(err => console.log(err.message)); // get image error
            setImg("");

        }
        ).catch(err => console.log(err.message)); // get  image upload error
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <input type='file' onChange={handleImage} />
            {urlImg && <Avatar alt={urlImg} src={urlImg} />}
            <Button variant="contained" onClick={submit}>Upload file</Button>
        </Box>
    )
}
