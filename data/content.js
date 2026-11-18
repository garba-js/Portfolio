/* ===== EDIT THIS FILE TO UPDATE YOUR SITE =====
   Add a new object to `activity` (newest date shows first) and save.
   Full story: add `id` (short-with-dashes), `body` (list of paragraphs), optional `cover` (image path like images/anaguta.jpg),
   `icon`, and `shareFile: true` once its share page exists (story-<id>.html). Without `body` it stays a short card. */
window.CONTENT = {
  site: { email: 'garbajoseph@example.com', whatsapp: '2348000000000' },
  projects: [
    { title: 'Managira School ERP', tag: 'Cloud ERP', icon: 'fa-school', accent: 'green',
      desc: 'Cloud-based school management platform streamlining reporting, attendance and student workflows.',
      stack: ['Web App', 'Dashboard', 'UI/UX'], github: 'https://github.com', demo: 'https://example.com' },
    { title: 'Anaguta Tradomodern', tag: 'Culture & Tech', icon: 'fa-landmark', accent: 'gold',
      desc: 'Digital cultural preservation: progressive web app with native-language audio dictionary and heritage stories.',
      stack: ['PWA', 'Audio Archive', 'JavaScript'], github: 'https://github.com', demo: 'https://example.com' },
    { title: 'SME Profit & VAT Calculator', tag: 'Fintech Tool', icon: 'fa-calculator', accent: 'teal',
      desc: 'Lightweight calculator for 7.5% VAT, break-even analysis and profit-margin forecasting.',
      stack: ['HTML5', 'CSS3', 'Vanilla JS'], github: 'https://github.com', demo: 'https://example.com' }
  ],
  activity: [
    {
      "id": "anaguta-expedition",
      "shareFile": true,
      "icon": "fa-mountain-sun",
      "cover": "",
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
    { date: '2026-11-14', type: 'Article', title: 'Sample article: Lessons from building software in Jos',
      text: 'Dummy text. Replace this with a short summary of something you wrote: the problem you faced, what you tried, and the one thing readers should take away. Two or three sentences work best.', link: 'https://example.com' },
    { date: '2026-11-02', type: 'Event', title: 'Sample event: Community tech meetup',
      text: 'Dummy text. Describe an event you attended or hosted: where it was, who was there, and what you contributed or learned from it.', link: '' },
    { date: '2026-10-18', type: 'Milestone', title: 'Sample milestone: New project launched',
      text: 'Dummy text. Share a win, such as a launch, a first client, a certification or a course you completed. Short and specific is better than long.', link: '' },
    { date: '2026-09-27', type: 'Community', title: 'Sample service update: Volunteering highlight',
      text: 'Dummy text. Highlight something you did to serve your community, with a line about the people it helped or the impact it made.', link: '' },
    { date: '2026-09-05', type: 'Update', title: 'Sample update: What I am learning right now',
      text: 'Dummy text. A quick note on a skill, tool or course you are working on this month and what you plan to build with it.', link: '' }
  ],
  about: {
    professional: [
      { icon: 'fa-code', title: 'Frontend Development', items: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React / Next.js', 'Responsive UI'] },
      { icon: 'fa-server', title: 'Backend & Cloud', items: ['C# / OOP', 'Node.js', 'PostgreSQL', 'Firebase'] },
      { icon: 'fa-pen-nib', title: 'Design & Strategy', items: ['Figma', 'Brand Systems', 'Git Workflow'] }
    ],
    personal: {
      story: 'Write your personal story here: where you grew up, what drives you, and why you serve your community.',
      interests: ['Community service', 'Building software', 'Brand & visual design', 'Baking (Doxa Pâtisserie)'],
      values: ['Service', 'Integrity', 'Continuous learning']
    }
  }
};
