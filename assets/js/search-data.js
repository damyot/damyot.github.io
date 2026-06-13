
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
          description: "Funded research projects (current and past)",
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
        },{id: "nav-service",
          title: "service",
          description: "Editorial boards, steering committees, and conference roles",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/service/";
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
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-8th-international-conference-on-process-mining-icpm-2027-rende-italy-february-2027",
          title: 'I am on the program committee of the 8th International Conference on Process...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-2nd-international-workshop-on-ontological-modeling-and-analysis-ontonexus-2026-málaga-spain-october-2026",
          title: 'I am on the program committee of the 2nd International Workshop on Ontological...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-18th-system-analysis-and-modelling-conference-sam-2026-málaga-spain-october-2026",
          title: 'I am on the program committee of the 18th System Analysis and Modelling...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-4th-international-workshop-on-object-centric-process-management-objects-2026-at-bpm-2026-toronto-canada-september-2026",
          title: 'I am on the program committee of the 4th International Workshop on Object-Centric...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-2nd-international-workshop-on-implementation-and-management-of-intelligent-process-automation-solutions-automate-2026-at-bpm-2026-toronto-canada-september-2026",
          title: 'I am on the program committee of the 2nd International Workshop on Implementation...',
          description: "",
          section: "News",},{id: "news-i-am-tutorial-and-panel-chair-of-the-24th-international-conference-on-business-process-management-bpm-2026-toronto-canada-september-2026",
          title: 'I am Tutorial and Panel Chair of the 24th International Conference on Business...',
          description: "",
          section: "News",},{id: "news-i-am-co-organizing-the-4th-canadian-process-mining-community-cpmc-2026-meeting-montréal-canada-august-2026",
          title: 'I am co-organizing the 4th Canadian Process Mining Community (CPMC 2026) meeting, Montréal,...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-7th-international-workshop-on-requirements-engineering-for-well-being-aging-and-health-rewbah-2026-montréal-canada-august-2026",
          title: 'I am on the program committee of the 7th International Workshop on Requirements...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-program-committee-of-the-16th-international-model-driven-requirements-engineering-workshop-modre-2026-montréal-canada-august-2026",
          title: 'I am on the program committee of the 16th International Model-Driven Requirements Engineering...',
          description: "",
          section: "News",},{id: "news-i-am-new-faculty-symposium-co-chair-of-the-34th-ieee-international-requirements-engineering-conference-re-2026-montréal-canada-august-2026",
          title: 'I am New Faculty Symposium Co-Chair of the 34th IEEE International Requirements Engineering...',
          description: "",
          section: "News",},{id: "news-i-am-the-tutorial-chair-of-the-24th-international-conference-on-artificial-intelligence-in-medicine-aime-2026-ottawa-canada-july-2026-submissions-and-participation-are-welcome",
          title: 'I am the Tutorial Chair of the 24th International Conference on Artificial Intelligence...',
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
