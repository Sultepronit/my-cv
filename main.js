import data from './data.js';
import { HTMLize } from './helpers.js';

document.getElementById('print').addEventListener('click', () => print());

const output = document.getElementById('content');

const parts = [`<header>
    <div>
        <h1>${data.name.en}</h1>
        <h2 class="aux">${data.name.uk}</h2>
        <div class="vert-sp-1"></div>
        <h2>${data.position}</h2>
    </div>

    <ul class="contacts no-mark">
        <li>${data.location}</li>
        <li><a href="mailto:${data.email}">${data.email}</a></li>
        <li><a href="tel:${data.phone}">${data.phone}</a></li>
        <li><a href="https://${data.github}" target="_blank">${data.github}</a></li>
    </ul>
</header>`];

const techSkills = data.techSkills.map(e => `<h4>${e[0]}:</h4><p class="ind-1">${e[1]}.</p>`).join('');
const experience = data.experience.map(e => `<li>${e}</li>`).join('');
const languages = data.languages.map(e => `<li>${e[0]}: ${e[1]}</li>`).join('');
const projects = data.projects.map(e => {
    return `<li>
        <p><strong>${e[0]}</strong> – ${e[1]}</p>
        <p class="ind-1">${e[2].join('<span> | </span>')}</p>
    </li>`
}).join('');

const href = location.href.replace('https://', '').split('/')[0];

parts.push(`<main>
    <hr>
    <h3>Summary</h3>
    <p>${data.summary}</p>
    <h3>Technical Skills</h3>
    ${techSkills}
    <h3>Experience</h3>
    <ul class="exp-list">${experience}</ul>
    <h3>Education</h3>
    <p>${data.education}</p>
    <h3>Languages</h3>
    <ul class="exp-list">${languages}</ul>
    <h3>Selected Work</h3>
    <ul class="no-mark">${projects}</ul>
    <div class="vert-sp-3"></div>
    <p class="abs-right-bottom print-only">Latest CV: <a href="https://${href}">${href}</a></p>
</main>`);
// text-right

// output.innerHTML = parts.join('')
//     .replaceAll('((', '<span class="aux">(')
//     .replaceAll('))', ')</span>');
output.innerHTML = HTMLize(parts.join(''));