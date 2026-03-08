/* =========================
   3D CARD ANIMATION
========================= */

function initCards(){

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mousemove', (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x - rect.width / 2) / 15;
const rotateX = -(y - rect.height / 2) / 15;

card.style.animation = 'none';

card.style.transform =
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;

});

card.addEventListener('mouseleave', () => {

card.style.transform =
`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;

card.style.transition = 'transform 0.5s ease';

setTimeout(() => {
card.style.animation = 'float 4s ease-in-out infinite';
}, 500);

});

card.addEventListener('click', () => {

const title = card.dataset.title || card.querySelector('h3').innerText;
const desc = card.dataset.desc || "Dars mazmuni yuklanmoqda...";

alert(title + ": " + desc);

});

});

}

initCards();


/* =========================
   ADMIN PANEL
========================= */

const modal = document.getElementById('adminModal');
const adminBtn = document.getElementById('adminBtn');

adminBtn.onclick = (e) => {

e.preventDefault();
modal.style.display = 'flex';

};

function closeModal(){
modal.style.display = 'none';
}


/* =========================
   LOGIN
========================= */

function loginAdmin(){

const u = document.getElementById('admUser').value;
const p = document.getElementById('admPass').value;

if(u === "Asadbek" && p === "59911995"){

alert("Xush kelibsiz, Asadbek!");
openAdminPanel();

}else{

alert("Login yoki parol xato!");

}

}


/* =========================
   ADMIN DASHBOARD
========================= */

function openAdminPanel(){

modal.innerHTML = `

<div class="modal-content">

<h2>Admin Panel</h2>

<input type="text" id="lessonTitle" class="input" placeholder="Dars nomi">

<input type="text" id="lessonVideo" class="input" placeholder="YouTube video link">

<input type="time" id="lessonTime" class="input">

<label style="display:block;margin:10px 0;">
<input type="checkbox" id="liveLesson"> Jonli dars
</label>

<button class="btn primary" onclick="addLesson()">Dars qo'shish</button>

<button class="btn" onclick="location.reload()">Chiqish</button>

</div>

`;

}


/* =========================
   ADD LESSON
========================= */

function addLesson(){

let title = document.getElementById("lessonTitle").value;
let video = document.getElementById("lessonVideo").value;
let time = document.getElementById("lessonTime").value;
let live = document.getElementById("liveLesson").checked;

const lessonsContainer = document.querySelector(".cards");

let card = document.createElement("div");

card.className = "card";

let type = live ? "🔴 Jonli dars" : "📺 Video dars";

card.innerHTML = `

<h3>${title}</h3>

<p>${type}</p>

<p>🕒 ${time}</p>

<a href="${video}" target="_blank">Darsni ko'rish</a>

`;

lessonsContainer.appendChild(card);

initCards(); // yangi cardga ham animatsiya ishlashi uchun

}


/* =========================
   REGISTER
========================= */

document.getElementById('btnRegister').addEventListener('click', () => {

const name = document.getElementById('regName').value;
const phone = document.getElementById('regPhone').value;

if(name && phone){

alert("Tabriklaymiz " + name + "! Siz muvaffaqiyatli ro'yxatdan o'tdingiz.");

}else{

alert("Iltimos, barcha maydonlarni to'ldiring!");

}

});