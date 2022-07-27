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

// ===== BAR ===== //
const bar = document.querySelector('.bar');
const lines = bar.querySelectorAll('.bar__line');
const navbar = document.querySelector('.navbar__links');

bar.addEventListener('click', () => {
	navbar.classList.toggle('show-menu');

	lines.forEach((l, index) => {
		l.classList.toggle(`line${index + 1}`);
	});
});

// ===== NAVBAR ===== //
const navbarLinks = document.querySelectorAll('.navbar__link');

for (let i = 0; i < navbarLinks.length - 1; i++) {
	navbarLinks[i].addEventListener('click', function () {
		navbar.classList.remove('show-menu');
		lines.forEach((l, index) => {
			l.classList.remove(`line${index + 1}`);
		});
	
		for (let j = 0; j < navbarLinks.length - 1; j++) {
			navbarLinks[j].classList.remove('active');
		}
		this.classList.add('active');
	});
}

// ===== COUNTER UP ===== //
const options = { separator: "", suffix: "+" };

const teacherCount = new CountUp("teacher-count", 1, 85, 0, 0, options).start();
const studentCount = new CountUp("student-count", 1, 850, 0, 0, options).start();
const courseCount = new CountUp("course-count", 1, 55, 0, 0, options).start();
const countryCount = new CountUp("country-count", 1, 25, 0, 0, options).start();

// ===== SWIPER ===== //
const swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});