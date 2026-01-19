import data from './data.js';

const output = document.getElementById('content');
output.innerHTML = `<h1>Here we go!</h1>`;

const href = location.href.replace('https://', '').split('/')[0];

const parts = [`<header>
    <div>
        <h1>${data.name.en}</h1>
        <h2 class="aux">${data.name.uk}</h2>
        <div class="vert-sp-1"></div>
        <h2>${data.position}</h2>
    </div>

    <ul class="contacts">
        <li>${data.location}</li>
        <li><a href="mailto:${data.email}">${data.email}</a></li>
        <li><a href="tel:${data.phone}">${data.phone}</a></li>
        <li><a href="${data.github}">${data.github}</a></li>
    </ul>

    <div class="abs-right-bottom print-only">Latest CV: <a href="${href}">${href}</a></div>
</header>`];

const techSkills = data.techSkills.map(
    e => `<h4>${e[0]}:</h4>
    <p>${e[1]}</p>`
).join('');

parts.push(`<main>
    <hr>
    <h3>Summary</h3>
    <p>${data.summary}</p>
    <h3>Technical Skills</h3>
    ${techSkills}
</main>`);

output.innerHTML = parts.join('');