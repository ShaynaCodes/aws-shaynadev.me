async function updateVisitorCount(){
    const apiUrl = "https://flgl7tbpcl.execute-api.us-east-1.amazonaws.com/prod/visitorCounter";
    try{
        // const response = await fetch(apiUrl);
        await fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => document.getElementById("visitor_count").innerText = json)
        //document.getElementById("visitor_count").innerText =response.json();
    }
    catch(error){
        console.error("Error fetching visitor count: ", error);
    }
}
document.addEventListener("DOMContentLoaded", updateVisitorCount);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; 
    document.querySelector("header").appendChild(menuToggle);

    const closeButton = document.createElement("div");
    closeButton.classList.add("menu-close");
    closeButton.innerHTML = "&times;";
    closeButton.style.display = "none";
    document.querySelector("header").appendChild(closeButton);

    const nav = document.querySelector("nav");
    nav.style.transition = "all 0.3s ease-in-out";
    
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        if (nav.classList.contains("active")) {
            nav.style.display = "flex";
            nav.style.width = "80%";
            nav.style.maxWidth = "300px";
            nav.style.padding = "10px";
            menuToggle.style.display = "none";
            closeButton.style.display = "block";
        }
    });

    closeButton.addEventListener("click", function () {
        nav.classList.remove("active");
        nav.style.display = "none";
        menuToggle.style.display = "block";
        closeButton.style.display = "none";
    });

    function checkScreenSize() {
        if (window.innerWidth > 995) {
            menuToggle.style.display = "none";
            closeButton.style.display = "none";
            nav.style.display = "flex";
            nav.style.width = "auto";
            nav.style.maxWidth = "none";
            nav.classList.remove("active");
        } else {
            menuToggle.style.display = "block";
            closeButton.style.display = "none";
            nav.style.display = "none";
            nav.style.width = "80%";
            nav.style.maxWidth = "300px";
            nav.style.padding = "10px";
        }
    }
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
