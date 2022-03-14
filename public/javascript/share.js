console.log(window.location.href);
facebook = document.getElementById("facebook");
twitter = document.getElementById("twitter");
linkedin = document.getElementById("linkedin");
copy = document.getElementById("copy");

const b = window.location.href;
facebook.addEventListener("click", () => {
    let url = `https://www.facebook.com/sharer/sharer.php?u=${b}!`
    location.href = url
    console.log(url);

})

twitter.addEventListener("click", () => {

    location.href = `https://twitter.com/intent/tweet?text=Awesome%20Blog!&url=${b}`

})

linkedin.addEventListener("click", () => {

    location.href = `https://www.linkedin.com/sharing/share-offsite/?url=${b}`

})

copy.addEventListener("click", () => {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("URL Copied.");
})