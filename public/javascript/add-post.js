async function newFormHandler(event) {
    event.preventDefault();



    const genre = document.querySelector('input[name="genre"]').value.trim();
    const artist = document.querySelector('input[name="artist"]').value.trim();
    const song = document.querySelector('input[name="song"]').value.trim();
    const image = document.querySelector('input[name="image"]').value.trim();
    const wishlist = document.querySelector('input[name="wishlist"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            genre,
            artist,
            song,
            image,
            wishlist
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

document.querySelector('.btn').addEventListener('click', newFormHandler);