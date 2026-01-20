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
    // summary: 'Resourceful developer with a track record of building functional web and desktop solutions for real-world laboratory environments. Expert in Vanilla JS and Web Components, with a focus on PWA and offline-first applications. Proven ability to modernize legacy systems and bridge the gap between complex domain requirements (science/data) and working software.',
    //  Efficient use of AI tools for rapid prototyping and complex problem-solving.
    techSkills: [
        // [ 'Core', 'JavaScript (legacy & modern), Web Components, Vanilla JS.'],
        // [ 'Desktop & Mobile', 'PWA, NW.js, Responsive Web Design.'],
        // [ 'API & AI', 'RESTful APIs, Google Cloud Translation, Gemini API, Prompt Engineering.'],
        // [ 'Data & Backend', 'Node.js, Go, SQLite, Firebase, Google Apps Script, IndexedDB.'],
        // [ 'Cloud & Infra', 'Google Cloud Platform, Docker, Linux (CLI).'],
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
            'SQLite, Google App Engine ((serverless)), Google Compute Engine ((VM)), Linux, Docker, Nginx'
        ],
        [
            'API & AI',
            'RESTful APIs, Firebase, Google Apps Script, GC Translation API, Gemini API, Prompt Engineering'  
        ]
    ],
    experience: [
        'Built PWA applications for personal workflow optimization, including multi-platform calculator ([a=calc100.vercel.app]) and language learning tools.',
        // 'Developed web-based tools to replace legacy lab software; maintained functionality across outdated Windows systems (XP) and modern browsers.',
        'Set up and maintain backend infrastructure on Google Compute Engine (Ubuntu Server) with Docker, Nginx, Certbot etc.',
        'Developed web-based tools to replace legacy lab software; maintained functionality across outdated systems (Windows XP with Chrome 49 / NW.js v0.14) and modern browsers.',
        // 'Configured personal backend servers (Docker conainered Node.js, PHP) with Nginx and Certbot for secure internal APIs.',
        'Developed language learning tools integrating Gemini API and Google Translate API. Implemented custom logic to handle idiomatic expressions and context-aware translations where traditional tools fail.',
        // 'Built a unique search algorithm for Japanese characters using AI to identify visual and structural similarities between Kanji significantly improving the lookup process for learners.'
        // 'Experienced in full-cycle project workflow: coding, version control, deployment, debugging, and incremental improvement.'
    ],
    education: 'Chemistry ((STEM)) | Ivan Franko National University of Lviv | 2011 – 2016',
    languages: [
        ['Ukrainian', 'Native'],
        ['English', 'Inermedaite ((expressing myself)) / advanced ((understanding))'],
        ['Japanese', 'Basic ((self-taught))'],
    ]
};

export default data;


