const formatK = a => {
    if (a >= 1000) {
        const b = '' + a / 1000;
        return b.includes('.') ? b.substring(0, b.indexOf('.') + 2) + 'k' : b + 'k';
    }
    return a;
}

// ===== COURSE DETAILS ===== //
const coursesList = document.querySelector('.courses__list');
courseData.map(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('courses__item');

    listItem.innerHTML = `
        <div class="courses__item-img">
            <img src=${item.image} alt="course-img">
        </div>
        <div class="courses__item-info">
            <div class="courses__item-users">
                <i class="courses__item-icon fa-regular fa-user"></i>
                <p class="courses__item-value">${formatK(item.info.users)}</p>
            </div>
            <div class="courses__item-views">
                <i class="courses__item-icon far fa-eye"></i>
                <p class="courses__item-value">${formatK(item.info.views)}</p>
            </div>
            <div class="courses__item-rating">
                <i class="courses__item-icon fa-regular fa-star"></i>
                <p class="courses__item-value">${item.info.rating}</p>
            </div>
            <div class="courses__item-logo">
                <img src=${item.logo} alt="courses-logo">
            </div>
        </div>
        <div class="courses__item-name">
            <h3 class="courses__item-title">${item.title}</h3>
            <h3 class="courses__item-price">$${item.price}</h3>
        </div>
        <p class="courses__item-subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
    `;
    coursesList.appendChild(listItem);
});


// ===== MENTORS DATA ===== //
const mentorsList = document.querySelector('.mentors__list');
mentorsData.map(mentor => {
    const listItem = document.createElement('li');
    listItem.classList.add('mentors__item');

    listItem.innerHTML = `
        <div class="mentors__img">
            <img src=${mentor.image} alt="mentors-img">
        </div>
        <h3 class="mentors__name">${mentor.name}</h3>
        <p class="mentors__job">${mentor.job}</p>
        <div class="mentors__info">
            <div class="mentors__info-users">
                <i class="mentors__info-icon fa-regular fa-user"></i>
                <p class="mentors__info-value">${formatK(mentor.info.users)}</p>
            </div>
            <div class="mentors__info-rating">
                <i class="mentors__info-icon fa-solid fa-star"></i>
                <p class="mentors__info-value">${mentor.info.rating}</p>
            </div>
            <p class="mentors__info-courses">${mentor.info.course} Courses</p>
        </div>
    `;
    mentorsList.appendChild(listItem);
});

// ===== SPLIDE JS ===== //
new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
}).mount();


// ===== VIDEO TAG ===== //
const video = document.querySelector('.about__video video');
const playBtn = document.querySelector('.play-btn');
const videoLine = document.querySelector('.video-line');
const videoProgress = document.querySelector('.video-line span');

let isPlay = false;

video.addEventListener('click', playVideo);
video.addEventListener('timeupdate', progress);
videoLine.addEventListener('click', setProgress);


function playVideo() {
    if (!isPlay) {
        isPlay = true;
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playBtn.classList.add('anim');
    } else {
        isPlay = false;
        video.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.classList.remove('anim');
    }
}

function progress(e) {
    let duration = e.srcElement.duration,
        curTime = e.srcElement.currentTime;

    videoProgress.style.width = `${curTime * 100 / duration}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const widthX = e.offsetX;
    const duration = video.duration;
    video.currentTime = (widthX / width) * duration;
}

// ===== NAVBAR ===== //
const navbarLinks = document.querySelectorAll('.navbar__link');

for (let i = 0; i < navbarLinks.length - 1; i++) {
    navbarLinks[i].addEventListener('click', function () {
        for (let j = 0; j < navbarLinks.length - 1; j++) {
            navbarLinks[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}

// ===== DROPDOWN ===== //
dropdownLink = document.querySelectorAll('.navbar__dropdown');
dropdownLink.forEach((item) => {
    item.parentNode.addEventListener('click', function () {
        item.classList.toggle('active');
    })
})

// ===== BAR ===== //
const bar = document.querySelector('.bar');

bar.addEventListener('click', () => {
    const lines = bar.querySelectorAll('.bar__line');
    document.querySelector('.navbar__links').classList.toggle('show-menu');

    lines.forEach((l, index) => {
        l.classList.toggle(`line${index + 1}`);
    });
});

// ===== COUNTER UP ===== //
const options = { separator: "", suffix: "+"};

const teacherCount = new CountUp("teacher-count", 1, 85, 0, 0, options).start();
const studentCount = new CountUp("student-count", 1, 850, 0, 0, options).start();
const courseCount = new CountUp("course-count", 1, 55, 0, 0, options).start();
const countryCount = new CountUp("country-count", 1, 25, 0, 0, options).start();