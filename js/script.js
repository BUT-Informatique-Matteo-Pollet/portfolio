
window.onload=function(){
    document.getElementById("burger").addEventListener('click', function() {
        document.getElementById("burger").classList.add("cache");
        document.getElementById("cross").classList.remove("cache");
        document.getElementById("blur").classList.remove("cache");
    }, false);
    document.getElementById("cross").addEventListener('click', function() {
        document.getElementById("burger").classList.remove("cache");
        document.getElementById("cross").classList.add("cache");
        document.getElementById("blur").classList.add("cache");
    }, false);
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page==="index.html"){
        document.getElementById("bulbhome").classList.remove("cache");

    }
    if(page==="contact.html"){
        document.getElementById("bulbcontact").classList.remove("cache");
    }
    // Récupérer l'élément du cercle
    const circle = document.querySelector('.circle');

// Ajouter un événement de souris à l'élément body pour suivre le mouvement de la souris
    document.body.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;

        // Déplacer le cercle en fonction des coordonnées de la souris
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
}

