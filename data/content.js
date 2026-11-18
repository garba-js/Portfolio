/* ===== EDIT THIS FILE TO UPDATE YOUR SITE =====
   Add a new object to `activity` (newest date shows first) and save. */
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
    { date: '2026-11-10', type: 'Update', title: 'Sample: what I am building this month',
      text: 'Replace this with a real highlight: an article, event, workshop or milestone.', link: '' },
    { date: '2026-10-22', type: 'Event', title: 'Sample: community / tech event attended',
      text: 'Add a sentence or two about what you did or learned.', link: '' }
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
