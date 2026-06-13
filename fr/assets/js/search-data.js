
const currentUrl = window.location.href;
const siteUrl = "https://damyot.github.io";
let updatedUrl = currentUrl.replace("https://damyot.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "à propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Générées automatiquement à partir d&#39;un seul fichier BibTeX. Basculez entre une liste chronologique et une vue organisée par catégorie.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/publications/";
          },
        },{id: "nav-étudiants",
          title: "étudiants",
          description: "Étudiants aux cycles supérieurs (actuels et anciens) et projets de recherche",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/students/";
          },
        },{id: "nav-projets",
          title: "projets",
          description: "Projets de recherche financés (en cours et antérieurs)",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/projects/";
          },
        },{id: "nav-outils",
          title: "outils",
          description: "Outils et logiciels de recherche",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/tools/";
          },
        },{id: "nav-enseignement",
          title: "enseignement",
          description: "Cours donnés à l&#39;Université d&#39;Ottawa.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/teaching/";
          },
        },{id: "nav-service",
          title: "service",
          description: "Comités éditoriaux, comités directeurs et rôles dans des conférences",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/service/";
          },
        },{id: "nav-présentations",
          title: "présentations",
          description: "Conférences invitées, exposés magistraux, tutoriels, séminaires et démonstrations.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/talks/";
          },
        },{id: "news-j-enseigne-seg-3501-ingénierie-des-exigences-ce-trimestre",
          title: 'J’enseigne SEG 3501 — Ingénierie des exigences ce trimestre.',
          description: "",
          section: "actualités",},{id: "news-membre-du-comité-directeur-de-la-conférence-internationale-ieee-requirements-engineering-re-les-soumissions-et-la-participation-sont-toujours-bienvenues",
          title: 'Membre du comité directeur de la conférence internationale IEEE Requirements Engineering (RE) —...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-de-la-8e-international-conference-on-process-mining-icpm-2027-rende-italie-février-2027",
          title: 'Je suis membre du comité de programme de la 8e International Conference on...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-du-2e-international-workshop-on-ontological-modeling-and-analysis-ontonexus-2026-malaga-espagne-octobre-2026",
          title: 'Je suis membre du comité de programme du 2e International Workshop on Ontological...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-de-la-18e-system-analysis-and-modelling-conference-sam-2026-malaga-espagne-octobre-2026",
          title: 'Je suis membre du comité de programme de la 18e System Analysis and...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-du-4e-international-workshop-on-object-centric-process-management-objects-2026-à-bpm-2026-toronto-canada-septembre-2026",
          title: 'Je suis membre du comité de programme du 4e International Workshop on Object-Centric...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-du-2e-international-workshop-on-intelligent-process-automation-solutions-automate-2026-à-bpm-2026-toronto-canada-septembre-2026",
          title: 'Je suis membre du comité de programme du 2e International Workshop on Intelligent...',
          description: "",
          section: "actualités",},{id: "news-je-suis-président-des-tutoriels-et-des-panels-de-la-24e-international-conference-on-business-process-management-bpm-2026-toronto-canada-septembre-2026",
          title: 'Je suis président des tutoriels et des panels de la 24e International Conference...',
          description: "",
          section: "actualités",},{id: "news-je-co-organise-la-4e-rencontre-de-la-canadian-process-mining-community-cpmc-2026-montréal-canada-août-2026",
          title: 'Je co-organise la 4e rencontre de la Canadian Process Mining Community (CPMC 2026),...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-du-7e-international-workshop-on-requirements-engineering-for-well-being-aging-and-health-rewbah-2026-montréal-canada-août-2026",
          title: 'Je suis membre du comité de programme du 7e International Workshop on Requirements...',
          description: "",
          section: "actualités",},{id: "news-je-suis-membre-du-comité-de-programme-du-16e-international-model-driven-requirements-engineering-workshop-modre-2026-montréal-canada-août-2026",
          title: 'Je suis membre du comité de programme du 16e International Model-Driven Requirements Engineering...',
          description: "",
          section: "actualités",},{id: "news-je-suis-coprésident-du-symposium-des-nouveaux-professeurs-de-la-34e-ieee-international-requirements-engineering-conference-re-2026-montréal-canada-août-2026",
          title: 'Je suis coprésident du symposium des nouveaux professeurs de la 34e IEEE International...',
          description: "",
          section: "actualités",},{id: "news-je-suis-président-des-tutoriels-de-la-24e-international-conference-on-artificial-intelligence-in-medicine-aime-2026-ottawa-canada-juillet-2026-soumissions-et-participation-bienvenues",
          title: 'Je suis président des tutoriels de la 24e International Conference on Artificial Intelligence...',
          description: "",
          section: "actualités",},{id: "teaching-seg-3501-ingénierie-des-exigences",
          title: 'SEG 3501 — Ingénierie des exigences',
          description: "Cours de premier cycle — donné la plupart des années depuis 2010 (automne)",
          section: "",handler: () => {
              window.location.href = "/fr/teaching/seg3501/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%64%61%6D%79%6F%74@%75%6F%74%74%61%77%61.%63%61", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2414-1791", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xGiVN_4AAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://dblp.org/pid/a/DanielAmyot.html", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=6602186776", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Daniel_Amyot2/", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1689475", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/danielamyot", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/damyot", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37281946900/", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.uottawa.ca/", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
