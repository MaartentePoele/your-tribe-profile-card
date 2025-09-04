const button = document.querySelector("button");

button.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("light");
    document.querySelector("article").classList.toggle("profile-card-light");
});

