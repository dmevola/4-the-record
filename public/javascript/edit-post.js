async function editFormHandler(event) {
    event.preventDefault();

    const genre = document.querySelector('input[name="genre"]').value.trim();
    const artist = document.querySelector('input[name="artist"]').value.trim();
    const title = document.querySelector('input[name="title"]').value.trim();
    const image_name = document.querySelector('input[name="image_name"]').value.trim();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            genre,
            artist,
            title,
            image_name
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response);

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);