
let mail = 'akotu@protonmail.com';
let github = 'https://github.com/akotu235'
let linkedin = 'https://www.linkedin.com/in/andrzej-kotulski'
let facebook = 'https://www.facebook.com/andrzej.kotulski.23'
let messenger = 'https://m.me/andrzej.kotulski.23'
let msm = 'https://pipefish-ruling-mink.ngrok-free.app/message'
let projectPage = 'https://github.com/akotu235/akotu235.github.io'
let githubPages = 'https://pages.github.com'
let home = 'https://pipefish-ruling-mink.ngrok-free.app'
let discord = 'https://discord.com/users/akotu#6949'
let telegram = 'https://t.me/andrzej235'
let snapchat = 'https://www.snapchat.com/add/endriu235'
let instagram = 'https://www.instagram.com/endrju235'
let spotify = 'https://open.spotify.com/user/31e6si4vgpevgczlmqkr3jzvdxsy?si=e8a6eb2aade24995'
let steam = 'https://steamcommunity.com/profiles/76561197996603058'
let tinder = 'https://tinder.com/@endrjuu'


document.getElementById("github").onclick = function () {
    window.open(github, "_blank");
};
document.getElementById("messenger").onclick = function () {
    window.open(messenger, "_blank");
};
document.getElementById("msm").onclick = function () {
    window.open(msm, "_blank");
};
document.getElementById("home").onclick = function () {
    window.open(home, "_blank");
};
document.getElementById("facebook").onclick = function () {
    window.open(facebook, "_blank");
};
document.getElementById("telegram").onclick = function () {
    window.open(telegram, "_blank");
};
document.getElementById("snapchat").onclick = function () {
    window.open(snapchat, "_blank");
};
document.getElementById("instagram").onclick = function () {
    window.open(instagram, "_blank");
};
document.getElementById("spotify").onclick = function () {
    window.open(spotify, "_blank");
};
document.getElementById("steam").onclick = function () {
    window.open(steam, "_blank");
};
document.getElementById("tinder").onclick = function () {
    window.open(tinder, "_blank");
};


function setLinks() {
    document.getElementById("mailto").href = "mailto:" + mail;
    document.getElementById("mail").innerHTML = mail;

    document.getElementById("project-page").href = projectPage;
    document.getElementById("project-page").target = "_blank";
    document.getElementById("project-page").rel = "noreferrer";

    document.getElementById("github-pages").href = githubPages;
    document.getElementById("github-pages").target = "_blank";
    document.getElementById("github-pages").rel = "noreferrer";
}