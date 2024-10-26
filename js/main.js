// Sets scrolling behaviour
document.getElementById("body").onscroll = async () => {
    // Updates nav items as selected if the content is in view
    for (const post of posts) {
        post.contentInView() ? post.setSelected() : post.setUnselected();
    }

    // Configures parallax for section headers
    for (const target of document.getElementsByClassName("photo-parallax-container")) {
        const windowBottom = window.innerHeight + window.scrollY;
        const elementTop = window.scrollY + target.getBoundingClientRect().top;
        
        if (windowBottom > elementTop) {
            const offset = elementTop;
            const yvalue = (window.scrollY * 0.3) + offset;
            target.style.backgroundPosition = "center " + yvalue + "px";
        }
    }
}
