const firstli = document.querySelector('.navbar > ul > li:first-child');
const lastli = document.querySelector('.navbar > ul > li:last-child');
const navbar = document.querySelector('.navbar');
firstli.addEventListener('mouseover',() => {
    let myBox = document.createElement('div');
    myBox.className = 'li-box';
    myBox.innerHTML = '<ul>'+
        '<li><a href="#">درخواست تاکسی</a></li>'+
        '<li><a href="#">پیک موتوری</a></li>'+
        '<li><a href="#">سفارش آنلاین غذا</a></li>'+
        '<li><a href="#">سوپرمارکت</a></li>'+
        '<li><a href="#">رزرو بلیط هواپیما</a></li>'+
        '<li><a href="#">رزرو بلیط قطار</a></li>'+
        '<li><a href="#">رزرو بلیط اتوبوس</a></li>'+
        '<li><a href="#">رزرو هتل</a></li>'+
        '<li><a href="#">درخواست وانت بار</a></li>'+
        '<li><a href="#">خدمات اسباب کشی</a></li>'+
        '<li><a href="#">پزشک و مشاور</a></li>'+
        '<li><a href="#">اسنپ پرو</a></li>'+
    '</ul>';
    navbar.append(myBox);
    firstli.addEventListener('mouseout' , () => {
        myBox.addEventListener('mouseover' , () => {
            myBox.style.display = 'flex';
        });
        myBox.addEventListener('mouseout' , () => {
            myBox.style.display = 'none';
        });
    });
    firstli.addEventListener('mouseout' , () => {
        myBox.style.display = 'none'; 
    });
});
lastli.addEventListener('mouseover',() => {
    let myBox = document.createElement('div');
    myBox.className = 'li-box-last';
    myBox.innerHTML = '<ul>'+
        '<li><a href="#">فرصت های شغلی</a></li>'+
        '<li><a href="#">درباره ما</a></li>'+
        '<li><a href="#">تماس با ما</a></li>'+
    '</ul>';
    navbar.append(myBox);
    lastli.addEventListener('mouseout' , () => {
        myBox.addEventListener('mouseover' , () => {
            myBox.style.display = 'flex';
        });
        myBox.addEventListener('mouseout' , () => {
            myBox.style.display = 'none';
        });
    });
    lastli.addEventListener('mouseout' , () => {
        myBox.style.display = 'none'; 
    });
});
const Input = document.querySelector('.send-phone-number > .phone > input');
const circle = document.querySelector('.send-phone-number > .phone > i');
const smallT = document.querySelector('.small-T');
Input.addEventListener('click' , () => {
    if(Input.value != null){
        let ci = document.createElement('div');
        ci.className='circles';
        ci.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        circle.replaceWith(ci);
        ci.addEventListener('click', () => {
            Input.value = null;
            smallT.textContent = null;
        });
    }
});
const nextPrev1 = document.querySelector('.next-prev .Circle:first-child');
const nextPrev2 = document.querySelector('.next-prev .Circle:nth-child(2)');
const nextPrev3 = document.querySelector('.next-prev .Circle:last-child');
const img1 = document.querySelector('.super-app-desc .image1');
const img2 = document.querySelector('.super-app-desc .image2');
const img3 = document.querySelector('.super-app-desc .image3');
nextPrev1.addEventListener('click' , () => {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    nextPrev1.style.color = '#ffffff';
    nextPrev2.style.color = 'rgba(255, 255, 255, 0.36)';
    nextPrev3.style.color = 'rgba(255, 255, 255, 0.36)';
});
nextPrev2.addEventListener('click' , () => {
    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
    nextPrev2.style.color = '#ffffff';
    nextPrev1.style.color = 'rgba(255, 255, 255, 0.36)';
    nextPrev3.style.color = 'rgba(255, 255, 255, 0.36)';
});
nextPrev3.addEventListener('click' , () => {
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    nextPrev3.style.color = '#ffffff';
    nextPrev2.style.color = 'rgba(255, 255, 255, 0.36)';
    nextPrev1.style.color = 'rgba(255, 255, 255, 0.36)';
});
// check phone number
const regularExp = /09[0-9]{9}/;
const SendLinkButton = document.querySelector('.send-phone-number a');
SendLinkButton.addEventListener('click' , () => {
    if(!regularExp.test(Input.value)){
        smallT.textContent = 'شماره موبایل وارد شده صحیح نیست';
        let circles = document.querySelector('.circles');
        circles.replaceWith(circle);
    }
});



