let greeting = document.getElementById("greeting");
let date = new Date();
let userLang = navigator.language
if (userLang === "pl-PL" || userLang === "pl") {
    greeting.src = "assets/images/msg_pl.svg" + "?" + date.getTime();
} else {
    greeting.src = "assets/images/msg.svg" + "?" + date.getTime();
}

setScreenStyle();

window.addEventListener("load", function () {
    document.querySelector("#content").style.display = "flex";
    document.querySelector("#loader").style.display = "none";
    runAnimation();
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('selectstart', event => event.preventDefault());

document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});

window.addEventListener('resize', function () {
    setScreenStyle();
});

function runAnimation() {
    let photo = document.getElementById("photo");
    photo.style.display = "block";
    photo.style.opacity = "0";
    photo.style.scale = "0.9";

    setTimeout(function () {
        photo.style.transition = "opacity 2s ease-in-out, scale 1s ease-in-out";
        photo.style.opacity = "1";
        photo.style.scale = "1";
    }, 1300);

    let contact = document.getElementById("contact");
    contact.style.display = "flex";
    contact.style.opacity = "0";
    contact.style.scale = "0.7";
    let saturation = 0;

    setTimeout(function () {
        contact.style.transition = "opacity 3s ease-in-out, scale 3s ease-in-out";
        contact.style.opacity = "1";
        contact.style.scale = "1";

        function increaseSaturation() {
            saturation += 0.01;
            contact.style.filter = `saturate(${saturation})`;
            if (saturation >= 1) {
                clearInterval(intervalId);
            }
        }

        const intervalId = setInterval(increaseSaturation, 30);
    }, 3000);

    let footer = document.getElementById("footer");
    footer.style.display = "flex";
    footer.style.opacity = "0";

    setTimeout(function () {
        footer.style.transition = "opacity 1s ease-in-out";
        footer.style.opacity = "1";
    }, 5000);
}

const elements = document.querySelectorAll('.link');
const container = document.querySelector('.links-container');
elements.forEach(element => {
    element.addEventListener('mouseenter', function () {
        if (window.getComputedStyle(container).flexDirection === 'row') {
            this.style.transform = 'translateY(-1vh)';
        } else {
            this.style.transform = 'translateX(-1vh)';
        }
    });
    element.addEventListener('mouseleave', function () {
        if (window.getComputedStyle(container).flexDirection === 'row') {
            this.style.transform = 'translateY(0)';
        } else {
            this.style.transform = 'translateX(0)';
        }
    });
});

let mail = 'akotu@pm.me';

function cpMail(e) {
    navigator.clipboard.writeText(mail);
    e.preventDefault();
    let image = document.getElementById("cp");
    image.src = "assets/icons/copy-success-highlighted.svg";
}

document.getElementById("cp").addEventListener("mouseover", function () {
    this.src = "assets/icons/copy-highlighted.svg";
});
document.getElementById("cp").addEventListener("mouseout", function () {
    this.src = "assets/icons/copy.svg";
});

document.getElementById("chat-iframe").src = getChatSrc();

var chatIsOpen = false;

function getChatSrc() {
    if (userLang === "pl-PL" || userLang === "pl") {
        return "https://widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DCze%C5%9B%C4%87%2C%20w%20czym%20mog%C4%99%20pom%C3%B3c%3F%7Cmsg_offline%3DZostaw%20wiadomo%C5%9B%C4%87%20i%20informacje%20kontaktowe%2C%20a%20odpowiem%20na%20Twoje%20pytanie.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
    } else {
        return "https://widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DHello%2C%20how%20can%20I%20help%3F%7Cmsg_offline%3DLeave%20a%20message%20and%20contact%20information%20and%20I%20will%20answer%20your%20question.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
    }
}

function toggleChat() {
    if (window.innerWidth < window.innerHeight || window.innerHeight < 600) {
        stretchChat();
    } else {
        if (document.getElementsByClassName("chat-window")[0].hidden) {
            openChat();
        } else {
            closeChat();
        }
    }
}

function openChat() {
    chatIsOpen = true;
    document.getElementsByClassName("chat-window")[0].hidden = false;
    document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
}

function closeChat() {
    chatIsOpen = false;
    document.getElementsByClassName("chat-window")[0].hidden = true;
    document.getElementsByClassName("links-container")[0].style.flexDirection = "row";
}

function stretchChat() {
    window.location = getChatSrc();
}

function setLandscapeScreenStyle() {
    if (chatIsOpen) {
        document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
    } else {
        document.getElementsByClassName("links-container")[0].style.flexDirection = "row";
    }
    document.getElementsByClassName("main-container")[0].style.width = "62vw";
    document.querySelectorAll('.link').forEach(function (link) {
        link.style.width = '15vw';
    });
}

function setVerticalScreenStyle() {
    closeChat();
    document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
    document.getElementsByClassName("main-container")[0].style.width = "98vw";
    document.querySelectorAll('.link').forEach(function (link) {
        link.style.width = '62vw';
    });
}

function setScreenStyle() {
    if (window.innerWidth < window.innerHeight) {
        setVerticalScreenStyle();
    } else {
        setLandscapeScreenStyle();
    }
}