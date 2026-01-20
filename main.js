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

    <ul class="contacts">
        <li>${data.location}</li>
        <li><a href="mailto:${data.email}">${data.email}</a></li>
        <li><a href="tel:${data.phone}">${data.phone}</a></li>
        <li><a href="https://${data.github}" target="_blank">${data.github}</a></li>
    </ul>
</header>`];

const techSkills = data.techSkills.map(e => `<h4>${e[0]}:</h4><p>${e[1]}.</p>`).join('');
const experienceLis = data.experience.map(e => `<li>${e}</li>`).join('');
const languagesLis = data.languages.map(e => `<li>${e[0]}: ${e[1]}</li>`).join('');

const href = location.href.replace('https://', '').split('/')[0];

parts.push(`<main>
    <hr>
    <h3>Summary</h3>
    <p>${data.summary}</p>
    <h3>Technical Skills</h3>
    ${techSkills}
    <h3>Experience</h3>
    <ul class="exp-list">${experienceLis}</ul>
    <h3>Education</h3>
    <p>${data.education}</p>
    <h3>Languages</h3>
    <ul class="exp-list">${languagesLis}</ul>
    <div class="vert-sp-3"></div>
    <p class="text-right print-only">Latest CV: <a href="https://${href}">${href}</a></p>
</main>`);
// 

// output.innerHTML = parts.join('')
//     .replaceAll('((', '<span class="aux">(')
//     .replaceAll('))', ')</span>');
output.innerHTML = HTMLize(parts.join(''));