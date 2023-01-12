const input = document.querySelector("input");
const searchBtn = document.querySelector(".search");
const qrcode = document.querySelector("#qrcode-img");

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(!input.value) {
        modal.classList.add("open-modal");
        closeBtn.addEventListener("click", function () {
            modal.classList.remove("open-modal");
        });
        return false;
    }

    genQRCode();
});

function genQRCode() {
    if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    input.value= "";
}
