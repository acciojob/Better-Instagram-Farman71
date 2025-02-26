document.addEventListener("DOMContentLoaded", function () {
    let draggedElement = null;
    let draggedImage = "";

    let images = document.querySelectorAll(".image");
    images.forEach(image => {
        image.addEventListener("dragstart", function (e) {
            draggedElement = this;
            draggedImage = this.style.backgroundImage;
            e.dataTransfer.setData("text/plain", "dragging"); // Required for drag and drop to work
        });

        image.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        image.addEventListener("drop", function (e) {
            e.preventDefault();
            if (draggedElement !== this) {
                let tempImage = this.style.backgroundImage;
                this.style.backgroundImage = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = tempImage;
            }
        });
    });
});