"use strict";
var mapOpen = document.querySelector(".map-open");
var mapPopup = document.querySelector(".index-map");
var loginOpen = document.querySelector(".login-btn a");
var loginPopup = document.querySelector(".login-popup");
var shadowOverlay = document.querySelector(".shadow-overlay");
if (mapPopup) {
    var mapClose = mapPopup.querySelector(".map-close-btn");
}
if (loginPopup) {
    var loginClose = loginPopup.querySelector(".login-close-btn");
    var loginField = loginPopup.querySelector("input[name=login]");
    var passwordField = loginPopup.querySelector("input[name=password]");
    var loginForm = loginPopup.querySelector("form");
}

var userLogin = localStorage.getItem("login");



if (mapPopup) {
    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.add("popup-show");
        shadowOverlay.classList.add("popup-show");
    });

    mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.remove("popup-show");
        shadowOverlay.classList.remove("popup-show");
    });
}

if (loginPopup) {

    loginOpen.addEventListener("click", function (event) {
        event.preventDefault();
        loginPopup.classList.add("popup-show");
        shadowOverlay.classList.add("popup-show");
        if (userLogin) {
            loginField.value = userLogin;
            passwordField.focus();
        } else {
            loginField.focus();
        }


    });

    loginClose.addEventListener("click", function (event) {
        event.preventDefault();
        loginPopup.classList.remove("popup-show");
        shadowOverlay.classList.remove("popup-show");
    });

    loginForm.addEventListener("submit", function (event) {
        if (!loginField.value || !passwordField.value) {
            event.preventDefault();
            if (loginField.value) {
                localStorage.setItem("login", loginField.value);
            }
        } else {
            localStorage.setItem("login", loginField.value);
        }
    });
}

shadowOverlay.addEventListener("click", function (event) {
    event.preventDefault();
    if (mapPopup) {
        if (mapPopup.classList.contains("popup-show")) {
            mapPopup.classList.remove("popup-show");
        }
    }
    if (loginPopup) {
        if (loginPopup.classList.contains("popup-show")) {
            loginPopup.classList.remove("popup-show");
        }
    }
    shadowOverlay.classList.remove("popup-show");
});
