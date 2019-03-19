function cookiesClose() {
    $cookiesDiv = document.getElementById('cookies');
    $cookiesDiv.setAttribute('hidden', true);
}

$cookiesBtn = document.getElementById('cookies_close');
$cookiesBtn.onclick = cookiesClose;

document.querySelector('#menu_toggle').addEventListener('click', classToggle);
const $innerElements = document.querySelectorAll('.inner');

for (let i of $innerElements) {
    i.addEventListener('click', classToggle);
}

function classToggle() {
    let $nav_bg = document.getElementById('inner_nav_bg');
    let $inner_menu = document.getElementById('menu_inner');
    $nav_bg.classList.toggle('hidden');
    $inner_menu.classList.toggle('hidden');
}

document.forms.contact_form.onsubmit = function () {
    const $message = document.getElementById('message');
    var $inputs = document.querySelectorAll(".odd, .even");
    for (let i of $inputs){
        i.value = "";
    }
    message()
    return false;
   }
   
function message() {
    const $message = document.getElementById('message');
    //clear
    while ($message.firstChild) {
        $message.removeChild($message.firstChild);
    }
    const $p = document.createElement(`p`);
    const $pText = document.createTextNode('Done! Thank You!');
    $p.appendChild($pText);
    $message.appendChild($p);

    setTimeout(function () {
        $message.style.opacity = '0';
    }, 2000);

    $message.style.opacity = "1";
    
    return false;
};