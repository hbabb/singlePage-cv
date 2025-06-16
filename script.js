import { experience, volunteer, skills, education } from "./experience.js";

// Email obfuscation for bots
const user = 'hbabb';
const domain = 'heath-babb.com';
const emailElement = document.getElementById('email');

if (emailElement) {
    const email = `${user}@${domain}`;
    emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
};

// Dynamic skills rendering
const skillsContainer = document.getElementById('skills');

if (skillsContainer) {
    skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = skill;
        skillsContainer.appendChild(badge);
    });
};

// Dynamic experience mapping
const expSection = document.getElementById('experience-container');

if (expSection) {
    experience.forEach(job => {
        const container = document.createElement('article');
        container.className = 'job';
        container.innerHTML = `
            <h5>${job.company} - ${job.role}</h5>
            <small>
                <span class="location">${job.location}</span>
                <span class="years">${job.years}</span>
            </small>
            <p>${job.description}</p>
        `;
        expSection.appendChild(container);
    });
};

// Dynamic volunteer experience mapping
const volSection = document.getElementById('volunteer-container');

if (volSection) {
    volunteer.forEach(vol => {
        const container = document.createElement('article');
        container.className = 'vol';
        container.innerHTML = `
            <h5>${vol.company} - ${vol.role}</h5>
            <small>
                <span class="location">${vol.location}</span>
                <span class="years">${vol.years}</span>
            </small>
            <p>${vol.description}</p>
        `;
        volSection.appendChild(container);
    });
};

// Dynamic experience mapping
const eduSection = document.getElementById('education-container');

if (volSection) {
    education.forEach(edu => {
        const container = document.createElement('article');
        container.className = 'edu';
        container.innerHTML = `
            <h5>${edu.school} - ${edu.program}</h5>
            <small>
                <span class="location">${edu.location}</span>
                <span class="years">${edu.years}</span>
            </small>
            <p>${edu.description}</p>
        `;
        eduSection.appendChild(container);
    });
};

