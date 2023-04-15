// Modal
const modalBtn = document.getElementById('modal-button');
const modal = document.getElementById('modal-popup');

modalBtn.onclick = function () {
    modal.classList.toggle("open");
}

// // Modal close button

const closeBtn = document.getElementById('close-button');

closeBtn.onclick = function () {
    modal.classList.toggle("open");
}
console.log("Hello")