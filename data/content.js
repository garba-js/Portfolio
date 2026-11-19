/* ===== EDIT THIS FILE TO UPDATE YOUR SITE =====
   Add a new object to `activity` (newest date shows first) and save.
   IMAGES: put photos in the images/ folder, then set  cover: 'images/yourphoto.jpg'  (projects and activity).
   HIGHLIGHT: set  featured: true  to make a card larger and tagged as a highlight.
   PROJECT DETAILS: add `body` (paragraphs), `highlights` (key features list), `role`, `year`, `status` (empty ones are hidden).
   A project with `body` opens a full details page; without it, a small popup. `id` is optional (made from the title).
   Full story: add `id` (short-with-dashes), `body` (list of paragraphs), optional `cover` (image path like images/anaguta.jpg),
   `icon`, and `shareFile: true` once its share page exists (story-<id>.html). Without `body` it stays a short card. */
window.CONTENT = {
  site: { email: 'garbajoseph@example.com', whatsapp: '2348000000000' },
  projects: [

      /*Managira */

    { title: 'Managira School ERP', 
      tag: 'Cloud ERP', 
      icon: 'fa-school', 
      accent: 'green',
      desc: 'Cloud-based school management platform streamlining reporting, attendance and student workflows.',
      cover: '', 
      featured: false, 
      stack: ['Web App', 'Dashboard', 'UI/UX'],
      id: 'managira-school-erp', 
      shareFile: false, 
      role: 'Content Manager', 
      year: '2026 ', 
      status: 'Present',
      highlights: ['Administrative reporting', 'Attendance tracking', 'Student workflows'],
      body: [
        'Leading content creation and field operations as Content Manager. Optimized digital storytelling to scale brand presence among educational institutions, bridging software utility with administrative ease.'
      ], 
      demo: 'https://managira.com' },


  /*Anaguta Tradomodern */
    { title: 'Anaguta Tradomodern', 
      tag: 'Culture & Tech', 
      icon: 'fa-landmark', 
      accent: 'gold',
      desc: 'Digital cultural preservation: progressive web app with native-language audio dictionary and heritage stories.',
      cover: 'images/project-anaguta-tradomodern.jpg', 
      featured: false, 
      stack: ['PWA', 'Audio Archive', 'JavaScript', 'HTML', 'CSS'],
      id: 'anaguta-tradomodern', 
      shareFile: true, 
      role: 'Developer', 
      year: '2025 - Present', 
      status: '70%',
      highlights: ['Native-language audio dictionary', 'Heritage stories and archives', 'Progressive web app'], 
            "body": [
              'Serving as Team Lead, spearheading the design and development of a digital cultural archive. The Progressive Web Application features phonetic audio guides for native terminology, historical timelines, and accessible community folklore archives.'
             ],
      demo: 'https://garba-js.github.io/anaguta/index.html' },

  /*Doxa Patisserie */
    { title: 'Doxa Patisserie', 
      tag: 'Modern Bakery', 
      icon: 'fa-landmark', 
      accent: 'gold',
      desc: 'A fresh-baked-on-demand artisan bakery operating in Jos.',
      cover: 'images/ban.jpg', 
      featured: false, 
      stack: ['', ],
      id: 'Doxa-patisserie', 
      shareFile: true, 
      role: 'Director', 
      year: '2024', 
      status: 'Present',
      highlights: ['Operations', 'Financial Modeling', 'Diector'], 
            "body": [
              'Co-founded and managed Doxa Pâtisserie in Jos, ensuring premium quality pastries baked strictly on demand. Built automated Google Sheet financial dashboards tracking daily ingredient costs, order fulfillment timelines, and net revenue margins.'
             ],
      demo: 'https://garba-js.github.io/anaguta/index.html' },

  /*CDN */
    { title: 'SME Profit & VAT Calculator', 
      tag: 'Fintech Tool', 
      icon: 'fa-calculator', 
      accent: 'teal',
      desc: 'Lightweight calculator for 7.5% VAT, break-even analysis and profit-margin forecasting.',
      cover: '', 
      featured: false, 
      stack: ['HTML5', 'CSS3', 'Vanilla JS'],
      id: 'sme-profit-vat-calculator', 
      shareFile: false, 
      role: '', 
      year: '', 
      status: '',
      highlights: ['7.5% VAT computation', 'Break-even analysis', 'Profit-margin forecasting'],
      body: [
        'Dummy text. Say why small businesses need this tool and what question it answers in seconds.',
        'Dummy text. Mention how it works, why it has no dependencies, and where people can use it.'
      ], 
      github: 'https://github.com', 
      demo: 'https://example.com' }
  ],
  activity: [
    {
      "id": "anaguta-expedition",
      "shareFile": true,
      "icon": "fa-mountain-sun",
      "cover": "images/an.jpeg",
      "featured": false,
      "date": "2026-11-18",
      "type": "Expedition",
      "title": "Connecting Culture, History, and Ecotourism: Experience the Heritage of Anaguta in Jos North",
      "text": "Our team hiked to historic sites on Anaguta land, met a local elder who shared the mountain's oral history, and visited the Amanza Waterfall.",
      "body": [
        "Culture is not just preserved in books or museums. It lives in the physical landscape, the trails our ancestors walked, and the stories tied to our land.",
        "Early this morning, our team set out on an expedition to explore and document key historical sites on Anaguta land, home to the indigenous Anaguta people of Jos North, Plateau State, Nigeria. What started as a planned hike turned into an engaging physical adventure through steep rocks, thick natural trails, and rugged terrain. The energy and determination of our team made the climb an incredible shared experience.",
        "Reaching the summit rewarded us with an unforgettable view. Looking across the horizon, you realize this Anaguta land holds powerful heritage destinations, carrying centuries of history, community defense, and survival.",
        "During the trip, we met with a local elder who shared the deep oral history behind this mountain. We recorded his knowledge, and we will be releasing the video recording soon on the Anaguta Tradomodern page. Before heading back, we visited the historic Amanza Waterfall, one of the most remarkable natural and historical landmarks on Anaguta land.",
        "Plateau State offers rich cultural history and breathtaking natural sights for travelers, researchers, and culture enthusiasts. Through Anaguta Tradomodern, we are dedicated to opening up these heritage paths and sharing the story of the Anaguta people of Jos North with the world.",
        "If you are passionate about cultural tourism, eco-adventure, or history, we invite you to follow our work and discover the unique heritage of Anaguta land."
      ],
      "link": ""
    },
    { date: '2026-11-14', 
      type: 'Article', 
      title: 'Sample article: Lessons from building software in Jos',
      text: 'Dummy text. Replace this with a short summary of something you wrote: the problem you faced, what you tried, and the one thing readers should take away. Two or three sentences work best.', link: 'https://example.com' 
    },
    { date: '2026-11-02', 
      type: 'Event', 
      title: 'Sample event: Community tech meetup',
      text: 'Dummy text. Describe an event you attended or hosted: where it was, who was there, and what you contributed or learned from it.', link: '' 
    },
    { date: '2026-10-18', 
      type: 'Milestone', 
      title: 'Sample milestone: New project launched',
      text: 'Dummy text. Share a win, such as a launch, a first client, a certification or a course you completed. Short and specific is better than long.', link: '' 
    },
    { date: '2026-09-27', 
      type: 'Community', 
      title: 'Sample service update: Volunteering highlight',
      text: 'Dummy text. Highlight something you did to serve your community, with a line about the people it helped or the impact it made.', link: '' 
    },
    { date: '2026-09-05', 
      type: 'Update', 
      title: 'Sample update: What I am learning right now',
      text: 'Dummy text. A quick note on a skill, tool or course you are working on this month and what you plan to build with it.', link: '' 
    }
  ],
  about: {
    summary : [
      "I’m a developer, designer and business strategist based in Jos, Nigeria, building digital and visual solutions for small businesses and brands.",
      "I co-founded Doxa Pâtisserie, where I lead brand strategy, design and financial analytics, and I work as a content manager and frontend developer at Managira, a cloud school management platform.",
      "I’m studying software development through BYU-Pathway Worldwide, with a focus on dynamic web development, software design principles and object-oriented programming in C#. I’m open to freelance and full-time opportunities.",
    ],


    professional: [
      { 
        icon: 'fa-code', 
        title: 'Frontend Development', 
        items: ['HTML5 / CSS', 'JavaScript','Responsive UI'] 
      },
      { 
        icon: 'fa-server', 
        title: 'Backend', 
        items: ['C# (Programming with Classes) '] 
      },
      { 
        icon: 'fa-pen-nib', 
        title: 'Design & Strategy', 
        items: ['Figma', 'Brand Systems', 'Git Workflow'] 
      }
    ],
    personal: {
      story: 'I’m Garba Joseph Samson, a developer, designer and community servant based in Jos, Nigeria. I build digital and visual solutions for small businesses and brands, and I care most about work that solves a real problem for real people. I co-founded Doxa Pâtisserie, an artisanal bakery venture, where I lead brand strategy, design and financial analytics. I also work as a content manager and frontend developer at Managira, a cloud school management platform, and I’m studying software development through BYU-Pathway Worldwide. Beyond client work, I’m passionate about preserving heritage. Through Anaguta Tradomodern, my team and I document the history, language and stories of the Anaguta people of Jos North so they can be shared with the world.',
      interests: ['Community service', 'Building software', 'Brand & visual design', 'Baking (Doxa Pâtisserie)'],
      values: ['Service', 'Integrity', 'Continuous learning']
    }
  }
};
