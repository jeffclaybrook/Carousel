const testimonials = [
    {
        id: 1,
        name: 'Karen Clardy',
        job: 'Former President RISD Board of Trustees',
        image: 'images/image-1.png',
        quote: '"Jeff goes out of his way to make sure no one is left out of an activity. His sense of integrity is beyond reproach. I can always count on Jeff to do the right thing, no matter what the circumstances may be."'
    },
    {
        id: 2,
        name: 'Kathryn Laster',
        job: 'Digital Learning Consultant',
        image: 'images/image-2.png',
        quote: '"Jeff Claybrook is the epitome of spirit, enthusiasm, and energy. He is the type of person who has never met a stranger, and his friendliness impacts all who comes in contact with him."'
    },
    {
        id: 3,
        name: 'David Wood',
        job: 'Instructor',
        image: 'images/image-3.png',
        quote: '"I [was] his sponsor and have known Jeff and his family for some time... Jeff revealed certain qualities that I typically observe in my successful students, as well as those who succeed in college."'
    },
    {
        id: 4,
        name: 'Gwen Green',
        job: 'Instructor',
        image: 'images/image-4.png',
        quote: '"Jeff Claybrook jumps into every encounter, experience, task, etc., with feet, legs, arms, hands, [and] heart. In other words, he is nonstop! He is always respectful, courteous, and a gentleman..."'
    }
]

const variables = {
    image: document.getElementById('testimonial-image'),
    name: document.getElementById('testimonial-name'),
    job: document.getElementById('testimonial-job'),
    quote: document.getElementById('testimonial-quote')
}

let count = 0;

const showPerson = (person) => {
    const item = testimonials[person];
    variables.image.src = item.image;
    variables.name.textContent = item.name;
    variables.job.textContent = item.job;
    variables.quote.textContent = item.quote;
    variables.image.setAttribute('alt', `${item.name}, ${item.job}`);
}

const randomPerson = () => {
    count = Math.floor(Math.random() * testimonials.length);
    showPerson(count);
}

const nextPerson = () => {
    count++;
    if (count > testimonials.length - 1) count = 0;
    showPerson(count);
}

const prevPerson = () => {
    count--;
    if (count < 0) count = testimonials.length - 1;
    showPerson(count);
}

window.addEventListener('DOMContentLoaded', () => {
    randomPerson()
})