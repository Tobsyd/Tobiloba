const toggleBtn=document.querySelector("#theme-toggle");
const imageToggle = document.getElementById("image-toggle");
const toggleBtn2=document.querySelector("#tdheme-toggle");
const imageToggle2 = document.getElementById("image-toggle2");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    //document.body.classList.toggle("dark");
    if(body.classList.contains("light-mode")){
        body.classList.replace("light-mode", "dark-mode");
        imageToggle.src="images/download(11).png";
        imageToggle.style="width: 20px; height: 20px;";
    } else{
        body.classList.replace("dark-mode", "light-mode");
        imageToggle.src="images/download(10).png";
        imageToggle.style="width: 20px; height: 20px;";
    }
});

function day(){
    document.getElementById('theme-toggle').src='../images/download(11).png';
}

toggleBtn2.addEventListener("click", () => {
    //document.body.classList.toggle("dark");
    if(body.classList.contains("light-mode")){
        body.classList.replace("light-mode", "dark-mode");
        imageToggle2.src="images/download(11).png";
        imageToggle2.style="width: 20px; height: 20px;";
    } else{
        body.classList.replace("dark-mode", "light-mode");
        imageToggle2.src="images/download(10).png";
        imageToggle2.style="width: 20px; height: 20px;";
    }
});

function openNav(){
    document.querySelector('.nav-right2').style.width ="250px";
}

function closeNav(){
    document.querySelector('.nav-right2').style.width ="0px";
};

document.querySelectorAll('.skill-btn').forEach(span =>{
    span.addEventListener('click',() =>{
        document.querySelectorAll('.skill-btn').forEach(span => span.classList.remove('active') );
        document.querySelectorAll('.skill-content').forEach(content => content.classList.remove('active'));

        span.classList.add('active');
        document.getElementById(span.dataset.target).classList.add('active');
    });
});

const submitbtn = document.getElementById('submitbtn');
const input = document.getElementsByTagName('input');
submitbtn.addEventListener('click', function(e){
    e.preventDefault();
    if (input===""){
        alert('Input something blud');
    } else{
        alert("form button isn't functional yet, contact adeyeratobi@gmail.com");
    }
    return
});

document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
       // document.querySelectorAll('.nav-right ul li a').forEach(a => a.classList.add('active'));
    });
});

document.querySelectorAll('.nav-right2 li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.nav-right2').style.width ="0px";
    });
});