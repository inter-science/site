// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/science/site/site/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications by the Inter Science team, in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/science/site/site/publications/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Meet the researchers and engineers of Inter Science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/science/site/site/team/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source research projects and tools from the Inter Science team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/science/site/site/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Latest updates, papers, and announcements from Inter Science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/science/site/site/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "Get in touch with the Inter Science team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/science/site/site/contact/";
          },
        },{id: "news-we-released-codeevolve-an-open-source-evolutionary-coding-agent-that-combines-llms-with-evolutionary-search-to-discover-high-performing-algorithms-read-the-preprint-on-arxiv-and-explore-the-code-on-github",
          title: 'We released CodeEvolve, an open-source evolutionary coding agent that combines LLMs with evolutionary...',
          description: "",
          section: "News",},{id: "people-bruno-grossi",
          title: 'Bruno Grossi',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/science/site/site/team/bruno-grossi/";
            },},{id: "people-diego-ferreira",
          title: 'Diego Ferreira',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/science/site/site/team/diego-ferreira/";
            },},{id: "people-henrique-assumpção",
          title: 'Henrique Assumpção',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/science/site/site/team/henrique-assumpcao/";
            },},{id: "people-leandro-campos",
          title: 'Leandro Campos',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/science/site/site/team/leandro-campos/";
            },},{id: "projects-codeevolve",
          title: 'CodeEvolve',
          description: "Open-source evolutionary coding agent for algorithmic discovery and optimization using LLMs and evolutionary search.",
          section: "Projects",handler: () => {
              window.location.href = "/science/site/site/projects/codeevolve/";
            },},{id: "projects-quantum-machine-learning",
          title: 'Quantum Machine Learning',
          description: "Developing Quantum Machine Learning algorithms for financial applications, including fraud detection, credit scoring, and portfolio optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/science/site/site/projects/quantum-ml/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%63%69%65%6E%63%65@%69%6E%74%65%72.%63%6F", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/science/site/site/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
