"use strict"

const modalMain = document.getElementById("modal_main");
const btn = document.getElementsByClassName("btn btn_danger modal__close show-success")[0];
const modalSuccess = document.getElementById("modal_success");
const closeBtn = document.getElementsByClassName("modal__close modal__close_times")[0];
const closeBtnAgain = document.getElementsByClassName("modal__close modal__close_times")[1];

modalMain.classList.add("modal_active");

function pushCloseBtn() {
	modalMain.classList.remove("modal_active");
};

function pushTheBtn() {
	modalSuccess.classList.add("modal_active");
}



btn.onclick = pushTheBtn;
closeBtn.onclick = pushCloseBtn;
closeBtnAgain.onclick = pushCloseBtn;