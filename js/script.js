window.onscroll = function() {
    const btn = document.getElementById("btnSubir");
    btn.style.display = (window.scrollY > 300) ? "block" : "none";
};

function irArriba() {
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
}
