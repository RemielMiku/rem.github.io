    document.addEventListener("DOMContentLoaded", () => {
    const glassEffect = liquidGL({
        target: ".buttons, #gallery",
        snapshot: "body",

        resolution: 1,
        refraction: 0.015,

        bevelDepth: 0.08,
        bevelWidth: 0.1,

        frost: 1,

        shadow: true,
        specular: false,

        reveal: "fade",

        tilt: false,
        magnify: 1
    });
});

////////////////////
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