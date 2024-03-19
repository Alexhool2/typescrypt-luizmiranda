// type assertions

const body = document.querySelector("body");

const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

const input = document.querySelector(".input") as HTMLInputElement;
