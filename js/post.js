class Post {
    constructor(contentEl, navItemEl) {
        this.contentEl = contentEl;
        this.navItemEl = navItemEl;
    }

    // TODO: update to take content HTML file and inject it into the page
    // so that I don't have to write directly onto the page.
    static create(title, contentEl, selected) {
        const itemEl = document.createElement('li');
        itemEl.innerHTML = title;
        itemEl.addEventListener('click', () => {
            contentEl.scrollIntoView({ behavior: 'smooth' });
        });
        selected ? itemEl.classList.add("selected") : null;

        return new Post(contentEl, itemEl);
    }

    /**
     * Checks whether a given HTMLElement is currently in view.
     * @param {HTMLElement} el the element to check.
     * @returns {boolean} representing whether the element is in view.
     */
    contentInView() {
        const windowTop = window.scrollY;
        const windowBottom = window.scrollY + window.innerHeight;
        const elementTop = window.scrollY + this.contentEl.getBoundingClientRect().top;
        const elementBottom = elementTop + this.contentEl.offsetHeight;
        
        const fullScreen = windowTop >= elementTop && windowBottom <= elementBottom;
        const topWithinView = windowTop <= elementTop && windowBottom >= elementTop;
        const bottomWithinView = windowTop <= elementBottom - 1 && windowBottom >= elementBottom;

        return fullScreen || topWithinView || bottomWithinView;
    }

    setSelected() {
        this.navItemEl.classList.add("selected");
    }

    setUnselected() {
        this.navItemEl.classList.remove("selected");
    }
}