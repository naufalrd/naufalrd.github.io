const cardItem = document.querySelectorAll('.card__item');
const sliderImage = document.querySelector('.splide__list')

// get all html where classname is card__item
for (var i = 0; i < cardItem.length; i++) {
    cardItem[i].addEventListener('click', (e) => {
        // remove all active class form card__item
        for (var n = 0; n < cardItem.length; n++) {
            cardItem[n].classList.remove('active');
        }
        // get parent element 
        if (e.target.parentElement.classList[0] == 'item__icon') {
            var parent = e.target.parentElement.parentElement
        } else {
            var parent = e.target.parentElement
        }
        // add active class to parent element where clicked
        parent.classList.add('active');
        const dataIndex = parent.getAttribute('data-index');
        // call function to generate new slider
        getData(dataIndex);
    })
}

// load function when page reload
document.addEventListener('DOMContentLoaded', function() {
    getData()
    if (screen.width < 768) {
        sidebar__close()
    }
});

// function for generate slider photo
async function getData(e = null) {
    // get json data form the server
    // const response = await fetch('data.json', {
    //     headers: {
    //         "Content-Type": "application/json",
    //         "X-Requested-With": "XMLHttpRequest"
    //     }
    // });
    // const dataDestination = await response.json();

    // get json data without turn on server
    const dataDestination = [{
            "id": "1",
            "category": "temple",
            "name": "Borobudur Temple",
            "image": "borobudur-temple.jpg",
            "country": "Indonesia",
            "location": "Central Java, Indonesia",
            "daily_open": "8",
            "daily_close": "6",
            "rating": "4",
            "reviewers": "2331"
        },
        {
            "id": "2",
            "category": "temple",
            "name": "Pura Bekasih Temple",
            "image": "besakih-temple.jpg",
            "country": "Indonesia",
            "location": "Bali, Indonesia",
            "daily_open": "8",
            "daily_close": "6",
            "rating": "4.1",
            "reviewers": "1428"
        },
        {
            "id": "3",
            "category": "temple",
            "name": "Pura Ulun Temple",
            "image": "ulun-temple.jpg",
            "country": "Indonesia",
            "location": "Bali, Indonesia",
            "daily_open": "8",
            "daily_close": "6",
            "rating": "4.2",
            "reviewers": "3142"
        },
        {
            "id": "4",
            "category": "temple",
            "name": "Prambanan Temple",
            "image": "prambanan-temple.jpg",
            "country": "Indonesia",
            "location": "Central Java and Special Regency Yogyakarta, Indonesia",
            "daily_open": "8",
            "daily_close": "6",
            "rating": "4.4",
            "reviewers": "712"
        },
        {
            "id": "5",
            "category": "mountain",
            "name": "Bromo Mountain",
            "image": "bromo-mountain.jpg",
            "country": "Indonesia",
            "location": "East Java, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "2358"
        },
        {
            "id": "6",
            "category": "mountain",
            "name": "Rinjani Mountain",
            "image": "rinjani-mountain.jpg",
            "country": "Indonesia",
            "location": "Lombok, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "2358"
        },
        {
            "id": "7",
            "category": "mountain",
            "name": "Merapi Mountain",
            "image": "merapi-mountain.jpg",
            "country": "Indonesia",
            "location": "Yogyakarta Special Regency and Central Java, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "2358"
        },
        {
            "id": "8",
            "category": "lake",
            "name": "Beratan Lake",
            "image": "beratan-lake.jpg",
            "country": "Indonesia",
            "location": "Bali, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.2",
            "reviewers": "2138"
        },
        {
            "id": "9",
            "category": "lake",
            "name": "Toba Lake",
            "image": "toba-lake.jpg",
            "country": "Indonesia",
            "location": "North Sumatra, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.2",
            "reviewers": "2358"
        },
        {
            "id": "10",
            "category": "beach",
            "name": "Raja Ampat Beach",
            "image": "rajaampat-beach.jpg",
            "country": "Indonesia",
            "location": "West Papua, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.7",
            "reviewers": "4576"
        },
        {
            "id": "11",
            "category": "island",
            "name": "Bawah Island",
            "image": "bawah-island.jpg",
            "country": "Indonesia",
            "location": "Kepulauan Riau, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.3",
            "reviewers": "321"
        },
        {
            "id": "12",
            "category": "island",
            "name": "Tidung Island",
            "image": "tidung-island.jpg",
            "country": "Indonesia",
            "location": "Jakarta, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "1232"
        },
        {
            "id": "13",
            "category": "island",
            "name": "Padar Island",
            "image": "padar-island.jpg",
            "country": "Indonesia",
            "location": "East Nusa Tenggara, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "1232"
        },
        {
            "id": "14",
            "category": "waterfall",
            "name": "Aling Aling Waterfall",
            "image": "alingaling-waterfall.jpg",
            "country": "Indonesia",
            "location": "Bali, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "1232"
        },
        {
            "id": "15",
            "category": "waterfall",
            "name": "Kapas Biru Waterfall",
            "image": "kapasbiru-waterfall.jpg",
            "country": "Indonesia",
            "location": "East Java, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "1232"
        },
        {
            "id": "16",
            "category": "waterfall",
            "name": "Cikanteh Waterfall",
            "image": "cikanteh-waterfall.jpg",
            "country": "Indonesia",
            "location": "West Java, Indonesia",
            "daily_open": null,
            "daily_close": null,
            "rating": "4.1",
            "reviewers": "1232"
        }
    ];

    var rowData = ""
    var firsCategory = dataDestination[0].category
    dataDestination.forEach(({
        id,
        name,
        image,
        category,
    }) => {
        // classify output if parameter null 
        if (e == null) {
            // select where category = temple
            if (category == firsCategory) {
                // exception for id 1 because prambanan was loaded for the first time
                if (id != document.querySelector('.background__image').getAttribute('data-current')) {
                    rowData += `
                    <li class="splide__slide mx-3 rounded-3" data-id = "${id}">
                        <img src="assets/img/${image}">
                        <p class="bottom-0 w-100 position-absolute text-light text-center px-2 bg-dark-lighter">${name}</p>
                    </li>
                `;
                }
                document.querySelector('.destination__name p').innerHTML = dataDestination[0].name;
                document.querySelector('.location__name').innerHTML = dataDestination[0].location;
                if (dataDestination[0].daily_open != null) {
                    document.querySelector('.daily__opening').innerHTML = `${dataDestination[0].daily_open}AM - ${dataDestination[0].daily_close}PM `;
                } else {
                    document.querySelector('.daily__opening').innerHTML = 'N/A';
                }
                document.querySelector('.popularity__review').innerHTML = `<i class="bi bi-star-fill text-warning"></i> ${dataDestination[0].rating} (${dataDestination[0].reviewers})`
                document.querySelector('.background__image').style.backgroundImage = `url(assets/img/${dataDestination[0].image})`;
                document.querySelector('.card__description').classList.add('active')
            }
            // classify output if parameter not null
        } else if (e == category) {
            if (id != document.querySelector('.background__image').getAttribute('data-current')) {
                rowData += `
                <li class="splide__slide mx-3 rounded-3" data-id = "${id}">
                    <img src="assets/img/${image}">
                    <p class="bottom-0 w-100 position-absolute text-light text-center px-2 bg-dark-lighter">${name}</p>
                </li>
            `;
            }
        }
    });
    // output all rowData on innerHTML
    document.querySelector('.splide__list').innerHTML = rowData;
    // check splide
    // if output result (example = data destination where category temple) length = 1
    if (document.querySelectorAll(".splide__slide").length == 1) {
        document.querySelector('.explore__item').classList.remove('d-none');
        new Splide('#image-slider', {
            cover: true,
            height: '15rem',
            pagination: false,
            perPage: 1,
        }).mount();
        document.querySelector('.splide__arrows').classList.add('d-none');
        // if output result (example = data destination where category temple) length > 1
    } else if (document.querySelectorAll(".splide__slide").length > 1) {
        document.querySelector('.explore__item').classList.remove('d-none');
        new Splide('#image-slider', {
            cover: true,
            height: '15rem',
            pagination: false,
            type: 'loop',
            perPage: 2,
            focus: 'center',
            // autoplay: true,
            // interval: 3000
        }).mount();
        document.querySelector('.splide__arrows').classList.remove('d-none');
    } else {
        // if there is no result about destination category
        document.querySelector('.explore__item').classList.add('d-none')
    }
}

// slider section
sliderImage.addEventListener('click', async(e) => {
    if (screen.width < 768) {
        sidebar__close()
    }
    if (e.target.tagName == 'LI') {
        document.querySelector('.card__description').classList.remove('active')

        // get json data form the server
        // const response = await fetch('data.json', {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "X-Requested-With": "XMLHttpRequest"
        //     }
        // });
        // const dataDestination = await response.json();

        // get json data without turn on server
        const dataDestination = [{
                "id": "1",
                "category": "temple",
                "name": "Borobudur Temple",
                "image": "borobudur-temple.jpg",
                "country": "Indonesia",
                "location": "Central Java, Indonesia",
                "daily_open": "8",
                "daily_close": "6",
                "rating": "4",
                "reviewers": "2331"
            },
            {
                "id": "2",
                "category": "temple",
                "name": "Pura Bekasih Temple",
                "image": "besakih-temple.jpg",
                "country": "Indonesia",
                "location": "Bali, Indonesia",
                "daily_open": "8",
                "daily_close": "6",
                "rating": "4.1",
                "reviewers": "1428"
            },
            {
                "id": "3",
                "category": "temple",
                "name": "Pura Ulun Temple",
                "image": "ulun-temple.jpg",
                "country": "Indonesia",
                "location": "Bali, Indonesia",
                "daily_open": "8",
                "daily_close": "6",
                "rating": "4.2",
                "reviewers": "3142"
            },
            {
                "id": "4",
                "category": "temple",
                "name": "Prambanan Temple",
                "image": "prambanan-temple.jpg",
                "country": "Indonesia",
                "location": "Central Java and Special Regency Yogyakarta, Indonesia",
                "daily_open": "8",
                "daily_close": "6",
                "rating": "4.4",
                "reviewers": "712"
            },
            {
                "id": "5",
                "category": "mountain",
                "name": "Bromo Mountain",
                "image": "bromo-mountain.jpg",
                "country": "Indonesia",
                "location": "East Java, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "2358"
            },
            {
                "id": "6",
                "category": "mountain",
                "name": "Rinjani Mountain",
                "image": "rinjani-mountain.jpg",
                "country": "Indonesia",
                "location": "Lombok, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "2358"
            },
            {
                "id": "7",
                "category": "mountain",
                "name": "Merapi Mountain",
                "image": "merapi-mountain.jpg",
                "country": "Indonesia",
                "location": "Yogyakarta Special Regency and Central Java, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "2358"
            },
            {
                "id": "8",
                "category": "lake",
                "name": "Beratan Lake",
                "image": "beratan-lake.jpg",
                "country": "Indonesia",
                "location": "Bali, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.2",
                "reviewers": "2138"
            },
            {
                "id": "9",
                "category": "lake",
                "name": "Toba Lake",
                "image": "toba-lake.jpg",
                "country": "Indonesia",
                "location": "North Sumatra, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.2",
                "reviewers": "2358"
            },
            {
                "id": "10",
                "category": "beach",
                "name": "Raja Ampat Beach",
                "image": "rajaampat-beach.jpg",
                "country": "Indonesia",
                "location": "West Papua, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.7",
                "reviewers": "4576"
            },
            {
                "id": "11",
                "category": "island",
                "name": "Bawah Island",
                "image": "bawah-island.jpg",
                "country": "Indonesia",
                "location": "Kepulauan Riau, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.3",
                "reviewers": "321"
            },
            {
                "id": "12",
                "category": "island",
                "name": "Tidung Island",
                "image": "tidung-island.jpg",
                "country": "Indonesia",
                "location": "Jakarta, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "1232"
            },
            {
                "id": "13",
                "category": "island",
                "name": "Padar Island",
                "image": "padar-island.jpg",
                "country": "Indonesia",
                "location": "East Nusa Tenggara, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "1232"
            },
            {
                "id": "14",
                "category": "waterfall",
                "name": "Aling Aling Waterfall",
                "image": "alingaling-waterfall.jpg",
                "country": "Indonesia",
                "location": "Bali, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "1232"
            },
            {
                "id": "15",
                "category": "waterfall",
                "name": "Kapas Biru Waterfall",
                "image": "kapasbiru-waterfall.jpg",
                "country": "Indonesia",
                "location": "East Java, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "1232"
            },
            {
                "id": "16",
                "category": "waterfall",
                "name": "Cikanteh Waterfall",
                "image": "cikanteh-waterfall.jpg",
                "country": "Indonesia",
                "location": "West Java, Indonesia",
                "daily_open": null,
                "daily_close": null,
                "rating": "4.1",
                "reviewers": "1232"
            }
        ];
        const result = dataDestination.filter(record => record.id === e.target.getAttribute('data-id'))
        document.querySelector('.destination__name p').innerHTML = result[0].name;
        document.querySelector('.location__name').innerHTML = result[0].location;
        if (result[0].daily_open != null) {
            document.querySelector('.daily__opening').innerHTML = `${result[0].daily_open}AM - ${result[0].daily_close}PM`;
        } else {
            document.querySelector('.daily__opening').innerHTML = 'N/A';
        }
        document.querySelector('.popularity__review').innerHTML = `<i class="bi bi-star-fill text-warning"></i> ${result[0].rating} (${result[0].reviewers})`
        document.querySelector('.background__image').style.backgroundImage = `url(assets/img/${result[0].image})`;
        document.querySelector('.card__description').classList.add('active')
    }
})

document.querySelector('.sidebar__toggle').addEventListener('click', () => {
    if (document.querySelector('.sidebar__toggle').classList[document.querySelector('.sidebar__toggle').classList.length - 1] != 'hidden') {
        document.querySelector('.sidebar__menu').classList.remove('hidden');
        document.querySelector('.main__content').classList.remove('col-md-12');
        document.querySelector('.main__content').classList.add('col-md-8');
        document.querySelector('.sidebar__toggle').classList.add('hidden');
        // getData()
    } else {
        document.querySelector('.sidebar__menu').classList.add('hidden');
        document.querySelector('.main__content').classList.add('col-md-12');
        document.querySelector('.main__content').classList.remove('col-md-8');
        document.querySelector('.sidebar__toggle').classList.remove('hidden');
        // getData()
    }
})

function sidebar__close() {
    document.querySelector('.sidebar__menu').classList.add('hidden');
    document.querySelector('.main__content').classList.add('col-md-12');
    document.querySelector('.main__content').classList.remove('col-md-8');
    document.querySelector('.sidebar__toggle').classList.remove('hidden')
}