let greeting = document.getElementById("greeting");
let date = new Date();
greeting.src = greeting.src + "?" + date.getTime();

if (window.innerWidth < window.innerHeight) {
    document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
    document.querySelectorAll('link').forEach(function (link) {
        link.style.width = '62vw';
    });
}

window.addEventListener('resize', function () {
    if (document.getElementsByClassName("chat-window")[0].hidden === true) {
        if (window.innerWidth < window.innerHeight) {
            document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
            document.querySelectorAll('.link').forEach(function (link) {
                link.style.width = '62vw';
            });
        } else {
            document.getElementsByClassName("links-container")[0].style.flexDirection = "row";
            document.querySelectorAll('.link').forEach(function (link) {
                link.style.width = '15vw';
            });
        }
    }
});

window.addEventListener("load", function () {
    let photo = document.getElementById("photo");
    photo.style.display = "block";
    photo.style.opacity = "0";
    photo.style.scale = "0.9";

    setTimeout(function () {
        photo.style.transition = "opacity 2s ease-in-out, scale 1s ease-in-out";
        photo.style.opacity = "1";
        photo.style.scale = "1";
    }, 800);

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
    }, 2300);
});

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
}

document.getElementById("cp").addEventListener("mouseover", function () {
    this.src = "assets/icons/copy-highlighted.svg";
});
document.getElementById("cp").addEventListener("mouseout", function () {
    this.src = "assets/icons/copy.svg";
});

function toggleChat() {
    if (navigator.userAgent.toLowerCase().match(/mobile/i) || navigator.userAgent.toLowerCase().match(/tablet/i) || navigator.userAgent.toLowerCase().match(/android/i) || navigator.userAgent.toLowerCase().match(/iphone/i) || navigator.userAgent.toLowerCase().match(/ipad/i)) {
        window.location = "https:////widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DHello%2C%20how%20can%20I%20help%3F%7Cmsg_offline%3DLeave%20a%20message%20and%20contact%20information%20and%20I%20will%20answer%20your%20question.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
    } else {
        if (document.getElementsByClassName("chat-window")[0].hidden) {
            document.getElementsByClassName("chat-window")[0].hidden = false;
            document.getElementsByClassName("links-container")[0].style.flexDirection = "column";
        } else {
            closeChat();
        }
    }
}

function closeChat() {
    document.getElementsByClassName("chat-window")[0].hidden = true;
    document.getElementsByClassName("links-container")[0].style.flexDirection = "row";
}

function stretchChat() {
    window.location = "https:////widget.gg.pl/widget/38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0#uin%3D73836695%7Cmsg_online%3DHello%2C%20how%20can%20I%20help%3F%7Cmsg_offline%3DLeave%20a%20message%20and%20contact%20information%20and%20I%20will%20answer%20your%20question.%7Chash%3D38fe4ce527f071b3b70ecd72dadbb984438e54ac747479461c9331e371a4c2f0"
}