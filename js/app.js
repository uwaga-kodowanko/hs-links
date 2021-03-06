function changeTitle() {
    const message = "Wpadnij do nas!";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

const init = function() {
    changeTitle();
};

document.addEventListener("DOMContentLoaded", init);
