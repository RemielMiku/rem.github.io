fetch("https://api.github.com/repos/RemielMiku/rem.github.io/content/art")
    .then(response => response.json())
    .then(files => {

    for (let i = 0; i < files.length; i++) {
        const image = document.createElement("img");
        image.src = files[i].download_url;
        image.style.objectFit = "cover";
        document.body.appendChild(image);
    }

});