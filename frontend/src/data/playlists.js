// src/data/playlists.js
const playlists = [
    {
      id: 'introduction',
      title: 'Installing VS Code',
      description: 'Installing VS Code & How Websites Work',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-1', url: 'tVzUXW6siu0', title: 'Installing VS Code & How Websites Work', watched: false}, // Video IDs only
      ],
    },

    {
      id: 'html',
      title: 'HTML 5',
      description: 'Understanding HTML and becoming familier to it',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-2', url: 'kJEsTjH5mVg', title: 'Your First HTML Website', watched: false},
        {id: 'video-3', url: 'BGeDBfCIqas', title: 'Basic Structure of an HTML Website', watched: false},
        {id: 'video-4', url: 'nXba2-mgn1k', title: 'Heading, Paragraphs and Links', watched: false},
        {id: 'video-5', url: '1BsVhumGlNc', title: 'Image, Lists, and Tables in HTML', watched: false},
        {id: 'video-6', url: 'CyRlWlaJnTY', title: 'SEO and Core Web Vitals in HTML', watched: false},
        {id: 'video-7', url: 'tLBlhp0SA_0', title: 'Forms and input tags in HTML', watched: false},
        {id: 'video-8', url: 'vnnlUCLfn6I', title: 'Inline & Block Elements in HTML', watched: false},
        {id: 'video-9', url: 'vlAWzsGd-Yk', title: 'Id & Classes in HTML', watched: false},
        {id: 'video-10', url: 'XZwBNDGuWGU', title: 'Video, Audio & Media in HTML', watched: false},
        {id: 'video-11', url: 'fhoDRB53DwY', title: 'Semantic Tags  in HTML', watched: false},
        {id: 'video-12', url: '5xFRg_TzlAg', title: 'Exercise 1 - Pure HTML Media Player', watched: false},
        {id: 'video-13', url: 'cvsbHZcDx8w', title: 'Entities, Code tag and more on HTML', watched: false},
      ],
    },

    {
      id: 'css',
      title: 'CSS 3',
      description: 'Working with CSS',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-14', url: '1dkfuga2_Ps', title: 'Introduction to CSS', watched: false},
        {id: 'video-15', url: '-XwZpYIyCEA', title: 'Inline, Internal & External CSS', watched: false},
        {id: 'video-16', url: 'anGMeDGvZhw', title: 'Exercise 1 - Solution & Shoutouts', watched: false},
        {id: 'video-17', url: '1cEG1T8beO4', title: 'CSS Selectors MasterClass', watched: false},
        {id: 'video-18', url: 'Xrxd6cEajhM', title: 'CSS Box Model - Margin, Padding & Borders', watched: false},
        {id: 'video-19', url: 'aFicd4-YTfo', title: 'CSS Fonts, Text & Color Properties', watched: false},
        {id: 'video-20', url: '4aBolpJoutw', title: 'Exercise 2 - CSS Challenge', watched: false},
        {id: 'video-21', url: 'uTcpbPMZlFE', title: 'CSS Specificity & Cascade', watched: false},
        {id: 'video-22', url: 'nkaAJYfRDVk', title: 'CSS Sizing Units - px, rem, em, vh, vw, % & more', watched: false},
        {id: 'video-23', url: 'hRHV5cjEB1w', title: 'CSS Display Property', watched: false},
        {id: 'video-24', url: 'BZJcNU648Tc', title: 'CSS Shadows and Outlines', watched: false},
        {id: 'video-25', url: 'ZIofkptpXO8', title: 'Styling Lists using CSS', watched: false},
        {id: 'video-26', url: 'ntlawluDB-c', title: 'CSS Overflow Property', watched: false},
        {id: 'video-27', url: 'g1HJ65p5YdI', title: 'Exercise 2 - Solutions and Shoutouts', watched: false},
        {id: 'video-28', url: 'cOw6tgH6P20', title: 'CSS Position Property', watched: false},
        {id: 'video-29', url: 'nm3HrrUuz50', title: 'Exercise 3 - Design this Card', watched: false},
        {id: 'video-30', url: 'ovRU9xHfly4', title: 'CSS Variables', watched: false},
        {id: 'video-31', url: 'eHye3PxH4jU', title: 'CSS Media Queries', watched: false},
        {id: 'video-32', url: '2PWgbyL3ex8', title: 'Exercise 3 - Solution', watched: false},
        {id: 'video-33', url: '-WN74rN9OPI', title: 'Exercise 4 - Multi Color Website', watched: false},
        {id: 'video-34', url: '6_UoTF7njLM', title: 'CSS Float & Clear', watched: false},
        {id: 'video-35', url: 'L8NfSewTfxY', title: 'More on CSS Selectors', watched: false},
        {id: 'video-36', url: 'n1T6Ve00j24', title: 'Exercise 4 - Solution & Shoutouts', watched: false},
        {id: 'video-37', url: '8Hk4MmO9ZeQ', title: 'CSS Exercise 5 - Design this Layout', watched: false},
        {id: 'video-38', url: 'DWk2mndNTHY', title: 'CSS Flexbox - Ultimate MasterClass', watched: false},
        {id: 'video-39', url: '7AgEjgUtho4', title: 'CSS Grid - Ultimate MasterClass', watched: false},
        {id: 'video-40', url: '-uVJlSHueYQ', title: 'Exercise 5 - Solution & Shoutouts', watched: false},
        {id: 'video-41', url: 'A5fK2Y8-if8', title: 'Exercise 6 - Navbar using Flexbox', watched: false},
        {id: 'video-42', url: 'GGlzzLTLzxs', title: 'CSS Transforms MasterClass', watched: false},
        {id: 'video-43', url: 'SC7GCk1OiVo', title: 'Exercise 6 - Solution & Shoutouts', watched: false},
        {id: 'video-44', url: 'zJaiTrw-hu8', title: 'Exercise 7 - Design the Grid', watched: false},
        {id: 'video-45', url: 'pHI4PBFM0wY', title: 'CSS Transition Property', watched: false},
        {id: 'video-46', url: 'cDLVIoXW-OQ', title: 'CSS Animations', watched: false},
        {id: 'video-47', url: 'yktqxOHOeR4', title: 'Exercise 7 - Solution & Shoutouts', watched: false},
        {id: 'video-48', url: 'PIC0Ps_Ci-s', title: 'Exercise 8 - Bounce Animation', watched: false},
        {id: 'video-49', url: 'ognrhoi0C-w', title: 'CSS Object-fit and Object-cover', watched: false},
        {id: 'video-50', url: 'tSzDHVWG1hI', title: 'CSS Filters | Sigma Web Development Course', watched: false},
        {id: 'video-51', url: 'chYx6vVzWVw', title: 'Exercise 8: Solution & Shoutouts', watched: false},
        {id: 'video-52', url: 'mpJb9GNxdYI', title: 'Figma Basics in One Video', watched: false},
        {id: 'video-53', url: 'ovKVqo-L2EM', title: 'Netflix Clone Using HTML & CSS', watched: false},
      ],
    },

    {
      id: 'js',
      title: 'JavaScript',
      description: 'JavaScript & JS-DOM',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-54', url: 'NrhP53Divco', title: 'Introduction to JavaScript & Installing Node.js', watched: false},
        {id: 'video-55', url: 'HGCDMJXS1cc', title: 'JavaScript Variables, Data Types & Objects', watched: false},
        {id: 'video-56', url: '1R4NGtsj7hw', title: 'JavaScript Conditionals: if, else if,  else ladder', watched: false},
        {id: 'video-57', url: 'y32sWmu-RI4', title: 'JavaScript Loops', watched: false},
        {id: 'video-58', url: 'Jtc3j4ZNZEQ', title: 'JavaScript Functions', watched: false},
        {id: 'video-59', url: 'OrWmrQ2wrKU', title: 'Exercise 9 - Faulty Calculator', watched: false},
        {id: 'video-60', url: 'uJbYqm7W_mA', title: 'JavaScript Strings', watched: false},
        {id: 'video-61', url: 'nQAUGxt2qoU', title: 'JavaScript Exercise 9 - Solution & Shoutouts', watched: false},
        {id: 'video-62', url: 'FkEbEfHQAZw', title: 'JavaScript Exercise 10 - Business Name Generator', watched: false},
        {id: 'video-63', url: 'IFZZAaiatcQ', title: 'JavaScript Arrays', watched: false},
        {id: 'video-64', url: 'wPWZqewZ4LA', title: 'JavaScript Exercise 10 - Solution', watched: false},
        {id: 'video-65', url: 'ccfq9yW-dYU', title: 'JavaScript Exercise 11 - Calculate the Factorial', watched: false},
        {id: 'video-66', url: 'oxO1Z5L5S4c', title: 'Document Object Model in JavaScript', watched: false},
        {id: 'video-67', url: '_8o_BiLAgQM', title: 'JavaScript DOM - Children, Parent & Sibling Nodes', watched: false},
        {id: 'video-68', url: 'uFbCTidM-xw', title: 'JavaScript -  Selecting by Ids, Classes, and More', watched: false},
        {id: 'video-69', url: 'Xoz_KYfaSkk', title: 'JavaScript Exercise 11 - Solution & Shoutouts', watched: false},
        {id: 'video-70', url: 'V4ohRrvu4Ok', title: 'JavaScript Exercise 12 - Color the Boxes', watched: false},
        {id: 'video-71', url: 'KB7GzBv5p4Q', title: 'Inserting and Removing Elements using JavaScript', watched: false},
        {id: 'video-72', url: 'mCx5aSEK8YE', title: 'JavaScript Exercise 12 - Solution & Shoutouts', watched: false},
        {id: 'video-73', url: 'KtL-SQ20Q0s', title: 'JavaScript Exercise 13 - Dynamic Website Builder', watched: false},
        {id: 'video-74', url: 'CO_DAXswOrc', title: 'Events, Event Bubbling, setInterval & setTimeout', watched: false},
        {id: 'video-75', url: '9JaDBYPmiJ0', title: 'JavaScript Callbacks & Promises', watched: false},
        {id: 'video-76', url: 'gRLdHSabW3o', title: 'Async/Await & Fetch API in JavaScript with Examples', watched: false},
        {id: 'video-77', url: 'UzYRQURh_pY', title: 'JavaScript Exercise 13 - Solution & Shoutouts', watched: false},
        {id: 'video-78', url: 'WYazkpCQNQw', title: 'JavaScript Exercise 14 - Hackers Terminal', watched: false},
        {id: 'video-79', url: 'aQn7ssqHYp4', title: 'JavaScript try catch & Error Handling', watched: false},
        {id: 'video-80', url: 'FeBbjzVOeRU', title: 'Classes & Objects - Object Oriented Programming in Js', watched: false},
        {id: 'video-81', url: '9H-Ieq6zjIY', title: 'JavaScript Exercise 14 - Solution & Shoutouts', watched: false},
        {id: 'video-82', url: 'tcQDnqRakxk', title: 'Advanced JavaScript', watched: false},
        {id: 'video-83', url: 'Vwxs9YJWsx4', title: 'JavaScript Interview Questions', watched: false},
        {id: 'video-84', url: 'CYwEq1GdU4E', title: 'Spotify Clone using HTML, CSS & JavaScript', watched: false},
      ],
    },

    {
      id: 'nodejs',
      title: 'Node.js & Express js',
      description: 'Node.js and Express js ans working with files',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-85', url: 'NoWRBo3Uf8E', title: 'Backend, Node.js & npm', watched: false},
        {id: 'video-86', url: 'bU69doALJGU', title: 'CommonJs Vs EcmaScript Modules', watched: false},
        {id: 'video-87', url: 'BTcmvrCTyNg', title: 'Working with Files: fs and path Modules', watched: false},
        {id: 'video-88', url: 'R11tvGM3nDY', title: 'Introduction to Express Js', watched: false},
        {id: 'video-89', url: 'SksvlZM-5Sk', title: 'Response, Request and Routers in Express', watched: false},
        {id: 'video-90', url: 'VELNPK0dK84', title: 'Middlewares in Express Js', watched: false},
        {id: 'video-91', url: '1YSVEW3i8OQ', title: 'Exercise 15 - Clear the Clutter', watched: false},
        {id: 'video-92', url: 'Kah88N8W5rs', title: 'ejs Template Engine in Express', watched: false},
        {id: 'video-93', url: 'bM7bmh955Gs', title: 'Exercise 15 - Solution & Shoutouts', watched: false},
      ],
    },

    {
      id: 'mongodb',
      title: 'MongoDB and Mongoose',
      description: 'Learn MongoDB and CRUD operations using MongoDB and Mongoose',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-94', url: 'oMrKVEedpHg', title: 'Installing MongoDB & MongoDB Compass', watched: false},
        {id: 'video-95', url: '9Om0FMBz1yU', title: 'CRUD Operations in MongoDB', watched: false},
        {id: 'video-96', url: 'wgwo5hbY7SY', title: 'Installing Mongoose & Using it with Express', watched: false},
        {id: 'video-97', url: 'yDnxgIRcnso', title: 'Exercise 16 - Dummy Data Generator', watched: false},
      ],
    },

    {
      id: 'tailwind',
      title: 'Tailwind',
      description: 'Tailwind CSS',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-98', url: '-g969furGik', title: 'Tailwind CSS in one Video', watched: false},
        {id: 'video-99', url: '15jN-KKoSCA', title: 'Exercise 16 - Solution & Shoutouts', watched: false},
        {id: 'video-100', url: 'eGc35Qj0y4Q', title: 'Exercise 17 - Design This Layout', watched: false},
        {id: 'video-101', url: 'iegMqFnVocA', title: 'X.com (Twitter) Clone using Tailwind CSS', watched: false},
        {id: 'video-102', url: 'KAIGrGEDm78', title: 'Exercise 17 - Solution & Shoutouts', watched: false},
      ],
    },

    {
      id: 'hosting',
      title: 'Hosting',
      description: 'Hosting an Express app using Hostinger',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-103', url: 'c2A5XJidIDA', title: 'What is Hosting? Where to Host? Which Hosting?', watched: false},
        {id: 'video-104', url: 'AgjdDXofJZ8', title: 'Hosting an Express App on Ubuntu VPS using Hostinger', watched: false},
      ],
    },

    {
      id: 'react',
      title: 'React',
      description: 'React js',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-105', url: "nhSZ4LhIii8", title: "Introduction to React & Why use React?", watched: false},
        {id: 'video-106', url: "S4VH8hddg8c", title: "Components, Props and JSX in React", watched: false},
        {id: 'video-107', url: "zHoWgJD0jw4", title: "Hooks & State in React", watched: false},
        {id: 'video-108', url: "bio2eP5YXyw", title: "The useEffect Hook in React", watched: false},
        {id: 'video-109', url: "VlSNiL_x4mo", title: "The useRef Hook in React", watched: false},
        {id: 'video-110', url: "96DGjqlAIxs", title: "Conditional Rendering & Rendering Lists in React", watched: false},
        {id: 'video-111', url: "KDpm8h8XzC4", title: "Exercise 18 - Display the Cards", watched: false},
        {id: 'video-112', url: "cXkwFjBrWfk", title: "Handling Events in React", watched: false},
        {id: 'video-113', url: "iZdOrqJuPrg", title: "Exercise 18 - Solution & Shoutouts", watched: false},
        {id: 'video-114', url: "SBuZSalHLe0", title: "TodoList App using React, Tailwind & React Icons", watched: false},
        {id: 'video-115', url: "ZP8QyCIUeIA", title: "React Router: Routing in React", watched: false},
        {id: 'video-116', url: "jIbXtgL0qrg", title: "The useContext hook in React", watched: false},
        {id: 'video-117', url: "rRiBpNhFgoM", title: "The useMemo hook in React", watched: false},
        {id: 'video-118', url: "M1ELG5Wgtdo", title: "The useCallback hook in React", watched: false},
        {id: 'video-119', url: "SdzMBWT2CDQ", title: "Handling Forms + Connecting React to Express Backend", watched: false},
      ],
    },

    {
      id: 'redux',
      title: 'Redux',
      description: 'Learn Redux in One video',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-120', url: "J5By-Q4ZhZs", title: "Learn Redux in One video", watched: false}
      ],
    },

    {
      id: 'nextjs',
      title: 'Next.js',
      description: 'Learn Next.js',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-121', url: "6XVaVITFOgY", title: "Introduction to Next.js & File based routing", watched: false},
        {id: 'video-122', url: "YuX_R4RGdZw", title: "Server Components in Next.js", watched: false},
        {id: 'video-123', url: "tHTtOJl7ZlI", title: "Script, Link & Image components in Next.js", watched: false},
        {id: 'video-124', url: "0rC-3PyhNnI", title: "Creating APIs in Next.js", watched: false},
        {id: 'video-125', url: "lvU8fMNVivY", title: "Server Actions in Next.js", watched: false},
        {id: 'video-126', url: "nZ2heJVkawQ", title: "Middleware in Next.js", watched: false},
        {id: 'video-127', url: "2JnEq3ZmLH0", title: "Auth.js - Authentication in Next.js", watched: false},
        {id: 'video-128', url: "D7YuI6vOzdY", title: "Dynamic Routes in Next.js", watched: false},
        {id: 'video-129', url: "jWi8d3SJYN0", title: "Layouts in Next.js", watched: false},
        {id: 'video-130', url: "sgNZcK8QIyc", title: "React Project: Password Manager using React, Tailwind, MongoDB & Express | Sigma WebD Tutorial #130", watched: false},
        {id: 'video-131', url: "QtaorVNAwbI", title: "Project GetMeAChai - Patreon Clone in Next.js", watched: false},
        {id: 'video-132', url: "K052tdPqa5U", title: "Understanding next/navigation module in Next.js", watched: false},
        {id: 'video-133', url: "O0UGlA1YVUI", title: "SSR, SSG & ISR in Next.js", watched: false},
        {id: 'video-134', url: "DbVI7QnDnjY", title: "Environment Variables in Next.js", watched: false},
        {id: 'video-135', url: "M6aXSV2HAHo", title: "Styled JSX and other ways to Style in Next.js", watched: false},
        {id: 'video-136', url: "Ojo_lo0djbQ", title: "[Project] Let's Build a Url Shortener in Next.js 15", watched: false},
        {id: 'video-137', url: "izwkombjECA", title: "[Project] Let's Build a LinkTree Clone in Next.js 15", watched: false},
        {id: 'video-138', url: "IW1hcRXK2yQ", title: "Deploying our Next.js App to Vercel", watched: false},
      ],
    },

// ---------------------------------------------

    {
      id: 'cp',
      title: 'Competitive Programming',
      description: 'Competitive Programming or DSA (Data Structure and Algorithms) Course For free. Today where a lot of students want to learn Competitive Programming  and the very fact is being exploited by lot of companies by providing expensive courses, this course is to provide free in depth material using which you can become good at Competitive Programming.',
      category: 'cp', // Add category field
      videos: [
          { "id": "video-1", "url": "A-9QuyAsD2U", "title": "Replace all HEADER FIlES with one SINGLE HEADER FILE in C++", "watched": false },
          { "id": "video-2", "url": "Zlx7gmt3lBU", "title": "Best Competitive Coding Setup for Linux, Windows and MAC OS", "watched": false },
          { "id": "video-3", "url": "lHJcLLsre70", "title": "C++ Basics for Competitive Programming - Part 1", "watched": false },
          { "id": "video-4", "url": "9S-b52CSCbQ", "title": "Overflow, Precision Errors, Calculation Order | C++ Basics - Part 2", "watched": false },
          { "id": "video-5", "url": "AxB78suyqr8", "title": "Conditions, Loops, Jump Statements and Questions | C++ Basics - Part 3", "watched": false },
          { "id": "video-6", "url": "abZEVCRYZP8", "title": "C++ Strings, Getline and Big Numbers for Competitive Programming | C++ Basics 4", "watched": false },
          { "id": "video-7", "url": "meGcKZYxVe8", "title": "Why YOU should use STRING PUSHBACK instead of STRING CONCATENATION ? #shorts", "watched": false },
          { "id": "video-8", "url": "EEEa0u0ZQio", "title": "Arrays and Size Limits for Local & Global Arrays | C++ Basics 5", "watched": false },
          { "id": "video-9", "url": "BmwjsdlDg0c", "title": "Why GLOBAL Arrays can have LARGER size than LOCAL Arrays in C/C++ ?  #shorts", "watched": false },
          { "id": "video-10", "url": "cMTFGOmYT9E", "title": "Functions, C++ references and CONTEST ALERT Information | C++ Basics - 6", "watched": false },
          { "id": "video-11", "url": "v_qm2Sce7as", "title": "Pointers in Deep and Easiest Way | C/C++", "watched": false },
          { "id": "video-12", "url": "24Th9w2ywoY", "title": "Discussing 1st Beginner Competitive Programming Contest Live", "watched": false },
          { "id": "video-13", "url": "BMc9hB4hvXU", "title": "Verdicts & Errors on Online Coding Websites Explained", "watched": false },
          { "id": "video-14", "url": "M0tgJaQAo60", "title": "Time Complexity Analysis and Constraints", "watched": false },
          { "id": "video-15", "url": "bvskLsirgrk", "title": "Space Complexity in 30 seconds for Competitive Programming #shorts", "watched": false },
          { "id": "video-16", "url": "RCq5TYMZEwg", "title": "Why Print answer modulo 10^9+7 | Modular Arithmetic", "watched": false },
          { "id": "video-17", "url": "efET3lxYCkM", "title": "Pre-Computation Techniques Basics & Hashing", "watched": false },
          { "id": "video-18", "url": "-dXNgoa27so", "title": "How to Hash Negative Numbers in Competitive Programming 🤔🤔 #shorts", "watched": false },
          { "id": "video-19", "url": "nZe7P674xZo", "title": "Pre-Computation using Prefix Sum in 1D/2D Arrays", "watched": false },
          { "id": "video-20", "url": "e3qhRh4UOug", "title": "Codechef GCDQ: Easy Medium Question on Prefix Computation4", "watched": false },
          { "id": "video-21", "url": "4wqDE1zNUwc", "title": "Must Know Concept in Pre-Computation for every Competitive Programmer5", "watched": false },
          { "id": "video-22", "url": "zwlCeWUGlE0", "title": "Prefix Sum + Hashing HARD Question", "watched": false },
          { "id": "video-23", "url": "RRp37VxHbtU", "title": "Beginners Competitive Programming Contest 2🔥🔥 | Register Fast 🔥🔥  #shorts", "watched": false },
          { "id": "video-24", "url": "d59iXqly5FY", "title": "Recursion from Scratch | Beginners Tutorial", "watched": false },
          { "id": "video-25", "url": "uqkM91ePeTI", "title": "Digit Sum & Array Sum using Recursion | Beginners Tutorial8", "watched": false },
          { "id": "video-26", "url": "cWvruDR-hJA", "title": "Merge Sort & Selection Sort Tutorial for Beginners", "watched": false },
          { "id": "video-27", "url": "R5BEcvTVZj0", "title": "C++ STL : Full Overview in 10 Minutes", "watched": false },
          { "id": "video-28", "url": "udExMlaR_nA", "title": "Pairs and Vectors: C++ STL Tutorial for Beginners", "watched": false },
          { "id": "video-29", "url": "ytyOI1RkZ24", "title": "Nesting In Vectors: C++ STL For Beginners", "watched": false },
          { "id": "video-30", "url": "4EDbe3lhHOM", "title": "ITERATORS: Pointer like structure in C++ STL", "watched": false },
          { "id": "video-31", "url": "xiXMmOSDX3U", "title": "How to write Iterators Code in Short in C++ STL ? | Auto and Range based loops", "watched": false },
          { "id": "video-32", "url": "gUrfXZ0hqoA", "title": "Everything about C++ STL MAPS - Part 1 | Competitive Programming Course | Episode 25", "watched": false },
          { "id": "video-33", "url": "okLflHtlCuk", "title": "Everything about C++ STL MAPS - Part 2: Unordered Maps & Multimaps | CP Course | Episode 26", "watched": false },
          { "id": "video-34", "url": "7mx2BasNK0w", "title": "SET, UNORDERED SET & MULTISET : Beginners Tutorial for C+ STL", "watched": false },
          { "id": "video-35", "url": "hoT_D60UzAU", "title": "STL Question: AC with Multiset, WA with Sets", "watched": false },
          { "id": "video-36", "url": "zyGSg3U1K94", "title": "Nesting in STL Maps and Sets with Example Questions", "watched": false },
          { "id": "video-37", "url": "JK1oBTQRWRA", "title": "Stacks & Queues: C++ STL Tutorials", "watched": false },
          { "id": "video-38", "url": "q-JB0hYyouo", "title": "Balanced Brackets Matching: Easiest Code using Stack", "watched": false },
          { "id": "video-39", "url": "T-E3hWEPWWU", "title": "Next Greater Element using Stacks: Tutorial with Code", "watched": false },
          { "id": "video-40", "url": "zI9wlhwMZpk", "title": "Inbuilt Sort in C++ STL Tutorial | Introsort", "watched": false },
          { "id": "video-41", "url": "3pvZhwp0U9w", "title": "Comparator Function in depth Tutorial using C++ Sort", "watched": false },
          { "id": "video-42", "url": "Cg7SI0WtmXY", "title": "Upper Bound and Lower Bound in C++ STL", "watched": false },
          { "id": "video-43", "url": "sYs0L1vxRjo", "title": "C++ STL Inbuilt Algorithms - Part1", "watched": false },
          { "id": "video-44", "url": "o-WpVoRgSj4", "title": "Inbuilt STL Algorithms & Lambda Function - Part 2", "watched": false },
          { "id": "video-45", "url": "UCphIwZQLA0", "title": "Offline and Online Queries difference in Competitive Programming #shorts", "watched": false },
          { "id": "video-46", "url": "4KpSXSIPH2s", "title": "Generate Parenthesis: Advanced Recursion and Backtracking", "watched": false },
          { "id": "video-47", "url": "u0e29JIdxZU", "title": "Subset Generation using Recursion and backtracking", "watched": false },
          { "id": "video-48", "url": "D8Q7vR59Pjg", "title": "STL Competitive Programming Contest #shorts", "watched": false },
          { "id": "video-49", "url": "egRrgj8JOdY", "title": "Binary Search & How I write it | Tutorial", "watched": false },
          { "id": "video-50", "url": "gcYvFVZ_LUA", "title": "Implement Upper Bound & Lower Bound with Binary Search", "watched": false },
          { "id": "video-51", "url": "5snE6xsyheE", "title": "Nth Root of a Number using Binary Search", "watched": false },
          { "id": "video-52", "url": "JAfJssvFgDI", "title": "Advanced Binary Search with Predicate Function | SPOJ EKO", "watched": false },
          { "id": "video-53", "url": "H9LoqW-gGk0", "title": "Advanced Binary Search with Predicate Function | SPOJ AGGRCOW", "watched": false },
          { "id": "video-54", "url": "q5SXT6YE2qM", "title": "Discussing 3rd Competitive Programming Contest Live | C++ STL", "watched": false },
          { "id": "video-55", "url": "Uv1LpSKZcm4", "title": "How to Calculate Time Complexity In Recursion ?", "watched": false },
          { "id": "video-56", "url": "LbRfPQwBEXQ", "title": "Ultimate MATHS & NUMBER THEORY COURSE for Competitive Programming COMING", "watched": false },
          { "id": "video-57", "url": "DYwhXwGj1L4", "title": "Binary Numbers and Bits Basics For Competitive Programming | EP 47", "watched": false },
          { "id": "video-58", "url": "yEa0vkjJSf0", "title": "PLAYING WITH BITS | Set, Unset, Count Bits", "watched": false },
          { "id": "video-59", "url": "XjtYsFjXtoE", "title": "6 Amazing BIT Manipulation Ticks You must Know", "watched": false },
          { "id": "video-60", "url": "SFOlkUnjtA4", "title": "Power of XOR Operator", "watched": false },
          { "id": "video-61", "url": "mqCdA8mcJeo", "title": "What is Bit Masking with example Question", "watched": false },
          { "id": "video-62", "url": "wpWGDHmpbgA", "title": "How to GENERATE SUBSETS using Bit Masking", "watched": false },
          { "id": "video-63", "url": "utZcJ0leZ_g", "title": "GCD and LCM using Euclid's Algorithm With Applications", "watched": false },
          { "id": "video-64", "url": "J63JPxqmyzg", "title": "Binary Exponentiation : Recursive Method.1", "watched": false },
          { "id": "video-65", "url": "K8mJ27S72v0", "title": "Binary Exponentiation : Iterative Method.2", "watched": false },
          { "id": "video-66", "url": "vz0P_2V0y7M", "title": "Large Exponentiation using Binary Multiplication", "watched": false },
          { "id": "video-67", "url": "GApcdkIe9WM", "title": "Large Exponentiation with ETF & Euler's Theorem.1", "watched": false },
          { "id": "video-68", "url": "877jLgKg_yg", "title": "Leetcode SuperPow : Large Exp, ETF & Euler's Theorem.2", "watched": false },
          { "id": "video-69", "url": "uy_C8BkuN9w", "title": "Basics of Factors and Divisors related problems", "watched": false },
          { "id": "video-70", "url": "9gQv4S_Sn6E", "title": "Prime Numbers, Primality Test, Prime Sieve and Applications", "watched": false },
          { "id": "video-71", "url": "t5Wkbmb3wEo", "title": "Euclid's Algorithm for GCD, LCM and Divisor problems", "watched": false },
          { "id": "video-72", "url": "DZgeU2vcNvI", "title": "Sieve of Eratosthenes for Prime Numbers & Advanced Problems", "watched": false },
          { "id": "video-73", "url": "qqw2Mw3olXQ", "title": "Prime Factorization, Fermat's Little Theorem", "watched": false },
          { "id": "video-74", "url": "1DWj_MtqM8k", "title": "Modular Arithmetic, Mod Inverse, Modular Exponentiation", "watched": false },
          { "id": "video-75", "url": "eD8sZrDAG2A", "title": "Modular Multiplicative Inverse & Fermat's Theorem", "watched": false },
          { "id": "video-76", "url": "kTXXkbg0lzE", "title": "Matrix Exponentiation for Recurrence Relations", "watched": false },
          { "id": "video-77", "url": "1gZ1TmR7N2o", "title": "Matrix Exponentiation & Fibonacci Numbers", "watched": false },
          { "id": "video-78", "url": "acm6Nnpvgmg", "title": "All Sieve Concepts in ONE Medium Hard Question", "watched": false },
          { "id": "video-79", "url": "0r2kXRQZ_lA", "title": "Solve These Questions for Good BIT Manipulation Intuition", "watched": false },
          { "id": "video-80", "url": "rrH3nZ9KjCY", "title": "Inclusion Exclusion Explained ! with Practice Question", "watched": false },
          { "id": "video-81", "url": "hE97YT-347U", "title": "Graph/Trees Ultimate Free Course Incoming", "watched": false },
          { "id": "video-82", "url": "NVScSdGKlUI", "title": "All the Tree/Graph Terminologies Explained", "watched": false },
          { "id": "video-83", "url": "ZT2o8iDCk6o", "title": "How To Represent Trees and Graphs in Code | Adjacency Matrix & List", "watched": false },
          { "id": "video-84", "url": "9_ftWKch6vI", "title": "Depth First Search", "watched": false },
          { "id": "video-85", "url": "zBbRgLpeZus", "title": "How to find Connected Components and Cycle in a Graph using DFS", "watched": false },
          { "id": "video-86", "url": "hVFFWpSRY4o", "title": "How To Solve Graph Matrix Problems using DFS", "watched": false },
          { "id": "video-87", "url": "i_FktdKVXDc", "title": "How to DFS in a TREE | Height and Depth of a TREE", "watched": false },
          { "id": "video-88", "url": "w2oz11KWNQY", "title": "Pre-Computation using DFS | Subtree Queries", "watched": false },
          { "id": "video-89", "url": "m8qXEz1Xe8w", "title": "How to find Diameter of a Tree", "watched": false },
          { "id": "video-90", "url": "il2HXsJPGO4", "title": "How to find Lowest Common Ancestor(LCA) in a Tree", "watched": false },
          { "id": "video-91", "url": "NzEzJ6Rmv2Q", "title": "Edge Deletion Questions using DFS", "watched": false },
          { "id": "video-92", "url": "M8jdDR5kV3k", "title": "Breadth First Search", "watched": false },
          { "id": "video-93", "url": "WOV3LYhPews", "title": "How to find Shortest Path using BFS | SPOJ NAKANJ", "watched": false },
          { "id": "video-94", "url": "SQOQ99stCas", "title": "0-1 BFS", "watched": false },
          { "id": "video-95", "url": "xvi8PqRrAyU", "title": "Multi Source BFS", "watched": false },
          { "id": "video-96", "url": "F3PNsWE6_hM", "title": "Dijkstra Algorithm", "watched": false },
          { "id": "video-97", "url": "5MEZXOyaRmk", "title": "Floyd Warshall Algorithm: All Pair Shortest Path", "watched": false },
          { "id": "video-98", "url": "aZ9-frzila0", "title": "Floyd Warshall Must Solve Question", "watched": false },
          { "id": "video-99", "url": "zEAmQqOpfzM", "title": "Disjoint Set Union (DSU)", "watched": false },
          { "id": "video-100", "url": "L8SuKrpNc2Q", "title": "Disjoint Set Union Practice Questions", "watched": false },
          { "id": "video-101", "url": "xDrLSOxaFrA", "title": "Kruskal's Algorithm: Minimum Spanning Tree Tutorial", "watched": false },
          { "id": "video-102", "url": "pZXatDdVELI", "title": "Google Interview Hard Question]", "watched": false },
          { "id": "video-103", "url": "xeeo6nhq9IY", "title": "DYNAMIC PROGRAMMING ULTIMATE COURSE OVERVIEW", "watched": false },
          { "id": "video-104", "url": "u7DdPBAJttU", "title": "Introduction to Dynamic Programming", "watched": false },
          { "id": "video-105", "url": "mnuBvHbMNJM", "title": "Frog 1 & 2: Atcoder 1D DP Questions", "watched": false },
          { "id": "video-106", "url": "mNrzyuus2h4", "title": "Longest Increasing Subsequence (LIS) | Dynamic Programming", "watched": false },
          { "id": "video-107", "url": "PoTE56n_It8", "title": "Coin Change 1 & 2 : Leetcode DP Questions", "watched": false },
          { "id": "video-108", "url": "o0NtrkItjws", "title": "Knapsack Concept and Variations: Dynamic Programming", "watched": false },
          { "id": "video-109", "url": "gHVtY5raAQg", "title": "Knapsack 2 Atcoder Tutorial With Code: Dynamic Programming", "watched": false },
          { "id": "video-110", "url": "KnzlqtUDfIc", "title": "ROD CUTTING: Dynamic Programming", "watched": false },
          { "id": "video-111", "url": "G46kdLkQ_Sw", "title": "SUBSET SUM & PARTITION PROBLEM : Dynamic Programming", "watched": false },
          { "id": "video-112", "url": "Q0o9sU1r0FY", "title": "Longest Common Subsequence: Dynamic Programming", "watched": false }
        
      ],
    },

// ------------------------------------------

    {
      id: 'basics',
      title: 'Basics',
      description: 'Learn the basic C++',
      category: 'dsa', // Add category field
      videos: [
          {
            "id": "video-1",
            "url": "h3uDCJ5mvgw",
            "title": "How to setup VS code for DSA and CP | Input / Output split format",
            "watched": false
          },
          {
            "id": "video-2",
            "url": "EAR7De6Goz4",
            "title": "C++ Basics in One Shot",
            "watched": false
          },
          {
            "id": "video-3",
            "url": "FPu9Uld7W-E",
            "title": "Time and Space Complexity",
            "watched": false
          },
          {
            "id": "video-4",
            "url": "tNm_NNSB3_w",
            "title": "Solve any Pattern Question - Trick Explained | 22 Patterns in 1 Shot",
            "watched": false
          },
          {
            "id": "video-5",
            "url": "RRVYpIET_RU",
            "title": "Complete C++ STL in 1 Video",
            "watched": false
          },
          {
            "id": "video-6",
            "url": "1xNbjMdbjug",
            "title": "Basic Maths for DSA | Euclidean Algorithm",
            "watched": false
          },
          
        ]
    },
    {
      id: 'array',
      title: 'Array',
      description: 'Arrays Playlist | Basics to Advanced',
      category: 'dsa', // Add category field
      videos: [
        {"id": "7", "title": "Find Second Largest Element in Array | Remove duplicates from Sorted Array | Arrays Intro Video", "url": "37E9ckMDdTk", "watched": false},
        {"id": "8", "title": "Rotate Array by K places | Union, Intersection of Sorted Arrays | Move Zeros to End | Arrays Part-2", "url": "wvcQg43_V8U", "watched": false},
        {"id": "9", "title": "Find element that appears once | Find missing number | Max Consecutive number of 1's | Arrays Part-3", "url": "bYWLJb3vCWY", "watched": false},
        {"id": "10", "title": "Longest Subarray with sum K | Brute - Better - Optimal | Generate Subarrays", "url": "frf7qxiN2qU", "watched": false},
        {"id": "11", "title": "2 Sum Problem | 2 types of the same problem for Interviews | Brute-Better-Optimal", "url": "UXDSeD9mN-k", "watched": false},
        {"id": "12", "title": "Sort an array of 0's 1's & 2's | Intuition of Algo🔥 | C++ Java Python | Brute-Better-Optimal", "url": "tp8JIuCXBaU", "watched": false},
        {"id": "13", "title": "Majority Element I | Brute-Better-Optimal | Moore's Voting Algorithm | Intuition 🔥|Brute to Optimal", "url": "nP_ns3uSh80", "watched": false},
        {"id": "14", "title": "Kadane's Algorithm | Maximum Subarray Sum | Finding and Printing", "url": "AHZpyENo7k4", "watched": false},
        {"id": "15", "title": "Rearrange Array Elements by Sign | 2 Varieties of same Problem", "url": "h4aBagy4Uok", "watched": false},
        {"id": "16", "title": "DP 35. Best Time to Buy and Sell Stock | DP on Stocks 🔥", "url": "excAOvwF_Wk", "watched": false},
        {"id": "17", "title": "Next Permutation - Intuition in Detail 🔥 | Brute to Optimal", "url": "JDOXKqF60RQ", "watched": false},
        {"id": "18", "title": "Leaders in an Array | Brute - Optimal | Strivers A2Z DSA Course", "url": "cHrH9CQ8pmY", "watched": false},
        {"id": "19", "title": "Longest Consecutive Sequence | Google Interview Question | Brute Better Optimal", "url": "oO5uLE7EUlM", "watched": false},
        {"id": "20", "title": "Set Matrix Zeroes | O(1) Space Approach | Brute - Better - Optimal", "url": "N0MgLvceX7M", "watched": false},
        {"id": "21", "title": "Rotate Matrix/Image by 90 Degrees | Brute - Optimal", "url": "Z0R2u6gd3GU", "watched": false},
        {"id": "22", "title": "Spiral Traversal of a Matrix | Spiral Matrix", "url": "3Zv-s9UUrFM", "watched": false},
        {"id": "23", "title": "Count Subarray sum Equals K | Brute - Better -Optimal", "url": "xvNwoz-ufXA", "watched": false},
        {"id": "24", "title": "Pascal Triangle | Finding nCr in minimal time", "url": "bR7mQgwQ_o8", "watched": false},
        {"id": "25", "title": "Majority Element II | Brute-Better-Optimal", "url": "vwZj1K0e9U8", "watched": false},
        {"id": "26", "title": "3 Sum | Brute -  Better - Optimal with Codes", "url": "DhFh8Kw7ymk", "watched": false},
        {"id": "27", "title": "4 Sum | Brute - Better - Optimal with Codes", "url": "eD95WRfh81c", "watched": false},
        {"id": "28", "title": "Number of Subarrays with xor K | Brute - Better - Optimal", "url": "eZr-6p0B7ME", "watched": false},
        {"id": "29", "title": "Merge Overlapping Intervals | Brute, Optimal with Precise TC analysis", "url": "IexN60k62jo", "watched": false},
        {"id": "30", "title": "Merge Sorted Arrays Without Extra Space | 2 Optimal Solution", "url": "n7uwj04E0I4", "watched": false},
        {"id": "31", "title": "Find the Missing and Repeating Number | 4 Approaches 🔥", "url": "2D0D8HE6uak", "watched": false},
        {"id": "32", "title": "Count Inversions in an Array | Brute and Optimal", "url": "AseUmwVNaoY", "watched": false},
        {"id": "33", "title": "Reverse Pairs | Hard Interview Question", "url": "0e4bZaP3MDI", "watched": false},
        {"id": "34", "title": "Maximum Product Subarray - Best Intuitive Approach Discussed", "url": "hnswaLJvr6g", "watched": false},
        {"id": "35", "title": "Learn Redux in One video", "url": "J5By-Q4ZhZs", "watched": false}
      ]
    },
    {
      id: 'binarySearch',
      title: 'Binary Search',
      description: 'Binary Search Beginner to Advanced',
      category: 'dsa', // Add category field
      videos: [
        {
            "id": "video-59",
            "url": "_NT69eLpqks",
            "title": "Launching Binary Search Bootcamp - C++, Java, Python, Notes, Contest, Doubt Support 🔥",
            "watched": false
        },
        {
            "id": "video-60",
            "url": "MHf6awe89xw",
            "title": "BS-1. Binary Search Introduction | Real Life Example | Iterative | Recursive | Overflow Cases",
            "watched": false
        },
        {
            "id": "video-61",
            "url": "6zhGS79oQ4k",
            "title": "BS-2. Implement Lower Bound and Upper Bound | Search Insert Position | Floor and Ceil",
            "watched": false
        },
        {
            "id": "video-62",
            "url": "hjR1IYVx9lY",
            "title": "BS-3. First and Last Occurrences in Array | Count occurrences in Array",
            "watched": false
        },
        {
            "id": "video-63",
            "url": "5qGrJbHhqFs",
            "title": "BS-4. Search Element in Rotated Sorted Array - I",
            "watched": false
        },
        {
            "id": "video-64",
            "url": "w2G2W8l__pc",
            "title": "BS-5. Search Element in Rotated Sorted Array II",
            "watched": false
        },
        {
            "id": "video-65",
            "url": "nhEMDKMB44g",
            "title": "BS-6. Minimum in Rotated Sorted Array",
            "watched": false
        },
        {
            "id": "video-66",
            "url": "jtSiWTPLwd0",
            "title": "BS-7. Find out how many times array has been rotated",
            "watched": false
        },
        {
            "id": "video-67",
            "url": "AZOmHuHadxQ",
            "title": "BS-8. Single Element in Sorted Array",
            "watched": false
        },
        {
            "id": "video-68",
            "url": "cXxmbemS6XM",
            "title": "BS-9. Find Peak Element",
            "watched": false
        },
        {
            "id": "video-69",
            "url": "Bsv3FPUX_BA",
            "title": "BS-10. Finding Sqrt of a number using Binary Search",
            "watched": false
        },
        {
            "id": "video-70",
            "url": "rjEJeYCasHs",
            "title": "BS-11. Find the Nth root of an Integer",
            "watched": false
        },
        {
            "id": "video-71",
            "url": "qyfekrNni90",
            "title": "BS-12. Koko Eating Bananas",
            "watched": false
        },
        {
            "id": "video-72",
            "url": "TXAuxeYBTdg",
            "title": "BS-13. Minimum days to make M bouquets | Binary Search",
            "watched": false
        },
        {
            "id": "video-73",
            "url": "UvBKTVaG6U8",
            "title": "BS-14. Find the Smallest Divisor Given a Threshold | Binary Search",
            "watched": false
        },
        {
            "id": "video-74",
            "url": "MG-Ac4TAvTY",
            "title": "BS-15. Capacity to Ship Packages within D Days",
            "watched": false
        },
        {
            "id": "video-75",
            "url": "uZ0N_hZpyps",
            "title": "BS-16. Kth Missing Positive Number | Maths + Binary Search",
            "watched": false
        },
        {
            "id": "video-76",
            "url": "R_Mfw4ew-Vo",
            "title": "BS-17. Aggressive Cows | Binary Search Hard",
            "watched": false
        },
        {
            "id": "video-77",
            "url": "Z0hwjftStI4",
            "title": "BS-18. Allocate Books or Book Allocation | Hard Binary Search",
            "watched": false
        },
        {
            "id": "video-78",
            "url": "thUd_WJn6wk",
            "title": "BS 19. Painter's Partition and Split Array - Largest Sum",
            "watched": false
        },
        {
            "id": "video-79",
            "url": "kMSBvlZ-_HA",
            "title": "BS-20. Minimise Maximum Distance between Gas Stations | 3 Approaches | Heap | Binary Search",
            "watched": false
        },
        {
            "id": "video-80",
            "url": "C2rRzz-JDk8",
            "title": "BS 21: Median of two Sorted Arrays of Different Sizes | Brute and Better Approach",
            "watched": false
        },
        {
            "id": "video-81",
            "url": "F9c7LpRZWVQ",
            "title": "BS-21. Median of two Sorted Arrays of Different Sizes | Binary Search Approach With Intuition",
            "watched": false
        },
        {
            "id": "video-82",
            "url": "D1oDwWCq50g",
            "title": "Bs-22. K-th element of two sorted arrays | Binary Search Approach",
            "watched": false
        },
        {
            "id": "video-83",
            "url": "SCz-1TtYxDI",
            "title": "BS 23. Row with maximum number of 1s | Binary Search on 2D Arrays",
            "watched": false
        },
        {
            "id": "video-84",
            "url": "JXU4Akft7yk",
            "title": "BS-24. Search in a 2D Matrix - I | Binary Search of 2D",
            "watched": false
        },
        {
            "id": "video-85",
            "url": "9ZbB397jU4k",
            "title": "BS-25. Search in a 2D Matrix - II  |  Binary Search on 2D",
            "watched": false
        },
        {
            "id": "video-86",
            "url": "nGGp5XBzC4g",
            "title": "BS-26. Find Peak Element-II | Binary Search",
            "watched": false
        },
        {
            "id": "video-87",
            "url": "Q9wXgdxJq48",
            "title": "BS-27. Median in a Row Wise Sorted Matrix",
            "watched": false
        },
        {
            "id": "video-88",
            "url": "J5By-Q4ZhZs",
            "title": "Learn Redux in One video",
            "watched": false
        }
      ]
    
      },
    {
      id: 'recursion',
      title: 'Recursion',
      description: 'Recursion (Basics to Advanced) and Backtracking',
      category: 'dsa', // Add category field
      videos: [
        { "id": "video-36", "url": "yVdKa8dnKiE", "title": "Introduction to Recursion | Recursion Tree | Stack Space | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-37", "url": "un6PLygfXrA", "title": "Problems on Recursion | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-38", "url": "69ZCDFy-OUo", "title": "Parameterized and Functional Recursion | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-39", "url": "twuC1F6gLI8", "title": "Problems on Functional Recursion | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-40", "url": "kvRjNm4rVBE", "title": "Multiple Recursion Calls | Problems | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-41", "url": "AxNNVECce8c", "title": "Recursion on Subsequences | Printing Subsequences", "watched": false },
        { "id": "video-42", "url": "eQCS_v3bw0Q", "title": "All Kind of Patterns in Recursion | Print All | Print one | Count", "watched": false },
        { "id": "video-43", "url": "ogjf7ORKfd8", "title": "Merge Sort | Algorithm | Pseudocode | Dry Run | Code | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-44", "url": "WIrA4YexLRQ", "title": "Quick Sort For Beginners | Strivers A2Z DSA Course", "watched": false },
        { "id": "video-45", "url": "OyZFFqQtu98", "title": "Combination Sum | Recursion | Leetcode | C++ | Java", "watched": false },
        { "id": "video-46", "url": "G1fRTGRxXU8", "title": "Combination Sum II | Leetcode | Recursion | Java | C++", "watched": false },
        { "id": "video-47", "url": "rYkfBRtMJr8", "title": "Subset Sum I | Recursion | C++ | Java", "watched": false },
        { "id": "video-48", "url": "RIn3gOkbhQE", "title": "Subset Sum II | Leetcode | Recursion", "watched": false },
        { "id": "video-49", "url": "YK78FU5Ffjw", "title": "Print all Permutations of a String/Array | Recursion | Approach - 1", "watched": false },
        { "id": "video-50", "url": "f2ic2Rsc9pU", "title": "Print all Permutations of a String/Array | Recursion | Approach - 2", "watched": false },
        { "id": "video-51", "url": "i05Ju7AftcM", "title": "N-Queens | Leetcode Hard | Backtracking", "watched": false },
        { "id": "video-52", "url": "FWAIf_EVUKE", "title": "Sudoku Solver | Backtracking", "watched": false },
        { "id": "video-53", "url": "wuVwUK25Rfc", "title": "M-Coloring Problem | Backtracking", "watched": false },
        { "id": "video-54", "url": "WBgsABoClE0", "title": "Palindrome Partitioning | Leetcode | Recursion | C++ | Java", "watched": false },
        { "id": "video-55", "url": "bLGZhJlt4y0", "title": "Rat in A Maze | Backtracking", "watched": false },
        { "id": "video-56", "url": "wT7gcXLYoao", "title": "K-th Permutation Sequence | Leetcode", "watched": false },
        { "id": "video-57", "url": "AseUmwVNaoY", "title": "Count Inversions in an Array | Brute and Optimal", "watched": false },
      ]    
    },
    {
      id: 'sorting',
      title: 'Sorting',
      description: 'Learn different sorting techniques',
      category: 'dsa', // Add category field
      videos: [
        {
          id: 'video-89',
          url: 'HGk_ypEuS24',
          title: 'Sorting - Part 1 | Selection Sort, Bubble Sort, Insertion Sort | Strivers A2Z DSA Course',
          watched: false,
          duration: '43m 44s',
          published: '1/29/2023'
        },
        {
          id: 'video-90',
          url: 'ogjf7ORKfd8',
          title: 'Merge Sort | Algorithm | Pseudocode | Dry Run | Code | Strivers A2Z DSA Course',
          watched: false,
          duration: '49m 43s',
          published: '2/8/2023'
        },
        {
          id: 'video-91',
          url: 'WIrA4YexLRQ',
          title: 'Quick Sort For Beginners | Strivers A2Z DSA Course',
          watched: false,
          duration: '35m 17s',
          published: '2/27/2023'
        },
      ]
    },
    {
      id: 'linkedList',
      title: 'Linked List',
      description: 'Linked List | Beginner to Advanced',
      category: 'dsa', // Add category field
      videos: [
        {"id": "video-92", "url": "Nq7ok-OyEpg", "title": "L1. Introduction to LinkedList | Traversal | Length | Search an Element", "watched": false},
        {"id": "video-93", "url": "VaECK03Dz-g", "title": "L2. Deletion and Insertion in LL | 8 Problems", "watched": false},
        {"id": "video-94", "url": "0eKMU10uEDI", "title": "L3. Introduction to Doubly LinkedList | Insertions and Deletions", "watched": false},
        {"id": "video-95", "url": "u3WUW2qe6ww", "title": "L4. Reverse a DLL | Multiple Approaches", "watched": false},
        {"id": "video-96", "url": "XmRrGzR6udg", "title": "L5. Add 2 numbers in LinkedList | Dummy Node Approach", "watched": false},
        {"id": "video-97", "url": "qf6qp7GzD5Q", "title": "L6. Odd Even Linked List | Multiple Approaches", "watched": false},
        {"id": "video-98", "url": "gRII7LhdJWc", "title": "L7. Sort a LinkedList of 0's, 1's and 2's | Multiple Approaches", "watched": false},
        {"id": "video-99", "url": "3kMKYQ2wNIU", "title": "L8. Remove Nth Node from the end of the LinkedList | Multiple Approaches", "watched": false},
        {"id": "video-100", "url": "D2vI2DNJGd8", "title": "L9. Reverse a LinkedList | Iterative and Recursive", "watched": false},
        {"id": "video-101", "url": "lRY_G-u_8jk", "title": "L10. Check if a LinkedList is Palindrome or Not | Multiple Approaches", "watched": false},
        {"id": "video-102", "url": "aXQWhbvT3w0", "title": "L11. Add 1 to a number represented by LinkedList", "watched": false},
        {"id": "video-103", "url": "0DYoPz2Tpt4", "title": "L12. Find the intersection point of Y LinkedList", "watched": false},
        {"id": "video-104", "url": "7LjQ57RqgEc", "title": "L13. Find the middle element of the LinkedList | Multiple Approaches", "watched": false},
        {"id": "video-105", "url": "wiOo4DC5GGA", "title": "L14. Detect a loop or cycle in LinkedList | With proof and Intuition", "watched": false},
        {"id": "video-106", "url": "I4g1qbkTPus", "title": "L15. Find the length of the Loop in LinkedList", "watched": false},
        {"id": "video-107", "url": "ePpV-_pfOeI", "title": "L16. Delete the middle node of the LinkedList", "watched": false},
        {"id": "video-108", "url": "2Kd0KKmmHFc", "title": "L17. Find the starting point of the Loop/Cycle in LinkedList | Multiple Approaches", "watched": false},
        {"id": "video-109", "url": "Mh0NH_SD92k", "title": "L18. Delete all occurrences of a Key in DLL", "watched": false},
        {"id": "video-110", "url": "YitR4dQsddE", "title": "L19. Find all Pairs with given Sum in DLL", "watched": false},
        {"id": "video-111", "url": "YJKVTnOJXSY", "title": "L20. Remove duplicates from sorted DLL", "watched": false},
        {"id": "video-112", "url": "lIar1skcQYI", "title": "L21. Reverse Nodes in K Group Size of LinkedList", "watched": false},
        {"id": "video-113", "url": "uT7YI7XbTY8", "title": "L22. Rotate a LinkedList", "watched": false},
        {"id": "video-114", "url": "jXu-H7XuClE", "title": "L23. Merge two sorted Linked Lists", "watched": false},
        {"id": "video-115", "url": "ykelywHJWLg", "title": "L24. Flattening a LinkedList | Multiple Approaches with Dry Run", "watched": false},
        {"id": "video-116", "url": "1zktEppsdig", "title": "L25. Merge K Sorted Lists | Multiple Approaches", "watched": false},
        {"id": "video-117", "url": "8ocB7a_c-Cc", "title": "L26. Sort a Linked List | Merge Sort and Brute Force", "watched": false},
        {"id": "video-118", "url": "q570bKdrnlw", "title": "L27. Clone a LinkedList with Next and Random Pointers | Copy List with Random Pointers", "watched": false},
        {"id": "video-119", "url": "mG3KLugbOdc", "title": "L28. Design a Browser History | LinkedList Implementation", "watched": false},
      ]
    },
    {
      id: 'stack',
      title: 'Stack & Queue',
      description: 'Stack & Queue Implementation',
      category: 'dsa', // Add category field
      videos: [
        { "id": "video-121", "url": "tqQ5fTamIN4", "title": "L1. Introduction to Stack and Queue | Implementation using Data Structures", "watched": false },
        { "id": "video-122", "url": "xwjS0iZhw4I", "title": "L2. Check for Balanced Parentheses | Stack and Queue", "watched": false },
        { "id": "video-123", "url": "4pIc9UBHJtk", "title": "L3. Prefix, Infix, and Postfix Conversion | Stack and Queue Playlist", "watched": false },
        { "id": "video-124", "url": "NdDIaH91P0g", "title": "L4. Implement Min Stack | Stack and Queue Playlist", "watched": false },
        { "id": "video-125", "url": "e7XQLtOQM3I", "title": "L5. Next Greater Element | Stack and Queue Playlist", "watched": false },
        { "id": "video-126", "url": "7PrncD7v9YQ", "title": "L6. Next Greater Element - II | Stack and Queue Playlist", "watched": false },
        { "id": "video-127", "url": "zMdbdGJNlh4", "title": "L7. Previous Smaller Element | Stack and Queue Playlist", "watched": false },
        { "id": "video-128", "url": "1_5VuquLbXg", "title": "L8. Trapping Rainwater | 2 Approaches | Stack and Queue Playlist", "watched": false },
        { "id": "video-129", "url": "v0e8p9JCgRc", "title": "L9. Sum of Subarray Minimum | Stack and Queue Playlist", "watched": false },
        { "id": "video-130", "url": "gIrMptNPf5M", "title": "L10. Sum of subarray ranges | Stack and Queue Playlist", "watched": false },
        { "id": "video-131", "url": "_eYGqw_VDR4", "title": "L11. Aestroid Collisions | Stack and Queue Playlist", "watched": false },
        { "id": "video-132", "url": "Bzat9vgD0fs", "title": "L12. Largest Rectangle in Histogram | Stack and Queue Playlist", "watched": false },
        { "id": "video-133", "url": "ttVu6G7Ayik", "title": "L13. Maximal Rectangle | Stack and Queue Playlist", "watched": false },
        { "id": "video-134", "url": "jmbuRzYPGrg", "title": "L14. Remove K Digits | Stack and Queue Playlist", "watched": false },
        { "id": "video-135", "url": "eay-zoSRkVc", "title": "L15. Stock Span Problem | Stack and Queue Playlist", "watched": false },
        { "id": "video-136", "url": "NwBvene4Imo", "title": "L16. Sliding Window Maximum | Stack and Queue Playlist", "watched": false },
        { "id": "video-137", "url": "cEadsbTeze4", "title": "L17. The Celebrity Problem | Stack and Queue Playlist", "watched": false },
        { "id": "video-138", "url": "z9bJUPxzFOw", "title": "L18. Implement LRU Cache | Stack and Queue Playlist", "watched": false },
        { "id": "video-139", "url": "mzqHlAW7jeE", "title": "Implement LFU cache in C++/Java | Leetcode(Hard)", "watched": false },
      ]      
    },
    {
      id: 'greedy',
      title: 'Greedy',
      description: 'Greedy Algorithm Playlist',
      category: 'dsa', // Add category field
      videos: [
        { id: 'video-140', url: 'DIX2p7vb9co', title: 'Assign Cookies | Greedy Algorithm Playlist', watched: false },
        { id: 'video-141', url: 'n_tmibEhO6Q', title: 'Lemonade Change | Greedy Algorithm Playlist', watched: false },
        { id: 'video-142', url: '3-QbX1iDbXs', title: 'Shortest Job First (or SJF) CPU Scheduling', watched: false },
        { id: 'video-143', url: 'tZAa_jJ3SwQ', title: 'Jump Game - I | Greedy Algorithm Playlist', watched: false },
        { id: 'video-144', url: '7SBVnw7GSTk', title: 'Jump Game - II | Greedy Algorithm Playlist', watched: false },
        { id: 'video-145', url: 'QbwltemZbRg', title: 'Job Sequencing Problem | Greedy Algorithm Playlist', watched: false },
        { id: 'video-146', url: 'mKfhTotEguk', title: 'N Meeting in One Room | Greedy Algorithms Playlist', watched: false },
        { id: 'video-147', url: 'HDHQ8lAWakY', title: 'Non Overlapping Intervals | Greedy Algorithms Playlist', watched: false },
        { id: 'video-148', url: 'xxRE-46OCC8', title: 'Insert Intervals | Greedy Algorithms Playlist', watched: false },
        { id: 'video-149', url: 'AsGzwR_FWok', title: 'Minimum number of platforms required in a railway station', watched: false },
        { id: 'video-150', url: 'cHT6sG_hUZI', title: 'Valid Parenthesis String | Multiple Approaches', watched: false },
        { id: 'video-151', url: 'IIqVFvKE6RY', title: 'Candy | Slope Approach Intuition Based', watched: false },
        { id: 'video-152', url: '1ibsQrnuEEg', title: 'Fractional Knapsack Algorithm', watched: false }
      ]
    },
    {
      id: 'trees',
      title: 'Binary Tree & BST',
      description: 'Tree Series',
      category: 'dsa', // Add category field
      videos: [
        {"id": "video-153", "url": "_ANrF3FJm7I", "title": "L1. Introduction to Trees | Types of Trees", "watched": false},
        {"id": "video-154", "url": "ctCpP0RFDFc", "title": "L2. Binary Tree Representation in C++", "watched": false},
        {"id": "video-155", "url": "hyLyW7rP24I", "title": "L3. Binary Tree Representation in Java", "watched": false},
        {"id": "video-156", "url": "jmy0LaGET1I", "title": "L4. Binary Tree Traversals in Binary Tree | BFS | DFS", "watched": false},
        {"id": "video-157", "url": "RlUu72JrOCQ", "title": "L5. Preorder Traversal of Binary Tree | C++ | Java | Code Explanation", "watched": false},
        {"id": "video-158", "url": "Z_NEgBgbRVI", "title": "L6. Inorder Traversal of Binary Tree | C++ | Java | Code Explanation", "watched": false},
        {"id": "video-159", "url": "COQOU6klsBg", "title": "L7. Postorder Traversal of Binary Tree | C++ | Java | Code Explanation", "watched": false},
        {"id": "video-160", "url": "EoAsWbO7sqg", "title": "L8. Level Order Traversal of Binary Tree | BFS | C++ | Java", "watched": false},
        {"id": "video-161", "url": "Bfqd8BsPVuw", "title": "L9. Iterative Preorder Traversal in Binary Tree | C++ | Java | Stack", "watched": false},
        {"id": "video-162", "url": "lxTGsVXjwvM", "title": "L10. Iterative Inorder Traversal in Binary Tree | C++ | Java | Stack", "watched": false},
        {"id": "video-163", "url": "2YBhNLodD8Q", "title": "L11. Iterative Postorder Traversal using 2 Stack | C++ | Java | Binary Tree", "watched": false},
        {"id": "video-164", "url": "NzIGLLwZBS8", "title": "L12. Iterative Postorder Traversal using 1 Stack | C++ | Java | Binary Trees", "watched": false},
        {"id": "video-165", "url": "ySp2epYvgTE", "title": "L13. Preorder Inorder Postorder Traversals in One Traversal | C++ | Java | Stack | Binary Trees", "watched": false},
        {"id": "video-166", "url": "eD3tmO66aBA", "title": "L14. Maximum Depth in Binary Tree | Height of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-167", "url": "Yt50Jfbd8Po", "title": "L15. Check for Balanced Binary Tree | C++ | Java", "watched": false},
        {"id": "video-168", "url": "Rezetez59Nk", "title": "L16. Diameter of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-169", "url": "WszrfSwMz58", "title": "L17. Maximum Path Sum in Binary Tree | C++ | Java", "watched": false},
        {"id": "video-170", "url": "BhuvF_-PWS0", "title": "L18. Check if two trees are Identical or Not | C++ | Java", "watched": false},
        {"id": "video-171", "url": "3OXWEdlIGl4", "title": "L19. Zig-Zag or Spiral Traversal in Binary Tree | C++ | Java", "watched": false},
        {"id": "video-172", "url": "0ca1nvR0be4", "title": "L20. Boundary Traversal in Binary Tree | C++ | Java", "watched": false},
        {"id": "video-173", "url": "q_a6lpbKJdw", "title": "L21. Vertical Order Traversal of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-174", "url": "Et9OCDNvJ78", "title": "L22. Top View of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-175", "url": "0FtVY6I4pB8", "title": "L23. Bottom View of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-176", "url": "KV4mRzTjlAk", "title": "L24. Right/Left View of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-177", "url": "nKggNAiEpBE", "title": "L25. Check for Symmetrical Binary Trees | C++ | Java", "watched": false},
        {"id": "video-178", "url": "fmflMqVOC7k", "title": "L26. Print Root to Node Path in Binary Tree | C++ | Java", "watched": false},
        {"id": "video-179", "url": "_-QHfMDde90", "title": "L27. Lowest Common Ancestor in Binary Tree | LCA | C++ | Java", "watched": false},
        {"id": "video-180", "url": "ZbybYvcVLks", "title": "L28. Maximum Width of Binary Tree | C++ | Java", "watched": false},
        {"id": "video-181", "url": "fnmisPM6cVo", "title": "L29. Children Sum Property in Binary Tree | O(N) Approach | C++ | Java", "watched": false},
        {"id": "video-182", "url": "i9ORlEy6EsI", "title": "L30. Print all the Nodes at a distance of K in Binary Tree | C++ | Java", "watched": false},
        {"id": "video-183", "url": "2r5wLmQfD6g", "title": "L31. Minimum time taken to BURN the Binary Tree from a Node | C++ | Java", "watched": false},
        {"id": "video-184", "url": "u-yWemKGWO0", "title": "L32. Count total Nodes in a COMPLETE Binary Tree | O(Log^2 N) Approach | C++ | Java", "watched": false},
        {"id": "video-185", "url": "9GMECGQgWrQ", "title": "L33. Requirements needed to construct a Unique Binary Tree | Theory", "watched": false},
        {"id": "video-186", "url": "aZNaLrVebKQ", "title": "L34. Construct a Binary Tree from Preorder and Inorder Traversal | C++ | Java", "watched": false},
        {"id": "video-187", "url": "LgLRTaEMRVc", "title": "L35. Construct the Binary Tree from Postorder and Inorder Traversal | C++ | Java", "watched": false},
        {"id": "video-188", "url": "-YbXySKJsX8", "title": "L36. Serialize and De-serialize Binary Tree | C++ | Java", "watched": false},
        {"id": "video-189", "url": "80Zug6D1_r4", "title": "L37. Morris Traversal | Preorder | Inorder | C++ | Java", "watched": false},
        {"id": "video-190", "url": "sWf7k1x9XR4", "title": "L38. Flatten a Binary Tree to Linked List | 3 Approaches | C++ | Java", "watched": false},
        {"id": "video-191", "url": "p7-9UvDQZ3w", "title": "L39. Introduction to Binary Search Tree | BST", "watched": false},
        {"id": "video-192", "url": "KcNt6v_56cc", "title": "L40. Search in a Binary Search Tree | BST | C++ | Java", "watched": false},
        {"id": "video-193", "url": "KSsk8AhdOZA", "title": "L41. Ceil in a Binary Search Tree | BST | C++ | Java", "watched": false},
        {"id": "video-194", "url": "xm_W1ub-K-w", "title": "L42. Floor in Binary Search Tree | BST | C++ | Java", "watched": false},
        {"id": "video-195", "url": "FiFiNvM29ps", "title": "L43. Insert a given Node in Binary Search Tree | BST | C++ | Java", "watched": false},
        {"id": "video-196", "url": "kouxiP_H5WE", "title": "L44. Delete a Node in Binary Search Tree | BST | C++ | Java", "watched": false},
        {"id": "video-197", "url": "9TJYWh0adfk", "title": "L45. K-th Smallest/Largest Element in BST", "watched": false},
        {"id": "video-198", "url": "f-sj7I5oXEI", "title": "L46. Check if a tree is a BST or BT | Validate a BST", "watched": false},
        {"id": "video-199", "url": "cX_kPV_foZc", "title": "L47. LCA in Binary Search Tree", "watched": false},
        {"id": "video-200", "url": "UmJT3j26t1I", "title": "L48. Construct a BST from a preorder traversal | 3 Methods", "watched": false},
        {"id": "video-201", "url": "SXKAD2svfmI", "title": "L49. Inorder Successor/Predecessor in BST | 3 Methods", "watched": false},
        {"id": "video-202", "url": "D2jMcmxU4bs", "title": "L50. Binary Search Tree Iterator | BST | O(H) Space", "watched": false},
        {"id": "video-203", "url": "ssL3sHwPeb4", "title": "L51. Two Sum In BST | Check if there exists a pair with Sum K", "watched": false},
        {"id": "video-204", "url": "ZWGW7FminDM", "title": "L52. Recover BST | Correct BST with two nodes swapped", "watched": false},
        {"id": "video-205", "url": "X0oXMdtUDwo", "title": "L53. Largest BST in Binary Tree", "watched": false}
      ]
    },
    {
      id: 'trie',
      title: 'Trie',
      description: 'Trie Series',
      category: 'dsa', // Add category field
      videos: [
        { "id": "video-206", "url": "dBGUmUQhjaM", "title": "Implement TRIE | INSERT | SEARCH | STARTSWITH", "watched": false },
        { "id": "video-207", "url": "K5pcpkEMCN0", "title": "Implement Trie-2 | INSERT | countWordsEqualTo() | countWordsStartingWith() | C++ | Java", "watched": false },
        { "id": "video-208", "url": "AWnBa91lThI", "title": "Longest Word With All Prefixes | Complete String | Trie", "watched": false },
        { "id": "video-209", "url": "RV0QeTyHZxo", "title": "Number of Distinct Substrings in a String | Trie | C++ | Java", "watched": false },
        { "id": "video-210", "url": "5iyuU4hQFrw", "title": "Bit PreRequisites for TRIE Problems", "watched": false },
        { "id": "video-211", "url": "EIhAwfHubE8", "title": "Maximum XOR of Two Numbers in an Array | C++ | Java", "watched": false },
        { "id": "video-212", "url": "Q8LhG9Pi5KM", "title": "Maximum XOR With an Element From Array | Queries | C++ | Java", "watched": false }
      ]      
    },
    {
      id: 'graph',
      title: 'Graph',
      description: 'Graph Series',
      category: 'dsa', // Add category field
      videos: [
          {"id": "video-213", "url": "M3_pLsDdeuU", "title": "G-1. Introduction to Graph | Types | Different Conventions Used", "watched": false},
          {"id": "video-214", "url": "3oI-34aPMWM", "title": "G-2. Graph Representation in C++ | Two Ways to Represent", "watched": false},
          {"id": "video-215", "url": "OsNklbh9gYI", "title": "G-3. Graph Representation in Java | Two Ways to Represent", "watched": false},
          {"id": "video-216", "url": "lea-Wl_uWXY", "title": "G-4. What are Connected Components ?", "watched": false},
          {"id": "video-217", "url": "-tgVpUgsQ5k", "title": "G-5. Breadth-First Search (BFS) | C++ and Java | Traversal Technique in Graphs", "watched": false},
          {"id": "video-218", "url": "Qzf1a--rhp8", "title": "G-6. Depth-First Search (DFS) | C++ and Java | Traversal Technique in Graphs", "watched": false},
          {"id": "video-219", "url": "ACzkVtewUYA", "title": "G-7. Number of Provinces | C++ | Java | Connected Components", "watched": false},
          {"id": "video-220", "url": "muncqlKJrH0", "title": "G-8. Number of Islands | Number of Connected Components in Matrix | C++ | Java", "watched": false},
          {"id": "video-221", "url": "C-2_uSRli8o", "title": "G-9. Flood Fill Algorithm | C++ | Java", "watched": false},
          {"id": "video-222", "url": "yf3oUhkvqA0", "title": "G-10. Rotten Oranges | C++ | Java", "watched": false},
          {"id": "video-223", "url": "BPlrALf1LDU", "title": "G-11. Detect a Cycle in an Undirected Graph using BFS | C++ | Java", "watched": false},
          {"id": "video-224", "url": "zQ3zgFypzX4", "title": "G-12. Detect a Cycle in an Undirected Graph using DFS | C++ | Java", "watched": false},
          {"id": "video-225", "url": "edXdVwkYHF8", "title": "G-13. Distance of nearest cell having 1 | 0/1 Matrix | C++ | Java", "watched": false},
          {"id": "video-226", "url": "BtdgAys4yMk", "title": "G-14. Surrounded Regions | Replace O's with X's | C++ | Java", "watched": false},
          {"id": "video-227", "url": "rxKcepXQgU4", "title": "G-15. Number of Enclaves | Multi-source BFS | C++ | Java", "watched": false},
          {"id": "video-228", "url": "7zmgQSJghpo", "title": "G-16. Number of Distinct Islands | Constructive Thinking + DFS | C++ | Java", "watched": false},
          {"id": "video-229", "url": "-vu34sct1g8", "title": "G-17. Bipartite Graph | BFS | C++ | Java", "watched": false},
          {"id": "video-230", "url": "KG5YFfR0j8A", "title": "G-18. Bipartite Graph | DFS | C++ | Java", "watched": false},
          {"id": "video-231", "url": "9twcmtQj4DU", "title": "G-19. Detect cycle in a directed graph using DFS | Java | C++", "watched": false},
          {"id": "video-232", "url": "uRbJ1OF9aYM", "title": "G-20. Find Eventual Safe States - DFS", "watched": false},
          {"id": "video-233", "url": "5lZ0iJMrUMk", "title": "G-21. Topological Sort Algorithm | DFS", "watched": false},
          {"id": "video-234", "url": "73sneFXuTEg", "title": "G-22. Kahn's Algorithm | Topological Sort Algorithm | BFS", "watched": false},
          {"id": "video-235", "url": "iTBaI90lpDQ", "title": "G-23. Detect a Cycle in Directed Graph | Topological Sort | Kahn's Algorithm | BFS", "watched": false},
          {"id": "video-236", "url": "WAOfKpxYHR8", "title": "G-24. Course Schedule I and II | Pre-requisite Tasks | Topological Sort", "watched": false},
          {"id": "video-237", "url": "2gtg3VsDGyc", "title": "G-25. Find Eventual Safe States - BFS - Topological Sort", "watched": false},
          {"id": "video-238", "url": "U3N_je7tWAs", "title": "G-26. Alien Dictionary - Topological Sort", "watched": false},
          {"id": "video-239", "url": "ZUFQfFaU-8U", "title": "G-27. Shortest Path in Directed Acyclic Graph - Topological Sort", "watched": false},
          {"id": "video-240", "url": "C4gxoTaI71U", "title": "G-28. Shortest Path in Undirected Graph with Unit Weights", "watched": false},
          {"id": "video-241", "url": "tRPda0rcf8E", "title": "G-29. Word Ladder - I | Shortest Paths", "watched": false},
          {"id": "video-242", "url": "DREutrv2XD0", "title": "G-30. Word Ladder - 2 | Shortest Paths", "watched": false},
          {"id": "video-243", "url": "AD4SFl7tu7I", "title": "G-31. Word Ladder - 2 | Optimised Approach for Leetcode", "watched": false},
          {"id": "video-244", "url": "V6H1qAeB-l4", "title": "G-32. Dijkstra's Algorithm - Using Priority Queue - C++ and Java - Part 1", "watched": false},
          {"id": "video-245", "url": "PATgNiuTP20", "title": "G-33. Dijkstra's Algorithm - Using Set - Part 2", "watched": false},
          {"id": "video-246", "url": "3dINsjyfooY", "title": "G-34. Dijkstra's Algorithm - Why PQ and not Q, Intuition, Time Complexity Derivation - Part 3", "watched": false},
          {"id": "video-247", "url": "rp1SMw7HSO8", "title": "G-35. Print Shortest Path - Dijkstra's Algorithm", "watched": false},
          {"id": "video-248", "url": "U5Mw4eyUmw4", "title": "G-36. Shortest Distance in a Binary Maze", "watched": false},
          {"id": "video-249", "url": "0ytpZyiZFhA", "title": "G-37. Path With Minimum Effort", "watched": false},
          {"id": "video-250", "url": "9XybHVqTHcQ", "title": "G-38. Cheapest Flights Within K Stops", "watched": false},
          {"id": "video-251", "url": "_BvEJ3VIDWw", "title": "G-39. Minimum Multiplications to Reach End", "watched": false},
          {"id": "video-252", "url": "_-0mx0SmYxA", "title": "G-40. Number of Ways to Arrive at Destination", "watched": false},
          {"id": "video-253", "url": "0vVofAhAYjc", "title": "G-41. Bellman Ford Algorithm", "watched": false},
          {"id": "video-254", "url": "YbY8cVwWAvw", "title": "G-42. Floyd Warshall Algorithm", "watched": false},
          {"id": "video-255", "url": "PwMVNSJ5SLI", "title": "G-43. Find the City With the Smallest Number of Neighbours at a Threshold Distance", "watched": false},
          {"id": "video-256", "url": "ZSPjZuZWCME", "title": "G-44. Minimum Spanning Tree - Theory", "watched": false},
          {"id": "video-257", "url": "mJcZjjKzeqk", "title": "G-45. Prim's Algorithm - Minimum Spanning Tree - C++ and Java", "watched": false},
          {"id": "video-258", "url": "aBxjDBC4M1U", "title": "G-46. Disjoint Set | Union by Rank | Union by Size | Path Compression", "watched": false},
          {"id": "video-259", "url": "DMnDM_sxVig", "title": "G-47. Kruskal's Algorithm - Minimum Spanning Tree - C++ and Java", "watched": false},
          {"id": "video-260", "url": "ZGr5nX-Gi6Y", "title": "G-48. Number of Provinces - Disjoint Set", "watched": false},
          {"id": "video-261", "url": "FYrl7iz9_ZU", "title": "G-49. Number of Operations to Make Network Connected - DSU", "watched": false},
          {"id": "video-262", "url": "FMwpt_aQOGw", "title": "G-50. Accounts Merge - DSU", "watched": false},
          {"id": "video-263", "url": "Rn6B-Q4SNyA", "title": "G-51. Number of Islands - II - Online Queries - DSU", "watched": false},
          {"id": "video-264", "url": "lgiz0Oup6gM", "title": "G-52. Making a Large Island - DSU", "watched": false},
          {"id": "video-265", "url": "OwMNX8SPavM", "title": "G-53. Most Stones Removed with Same Row or Column - DSU", "watched": false},
          {"id": "video-266", "url": "R6uoSjZ2imo", "title": "G-54. Strongly Connected Components - Kosaraju's Algorithm", "watched": false},
          {"id": "video-267", "url": "qrAub5z8FeA", "title": "G-55. Bridges in Graph - Using Tarjan's Algorithm of time in and low time", "watched": false},
          {"id": "video-268", "url": "j1QDfU21iZk", "title": "G-56. Articulation Point in Graph", "watched": false}
        ]        
    },
    {
      id: 'dp',
      title: 'Dynamic Programming',
      description: 'Trie Series',
      category: 'dsa', // Add category field
      videos: [
        {"id": "video-269", "url": "FfXoiwwnxFw", "title": "Striver's Dynamic Programming Series | The ULTIMATE | The BIGGEST | Teaser #shorts", "watched": false},
        {"id": "video-270", "url": "tyB0ztf0DNY", "title": "DP 1. Introduction to Dynamic Programming | Memoization | Tabulation | Space Optimization Techniques", "watched": false},
        {"id": "video-271", "url": "mLfjzJsN8us", "title": "DP 2. Climbing Stairs | Learn How to Write 1D Recurrence Relations", "watched": false},
        {"id": "video-272", "url": "EgG3jsGoPvQ", "title": "DP 3. Frog Jump | Dynamic Programming | Learn to write 1D DP", "watched": false},
        {"id": "video-273", "url": "Kmh3rhyEtB8", "title": "DP 4. Frog Jump with K Distance | Lecture 3 Follow Up Question", "watched": false},
        {"id": "video-274", "url": "GrMBfJNk_NY", "title": "DP 5. Maximum Sum of Non-Adjacent Elements | House Robber | 1-D | DP on Subsequences", "watched": false},
        {"id": "video-275", "url": "3WaxQMELSkw", "title": "DP 6. House Robber 2 | 1D DP | DP on Subsequences", "watched": false},
        {"id": "video-276", "url": "AE39gJYuRog", "title": "DP 7. Ninja's Training | MUST WATCH for 2D CONCEPTS 🔥 | Vacation | Atcoder | 2D DP", "watched": false},
        {"id": "video-277", "url": "sdE0A2Oxofw", "title": "DP 8. Grid Unique Paths | Learn Everything about DP on Grids | ALL TECHNIQUES 🔥", "watched": false},
        {"id": "video-278", "url": "TmhpgXScLyY", "title": "DP 9. Unique Paths 2 | DP on Grid with Maze Obstacles", "watched": false},
        {"id": "video-279", "url": "_rgTlyky1uQ", "title": "DP 10. Minimum Path Sum in Grid | Asked to me In Microsoft Internship Interview | DP on GRIDS", "watched": false},
        {"id": "video-280", "url": "SrP-PiLSYC0", "title": "DP 11. Triangle | Fixed Starting Point and Variable Ending Point | DP on GRIDS", "watched": false},
        {"id": "video-281", "url": "N_aJ5qQbYA0", "title": "DP 12. Minimum/Maximum Falling Path Sum | Variable Starting and Ending Points | DP on Grids", "watched": false},
        {"id": "video-282", "url": "QGfn7JeXK54", "title": "DP 13. Cherry Pickup II | 3D DP Made Easy | DP On Grids", "watched": false},
        {"id": "video-283", "url": "fWX9xDmIzRI", "title": "DP 14. Subset Sum Equals to Target | Identify DP on Subsequences and Ways to Solve them", "watched": false},
        {"id": "video-284", "url": "7win3dcgo3k", "title": "DP 15. Partition Equal Subset Sum | DP on Subsequences", "watched": false},
        {"id": "video-285", "url": "GS_OqZb2CWc", "title": "DP 16. Partition A Set Into Two Subsets With Minimum Absolute Sum Difference | DP on Subsequences", "watched": false},
        {"id": "video-286", "url": "ZHyb-A2Mte4", "title": "DP 17. Counts Subsets with Sum K | DP on Subsequences", "watched": false},
        {"id": "video-287", "url": "zoilQD1kYSg", "title": "DP 18. Count Partitions With Given Difference | DP on Subsequences", "watched": false},
        {"id": "video-288", "url": "GqOmJHQZivw", "title": "DP 19. 0/1 Knapsack | Recursion to Single Array Space Optimised Approach | DP on Subsequences", "watched": false},
        {"id": "video-289", "url": "myPeWb3Y68A", "title": "DP 20. Minimum Coins | DP on Subsequences | Infinite Supplies Pattern", "watched": false},
        {"id": "video-290", "url": "b3GD8263-PQ", "title": "DP 21. Target Sum | DP on Subsequences", "watched": false},
        {"id": "video-291", "url": "HgyouUi11zk", "title": "DP 22. Coin Change 2 | Infinite Supply Problems | DP on Subsequences", "watched": false},
        {"id": "video-292", "url": "OgvOZ6OrJoY", "title": "DP 23. Unbounded Knapsack | 1-D Array Space Optimised Approach", "watched": false},
        {"id": "video-293", "url": "mO8XpGoJwuo", "title": "DP 24. Rod Cutting Problem | 1D Array Space Optimised Approach", "watched": false},
        {"id": "video-294", "url": "NPZn9jBrX8U", "title": "DP 25. Longest Common Subsequence | Top Down | Bottom-Up | Space Optimised | DP on Strings", "watched": false},
        {"id": "video-295", "url": "-zI4mrF2Pb4", "title": "DP 26. Print Longest Common Subsequence | DP on Strings", "watched": false},
        {"id": "video-296", "url": "_wP9mWNPL5w", "title": "DP 27. Longest Common Substring | DP on Strings 🔥", "watched": false},
        {"id": "video-297", "url": "6i_T5kkfv4A", "title": "DP 28. Longest Palindromic Subsequence", "watched": false},
        {"id": "video-298", "url": "xPBLEj41rFU", "title": "DP 29. Minimum Insertions to Make String Palindrome", "watched": false},
        {"id": "video-299", "url": "yMnH0jrir0Q", "title": "DP 30. Minimum Insertions/Deletions to Convert String A to String B", "watched": false},
        {"id": "video-300", "url": "xElxAuBcvsU", "title": "DP 31. Shortest Common Supersequence | DP on Strings", "watched": false},
        {"id": "video-301", "url": "nVG7eTiD2bY", "title": "DP 32. Distinct Subsequences | 1D Array Optimisation Technique 🔥", "watched": false},
        {"id": "video-302", "url": "fJaKO8FbDdo", "title": "DP 33. Edit Distance | Recursive to 1D Array Optimised Solution 🔥", "watched": false},
        {"id": "video-303", "url": "ZmlQ3vgAOMo", "title": "DP 34. Wildcard Matching | Recursive to 1D Array Optimisation 🔥", "watched": false},
        {"id": "video-304", "url": "excAOvwF_Wk", "title": "DP 35. Best Time to Buy and Sell Stock | DP on Stocks 🔥", "watched": false},
        {"id": "video-305", "url": "nGJmxkUJQGs", "title": "DP 36. Buy and Sell Stock - II | Recursion to Space Optimisation", "watched": false},
        {"id": "video-306", "url": "-uQGzhYj8BQ", "title": "DP 37. Buy and Sell Stocks III | Recursion to Space Optimisation", "watched": false},
        {"id": "video-307", "url": "IV1dHbk5CDc", "title": "DP 38. Buy and Stock Sell IV | Recursion to Space Optimisation", "watched": false},
        {"id": "video-308", "url": "IGIe46xw3YY", "title": "DP 39. Buy and Sell Stocks With Cooldown | Recursion to Space Optimisation", "watched": false},
        {"id": "video-309", "url": "k4eK-vEmnKg", "title": "DP 40. Buy and Sell Stocks With Transaction Fee | Recursion to Space Optimisation", "watched": false},
        {"id": "video-310", "url": "ekcwMsSIzVc", "title": "DP 41. Longest Increasing Subsequence | Memoization", "watched": false},
        {"id": "video-311", "url": "IFfYfonAFGc", "title": "DP 42. Printing Longest Increasing Subsequence | Tabulation | Algorithm", "watched": false},
        {"id": "video-312", "url": "on2hvxBXJH4", "title": "DP 43. Longest Increasing Subsequence | Binary Search | Intuition", "watched": false},
        {"id": "video-313", "url": "gDuZwBW9VvM", "title": "DP 44. Largest Divisible Subset | Longest Increasing Subsequence", "watched": false},
        {"id": "video-314", "url": "YY8iBaYcc4g", "title": "DP 45. Longest String Chain | Longest Increasing Subsequence | LIS", "watched": false},
        {"id": "video-315", "url": "y4vN0WNdrlg", "title": "DP 46. Longest Bitonic Subsequence | LIS", "watched": false},
        {"id": "video-316", "url": "cKVl1TFdNXg", "title": "DP 47. Number of Longest Increasing Subsequences", "watched": false},
        {"id": "video-317", "url": "vRVfmbCFW7Y", "title": "DP 48. Matrix Chain Multiplication | MCM | Partition DP Starts 🔥", "watched": false},
        {"id": "video-318", "url": "pDCXsbAw5Cg", "title": "DP 49. Matrix Chain Multiplication | Bottom-Up | Tabulation", "watched": false},
        {"id": "video-319", "url": "xwomavsC86c", "title": "DP 50. Minimum Cost to Cut the Stick", "watched": false},
        {"id": "video-320", "url": "Yz4LlDSlkns", "title": "DP 51. Burst Balloons | Partition DP | Interactive G-Meet Session Update", "watched": false},
        {"id": "video-321", "url": "MM7fXopgyjw", "title": "DP 52. Evaluate Boolean Expression to True | Partition DP", "watched": false},
        {"id": "video-322", "url": "_H8V5hJUGd0", "title": "DP 53. Palindrome Partitioning - II | Front Partition 🔥", "watched": false},
        {"id": "video-323", "url": "PhWWJmaKfMc", "title": "DP 54. Partition Array for Maximum Sum | Front Partition 🔥", "watched": false},
        {"id": "video-324", "url": "tOylVCugy9k", "title": "DP 55. Maximum Rectangle Area with all 1's | DP on Rectangles", "watched": false},
        {"id": "video-325", "url": "auS1fynpnjo", "title": "DP 56. Count Square Submatrices with All Ones | DP on Rectangles 🔥", "watched": false}
      ]            
    },
    
  ];
  
  export default playlists;
  