const data = {
    name: {
        en: 'Stepan Mutsikivskyi',
        uk: 'Степан Муціківський'
    },
    position: 'Software Developer (Web, JavaScript)',
    location: 'Kyiv, Ukraine',
    email: 'sultepronit@gmail.com',
    phone: '+38 097 816 3650',
    github: 'github.com/sultepronit',
    summary: 'Self-taught developer with a strong background in chemistry and extensive hands-on experience in web applications, JavaScript, PWA, and small-scale backend setups. Skilled at turning legacy systems into working solutions and maintaining complex personal projects. Quick learner, resourceful, and capable of delivering functional software in diverse environments.',
    //  Efficient use of AI tools for rapid prototyping and complex problem-solving.
    techSkills: [
        [
            'Languages & Technologies',
            'JavaScript ((legacy & modern)), HTML, CSS, TypeScript, Node.js, PHP, Go'
        ],
        [
            'Frontend & Web Apps',
            'Vanilla JS, Web Components, Vite, PWA, NW.js, IndexedDB'
        ],
        [
            'Version Control & Deployment',
            'Git, GitHub CLI, Vercel, Render, Netlify'
        ],
        [
            'Backend & Databases',
            'Google App Engine ((serverless)), Google Compute Engine ((VM)), Linux, Docker, Nginx, SQLite'
        ],
        [
            'API & AI',
            'RESTful APIs, Firebase, Google Apps Script, GC Translation API, Gemini API, Prompt Engineering'  
        ]
    ],
    experience: [
        'Built PWA applications for personal workflow optimization, including multi-platform calculator and language learning tools.',
        // 'Configured personal backend servers (Docker conainered Node.js, PHP) with Nginx and Certbot for secure internal APIs.',
        'Set up and maintain backend infrastructure on Google Compute Engine (Ubuntu Server) with Docker, Nginx, Certbot etc.',
        // 'Developed web-based tools to replace legacy lab software; maintained functionality across outdated Windows systems (XP) and modern browsers.',
        'Developed web-based tools to replace legacy lab software; maintained functionality across outdated systems (Windows XP with Chrome 49 / NW.js v0.14) and modern browsers.',
        'Developed language learning tools integrating Gemini API and Google Translate API. Implemented custom logic to handle idiomatic expressions and context-aware translations where traditional tools fail.',
        // 'Built a unique search algorithm for Japanese characters using AI to identify visual and structural similarities between Kanji significantly improving the lookup process for learners.'
        // 'Experienced in full-cycle project workflow: coding, version control, deployment, debugging, and incremental improvement.'
    ],
    education: 'Chemistry ((STEM)) | Ivan Franko National University of Lviv | 2011 – 2016',
    languages: [
        ['Ukrainian', 'Native'],
        ['English', 'Intermediate ((expressing myself)) / advanced ((understanding))'],
        ['Japanese', 'Basic ((self-taught))'],
    ],
    projects: [
        [
            'Cross-platform calculator',
            'my personal PWA helper, that satisfies my needs on Linux, Windows & Android.',
            ['[a=github.com/sultepronit/super-calc]', '[a=calc100.vercel.app]']
        ],
        [
            'GAE set-up',
            'serverless backend written with Go for several of my web apps (Gemini API usage example).',
            ['[a=github.com/sultepronit/stateless-app]', '(private, demo on request)']
        ]
    ]
};

export default data;


