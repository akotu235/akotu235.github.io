const hiddenButtons = document.getElementById("hidden-buttons");
const greeting = document.getElementById("greeting");
const overlay = document.getElementById('overlay');
const isMobileDevice = /Mobi|Android|iPhone|iPod|iPad|Windows Phone|Tablet|BlackBerry/i.test(navigator.userAgent);
const links = document.querySelectorAll('.link');
const container = document.querySelector('.links-container');
const hiddenLinks = document.querySelectorAll('.hidden-link');
const chatLinks = document.querySelectorAll('.chat-link');
const chatButton = document.getElementById('chat-button');
let date = new Date();
let userLang = navigator.language
let clickCount = 0;

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

function openLinkButtons() {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.querySelector('.label').style.display = 'none';
        link.querySelector('.label-hover').style.display = 'flex';
    });
}

function cpMail(e) {
    navigator.clipboard.writeText(mail);
    e.preventDefault();
    let ico = document.getElementById("cp");
    ico.src = "assets/icons/copy-success-highlighted.svg";
}

function chatIsHidden() {
    return document.getElementsByClassName("chat-window")[0].hidden;
}

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
    hideButtons();
}

function closeChat() {
    document.getElementsByClassName("chat-window")[0].hidden = true;
    setScreenStyle();
    showHiddenButtons();
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
    hiddenButtons.style.flexDirection = "row";
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
    hiddenButtons.style.flexDirection = "column";
}

function setScreenStyle() {
    if (window.innerWidth < window.innerHeight) {
        setVerticalScreenStyle();
    } else {
        setHorizontalScreenStyle();
    }
}

function photoClickAnimation() {
    overlay.style.opacity = '0.5';
    setTimeout(function () {
        overlay.style.opacity = '0.1';
    }, 123);
}

function enableCurrentElement(currentElementColor, currentElementName) {
    let currentElement = document.getElementById(currentElementName);
    if (currentElement) {
        currentElement.style.backgroundColor = currentElementColor;
        currentElement.classList.add('visible');
       setTimeout(() => {
            currentElement.classList.add('animated');
        }, 123);
    }
}

function handleClick() {
    clickCount++;
    if (clickCount === 2) {
        overlay.style.backgroundColor = '#008080';
    } else if (clickCount === 3) {
        overlay.style.backgroundColor = '#7289da';
        enableCurrentElement('#008080', 'home');
    } else if (clickCount === 5) {
        overlay.style.backgroundColor = '#27A7E7';
        enableCurrentElement('#7289da', 'discord');
    } else if (clickCount === 8) {
        overlay.style.backgroundColor = '#FFFC00';
        enableCurrentElement('#27A7E7', 'telegram');
    } else if (clickCount === 13) {
        overlay.style.backgroundColor = '#833AB4';
        enableCurrentElement('#FFFC00', 'snapchat');
    } else if (clickCount === 21) {
        overlay.style.backgroundColor = '#1ED760';
        enableCurrentElement('#833AB4', 'instagram');
    } else if (clickCount === 34) {
        overlay.style.backgroundColor = '#171A21';
        enableCurrentElement('#1ED760', 'spotify');
    } else if (clickCount === 55) {
        overlay.style.backgroundColor = '#FD3A73';
        enableCurrentElement('#171A21', 'steam');
    } else if (clickCount === 89) {
        overlay.style.backgroundColor = '#FFC0CB';
        enableCurrentElement('#FD3A73', 'tinder');
    } else if (clickCount === 144) {

    }
    photoClickAnimation();
}

function showHiddenButtons() {
    hiddenButtons.style.display = 'flex';
}

function hideButtons() {
    hiddenButtons.style.display = 'none';
}

if (userLang === "pl-PL" || userLang === "pl") {
    document.querySelector("html").setAttribute("lang", "pl");
    greeting.src = "assets/images/msg_pl.svg" + "?" + date.getTime();
} else {
    greeting.src = "assets/images/msg.svg" + "?" + date.getTime();
}

setScreenStyle();

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

hiddenLinks.forEach(element => {
    if (!isMobileDevice) {
        element.addEventListener('mouseenter', function () {
            if (window.getComputedStyle(container).flexDirection === 'row') {
                this.style.transform = 'translateY(-1vh)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });
        element.addEventListener('mouseleave', function () {
            if (window.getComputedStyle(container).flexDirection === 'row') {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1)';
            }
        });
    }
});

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

document.getElementById("cp").addEventListener("mouseover", function () {
    this.src = "assets/icons/copy-highlighted.svg";
    this.style.cursor = "copy";
});
document.getElementById("cp").addEventListener("mouseout", function () {
    this.src = "assets/icons/copy.svg";
});

document.getElementById("chat-iframe").src = getChatSrc();

overlay.addEventListener('click', handleClick);

document.addEventListener("DOMContentLoaded", function () {
    overlay.addEventListener("mouseover", function () {
        overlay.style.opacity = '0.1';
    });
    overlay.addEventListener("mouseout", function () {
        overlay.style.opacity = '0';
    });
});