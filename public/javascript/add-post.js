let image = '';
async function newFormHandler(event) {
    event.preventDefault();



    const genre = document.querySelector('input[name="genre"]').value.trim();
    const artist = document.querySelector('input[name="artist"]').value.trim();
    const song = document.querySelector('input[name="song"]').value.trim();
    // const image = document.querySelector('input[name="image"]').value.trim();
    // const images = document.querySelector('input[name="images"]').value.trim();



    // const response = await fetch(`/api/posts/upload`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         images
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            genre,
            artist,
            song,
            image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


//uploading image
const cloud_name = 'dbepgsyve';
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
const CLOUDINARY_UPLOAD_PRESET = 'xcaowpi9';

const upload = ((event) => {
    const file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);


    const post = () => {
        console.log('start');
        axios(CLOUDINARY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            console.log(response.data.secure_url)
            image = response.data.secure_url
            document.querySelector('.btn').addEventListener('click', newFormHandler);

        }).catch(err => {
            console.log(err);
        })
    }
    post();

});

document.querySelector('#file_upload').addEventListener('change', upload);