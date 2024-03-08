// ======== Header Background Color Change on Scroll ========
// Fetching the color from BG image from ./resources
let img = new Image();
img.src = './resources/BG.png';
let rgb = 'rgb(20,20,20)';
img.onload = () => {
    // Create a canvas and draw the image on it
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.style.display = 'none';
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Get the color of the top first pixel
    let pixelData = ctx.getImageData(0, 0, 1, 1).data;
    rgb = 'rgb(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ')';

    // Change the header color after scrolling
    window.addEventListener('scroll', () => {
        headerScrollBG(rgb);
    });
    headerScrollBG(rgb);
};

const header = document.querySelector('.scroll-header');
const headerScrollBG = (rgb) => {
    const scrollScore = 80;
    if (window.scrollY > scrollScore || window.innerWidth < 640) {
        header.style.backgroundColor = rgb;
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

headerScrollBG(rgb);

// Header Mobile Responsive Menu
const showMenu = (btn) => {
    header.classList.toggle("hidden");
    btn.querySelector('.icham').classList.toggle('hidden');
    btn.querySelector('.icclose').classList.toggle('hidden');
    headerScrollBG(rgb);
}

// ==========================================================

const searchPage = (parameters) => {
    const inp = document.getElementById(parameters);
    console.log(parameters);
    window.location.href = "search.html?s=" + encodeURIComponent(inp.value);
};

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
        if (scrollTop > lastScrollTop) {
            if (window.innerWidth >= 640) {
                header.style.transform = "translateY(-120px)";
            }
            // header.classList.remove("top-0");
        } else {
            header.style.transform = "translateY(0px)";
            // header.classList.add("top-0");
        }
    }
    lastScrollTop = scrollTop;
}, false);
