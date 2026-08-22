
const gallery = document.getElementById("gallery");

fetch("art/imagedata.json")
    .then(response => response.json())
    .then(art => {
    
    art.sort((a, b) => {
        return new Number(b.index) - new Number(a.index);
    });
    
    for (let i = 0; i < art.length; i++) {
        const image = document.createElement("img");
        
        image.src = art[i].path;
        image.alt = art[i].title;
        
        gallery.appendChild(image);
    }

});