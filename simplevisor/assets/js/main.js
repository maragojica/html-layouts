document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const currentlyActive = document.querySelector(".accordion-header.active");
            
            if (currentlyActive && currentlyActive !== this) {
                currentlyActive.classList.remove("active");
                const activeContent = currentlyActive.nextElementSibling;
                activeContent.style.maxHeight = "0";
                activeContent.classList.remove("open");
            }

            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove("open");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add("open");
            }
        });
    });
});