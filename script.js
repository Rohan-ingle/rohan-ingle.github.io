function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Function to adjust the video scroll speed
function scrollVideo() {
    const video = document.getElementById('video-background');
    const scrollSpeed = 0.2; // Adjust the scrolling speed as needed

    const yPos = -(window.scrollY * scrollSpeed);
    video.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
}
