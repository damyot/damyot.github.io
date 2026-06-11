
const currentUrl = window.location.href;
const siteUrl = "https://damyot.github.io";
let updatedUrl = currentUrl.replace("https://damyot.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Generated automatically from a single BibTeX file. Switch between a chronological list and a view organized by category.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-students",
          title: "students",
          description: "Current and former graduate students, and research projects",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Potential Capstone / Co-op / Master&#39;s projects",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-tools",
          title: "tools",
          description: "Research tools and software",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/tools/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at the University of Ottawa.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Invited talks, keynotes, tutorials, seminars, demos, and editorials.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "news-teaching-seg-3501-requirements-engineering-this-term",
          title: 'Teaching SEG 3501 — Requirements Engineering this term.',
          description: "",
          section: "News",},{id: "news-serving-on-the-steering-committee-of-the-ieee-international-requirements-engineering-conference-re-submissions-and-participation-are-always-welcome",
          title: 'Serving on the Steering Committee of the IEEE International Requirements Engineering Conference (RE)...',
          description: "",
          section: "News",},{id: "teaching-seg-3501-requirements-engineering",
          title: 'SEG 3501 — Requirements Engineering',
          description: "Undergraduate course — taught most years since 2010 (Fall term)",
          section: "",handler: () => {
              window.location.href = "/teaching/seg3501/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6D%79%6F%74@%75%6F%74%74%61%77%61.%63%61", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2414-1791", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xGiVN_4AAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/a/DanielAmyot.html", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=6602186776", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Daniel_Amyot2/", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1689475", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danielamyot", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/damyot", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37281946900/", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.uottawa.ca/", "_blank");
        },
      },{
          id: 'lang-fr',
          title: 'fr',
          section: 'Languages',
          handler: () => {
            window.location.href = "/fr" + updatedUrl;
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
