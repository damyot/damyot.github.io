---
layout: page
permalink: /publications/
title: publications
description: Générées automatiquement à partir d'un seul fichier BibTeX. Basculez entre une liste chronologique et une vue organisée par catégorie.
nav: true
nav_order: 1
---

<!-- La même base BibTeX (_bibliography/papers.bib) alimente les deux langues.
     Deux vues : « Par année » (chronologique) et « Par catégorie » (style CV). -->

#### Index de publication

[Google Scholar](https://scholar.google.com/citations?user=xGiVN_4AAAAJ) ·
[DBLP](https://dblp.org/pid/a/DanielAmyot.html) ·
[ACM DL](https://dl.acm.org/profile/81100183429) ·
[IEEE Xplore](https://ieeexplore.ieee.org/author/37281946900) ·
[Scopus](https://www.scopus.com/authid/detail.uri?authorId=6602186776) ·
[ORCID](https://orcid.org/0000-0003-2414-1791) ·
[Semantic Scholar](https://www.semanticscholar.org/author/Daniel-Amyot/1689475) ·
[ResearchGate](https://www.researchgate.net/profile/Daniel_Amyot2)

<!-- Recherche dans la bibliographie -->
{% include bib_search.liquid %}

<div class="pub-view-toggle btn-group" role="group" aria-label="Vue des publications">
  <button type="button" id="pub-btn-year" class="btn btn-sm btn-primary" onclick="showPubView('year')">Par année</button>
  <button type="button" id="pub-btn-category" class="btn btn-sm btn-outline-primary" onclick="showPubView('category')">Par catégorie</button>
</div>

<div id="pub-view-year" class="publications">
{% bibliography %}
</div>

<div id="pub-view-category" style="display: none">

<h3 class="pub-category-header">Livres et actes édités</h3>
<div class="publications">{% bibliography --query @*[category=books]* %}</div>

<h3 class="pub-category-header">Chapitres de livres avec comité de lecture</h3>
<div class="publications">{% bibliography --query @*[category=chapters]* %}</div>

<h3 class="pub-category-header">Articles de revues avec comité de lecture</h3>
<div class="publications">{% bibliography --query @*[category=journals]* %}</div>

<h3 class="pub-category-header">Articles dans des actes de conférences avec comité de lecture</h3>
<div class="publications">{% bibliography --query @*[category=conferences]* %}</div>

<h3 class="pub-category-header">Contributions invitées et rapports techniques</h3>
<div class="publications">{% bibliography --query @*[category=reports]* %}</div>

<h3 class="pub-category-header">Résumés et communications</h3>
<div class="publications">{% bibliography --query @*[category=abstracts]* %}</div>

<h3 class="pub-category-header">Brevets</h3>
<div class="publications">{% bibliography --query @*[category=patents]* %}</div>

<h3 class="pub-category-header">Normes</h3>
<div class="publications">{% bibliography --query @*[category=standards]* %}</div>

</div>

<script>
  function showPubView(view) {
    document.getElementById('pub-view-year').style.display = (view === 'year') ? 'block' : 'none';
    document.getElementById('pub-view-category').style.display = (view === 'category') ? 'block' : 'none';
    document.getElementById('pub-btn-year').className = 'btn btn-sm ' + (view === 'year' ? 'btn-primary' : 'btn-outline-primary');
    document.getElementById('pub-btn-category').className = 'btn btn-sm ' + (view === 'category' ? 'btn-primary' : 'btn-outline-primary');
  }
</script>
