// ===== COURSE DETAILS ===== //

const formatK = a => {
    if (a >= 1000) {
        const b = '' + a / 1000;
        return b.includes('.') ? b.substring(0, b.indexOf('.') + 2) + 'k' : b + 'k';
    }
    return a;
}

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
                <p class="courses__item-value">${formatK(item.users)}</p>
            </div>
            <div class="courses__item-views">
                <i class="courses__item-icon far fa-eye"></i>
                <p class="courses__item-value">${formatK(item.views)}</p>
            </div>
            <div class="courses__item-rating">
                <i class="courses__item-icon fa-regular fa-star"></i>
                <p class="courses__item-value">${item.rating}</p>
            </div>
            <div class="courses__item-logo">
                <img src=${item.logo} alt="courses-logo">
            </div>
        </div>
        <div class="courses__item-name">
            <h3 class="courses__item-title">${item.name}</h3>
            <h3 class="courses__item-price">$${item.price}</h3>
        </div>
        <p class="courses__item-subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
    `;
    coursesList.appendChild(listItem);
})