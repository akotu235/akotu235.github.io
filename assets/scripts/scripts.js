let greeting = document.getElementById("greeting");
let date = new Date();
let userLang = navigator.language
if (userLang === "pl-PL" || userLang === "pl") {
    document.querySelector("html").setAttribute("lang", "pl");
    greeting.src = "assets/images/msg_pl.svg" + "?" + date.getTime();
} else {
    greeting.src = "assets/images/msg.svg" + "?" + date.getTime();
}

setScreenStyle();

const isMobileDevice = /Mobi|Android|iPhone|iPod|iPad|Windows Phone|Tablet|BlackBerry/i.test(navigator.userAgent);
if (isMobileDevice) {
    openLinkButtons();
}
window.addEventListener("load", function () {
    document.querySelector("#content").style.display = "flex";
    document.querySelector("#loader").style.display = "none";
    runAnimation();
    setLinks();
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

const links = document.querySelectorAll('.link');
const container = document.querySelector('.links-container');
links.forEach(element => {
    if (!isMobileDevice) {
        element.addEventListener('mouseenter', function () {
            if (window.getComputedStyle(container).flexDirection === 'row') {
                this.style.transform = 'translateY(-1vh)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
            const label = element.querySelector('.label');
            const labelHover = element.querySelector('.label-hover');
            label.style.display = 'none';
            labelHover.style.display = 'flex';

        });
        element.addEventListener('mouseleave', function () {
            if (window.getComputedStyle(container).flexDirection === 'row') {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1)';
            }
            const label = element.querySelector('.label');
            const labelHover = element.querySelector('.label-hover');
            labelHover.style.display = 'none';
            label.style.display = 'flex';
        });
    }
});

function openLinkButtons() {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.querySelector('.label').style.display = 'none';
        link.querySelector('.label-hover').style.display = 'flex';
    });
}

const chatLinks = document.querySelectorAll('.chat-link');
const chatButton = document.getElementById('chat-button');
chatLinks.forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.2)';
        chatButton.style.backgroundColor = this.style.color;
    });
    element.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        chatButton.style.backgroundColor = chatButton.style.color;
    });
    element.addEventListener('touchend', function () {
        this.style.transform = 'scale(1.2)';
        chatButton.style.backgroundColor = this.style.color;
    });
});

let mail = 'akotu@protonmail.com';
let github = 'https://github.com/akotu235'
let linkedin = 'https://www.linkedin.com/in/andrzej-kotulski'
let messenger = 'https://m.me/andrzej.kotulski.23'
let telegram = 'https://t.me/andrzej235'
let messageMe = 'https://pipefish-ruling-mink.ngrok-free.app/message'
let projectPage = 'https://github.com/akotu235/akotu235.github.io'
let githubPages = 'https://pages.github.com'

document.getElementById("github").onclick = function () {
    window.open(github, "_blank");
};
document.getElementById("linkedin").onclick = function () {
    window.open(linkedin, "_blank");
};
document.getElementById("messenger").onclick = function () {
    window.open(messenger, "_blank");
};
document.getElementById("telegram").onclick = function () {
    window.open(telegram, "_blank");
};
document.getElementById("messageMe").onclick = function () {
    window.open(messageMe, "_blank");
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

function cpMail(e) {
    navigator.clipboard.writeText(mail);
    e.preventDefault();
    let ico = document.getElementById("cp");
    ico.src = "assets/icons/copy-success-highlighted.svg";
}

document.getElementById("cp").addEventListener("mouseover", function () {
    this.src = "assets/icons/copy-highlighted.svg";
    this.style.cursor = "copy";
});
document.getElementById("cp").addEventListener("mouseout", function () {
    this.src = "assets/icons/copy.svg";
});

function chatIsHidden() {
    return document.getElementsByClassName("chat-window")[0].hidden;
}

document.getElementById("chat-iframe").src = getChatSrc();

function getChatSrc() {
    if (userLang === "pl-PL" || userLang === "pl") {
        return "https://widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DW%20czym%20mog%C4%99%20pom%C3%B3c%3F%7Cmsg_offline%3DZostaw%20wiadomo%C5%9B%C4%87%20i%20informacje%20kontaktowe%2C%20a%20odpowiem%20na%20Twoje%20pytanie.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
    } else {
        return "https://widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DHow%20can%20I%20help%3F%7Cmsg_offline%3DLeave%20a%20message%20and%20contact%20information%20and%20I%20will%20get%20back%20to%20you%20asap.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
    }
}

function toggleChat() {
    if (window.innerWidth < window.innerHeight || window.innerHeight < 600) {
        stretchChat();
    } else {
        if (chatIsHidden()) {
            openChat();
        } else {
            closeChat();
        }
    }
}

function openChat() {
    document.getElementsByClassName("chat-window")[0].hidden = false;
    setScreenStyle();
}

function closeChat() {
    document.getElementsByClassName("chat-window")[0].hidden = true;
    setScreenStyle();
}

function stretchChat() {
    window.open(getChatSrc(), '_blank');
    closeChat();
}

function setHorizontalScreenStyle() {
    document.getElementsByClassName("links-container")[0].style.flexDirection = "row";
    document.querySelectorAll('.link').forEach(function (link) {
        link.style.width = '27vh';
        link.style.height = '5vh';
        link.style.margin = "1vh";
    });
    const gg = document.getElementById("gg");
    if (chatIsHidden()) {
        gg.style.display = "flex";
    } else {
        gg.style.display = "none";
    }
}

function setVerticalScreenStyle() {
    document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
    document.getElementsByClassName("chat-window")[0].hidden = true;
    document.querySelectorAll('.link').forEach(function (link) {
        link.style.width = '62vw';
        link.style.height = '8vh';
        link.style.margin = "2vh";
    });
    const gg = document.getElementById("gg");
    gg.style.display = "flex";
}

function setScreenStyle() {
    if (window.innerWidth < window.innerHeight) {
        setVerticalScreenStyle();
    } else {
        setHorizontalScreenStyle();
    }
}
