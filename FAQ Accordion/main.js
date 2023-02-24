const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((header) => {
    header.addEventListener("click", (event) => {
        const currentActive = document.querySelector(
            ".accordion-item-header.active"
        );
        if (currentActive && currentActive !== header) {
            currentActive.classList.toggle("active");
        }
        header.classList.toggle("active");
    });
});
