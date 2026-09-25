const wrapper = document.querySelector(".form-container");
const log_link = document.querySelector(".login-link");
const reg_link = document.querySelector(".register-link");
const login_btn = document.querySelector(".login-btn");
const close_btn = document.querySelector(".close-icon");

reg_link.addEventListener("click", () => {
  wrapper.classList.add("active");
});

log_link.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

login_btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

close_btn.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
