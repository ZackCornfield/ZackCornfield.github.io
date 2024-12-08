// Tab Functionality
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side Menu Functionality
var sidemenu = document.getElementById('sidemenu');

function closemenu() {
    sidemenu.style.right = '-200px';
}

function openmenu() {
    sidemenu.style.right = '0';
}

// Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbzdWeIy4d1J8PnpcyWU6Fc_f4uwSZdZDlkOCextQG_HBPklu1KfT0oQJryPU-NMHM0I/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
