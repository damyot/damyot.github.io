---
layout: page
permalink: /publications/
title: publications
description: Generated automatically from a single BibTeX file. Switch between a chronological list and a view organized by category.
nav: true
nav_order: 1
---

<!-- _pages/<lang>/publications.md renders _bibliography/papers.bib via jekyll-scholar.
     Two views: "By year" (chronological) and "By category" (CV-style sections). -->

#### Publication indexes

[Google Scholar](https://scholar.google.com/citations?user=xGiVN_4AAAAJ) ·
[DBLP](https://dblp.org/pid/a/DanielAmyot.html) ·
[ACM DL](https://dl.acm.org/profile/81100183429) ·
[IEEE Xplore](https://ieeexplore.ieee.org/author/37281946900) ·
[Scopus](https://www.scopus.com/authid/detail.uri?authorId=6602186776) ·
[ORCID](https://orcid.org/0000-0003-2414-1791) ·
[Semantic Scholar](https://www.semanticscholar.org/author/Daniel-Amyot/1689475) ·
[ResearchGate](https://www.researchgate.net/profile/Daniel_Amyot2)

<!-- Bibsearch feature (searches across both views) -->
{% include bib_search.liquid %}

<div class="pub-view-toggle btn-group" role="group" aria-label="Publication view">
  <button type="button" id="pub-btn-year" class="btn btn-sm btn-primary" onclick="showPubView('year')">By year</button>
  <button type="button" id="pub-btn-category" class="btn btn-sm btn-outline-primary" onclick="showPubView('category')">By category</button>
</div>

<div id="pub-view-year" class="publications">
{% bibliography %}
</div>

<div id="pub-view-category" style="display: none">

<h3 class="pub-category-header">Books and Proceedings Edited</h3>
<div class="publications">{% bibliography --query @*[category=books]* %}</div>

<h3 class="pub-category-header">Refereed Chapters in Books</h3>
<div class="publications">{% bibliography --query @*[category=chapters]* %}</div>

<h3 class="pub-category-header">Papers in Refereed Journals</h3>
<div class="publications">{% bibliography --query @*[category=journals]* %}</div>

<h3 class="pub-category-header">Papers in Refereed Conference Proceedings</h3>
<div class="publications">{% bibliography --query @*[category=conferences]* %}</div>

<h3 class="pub-category-header">Major Invited Contributions and Technical Reports</h3>
<div class="publications">{% bibliography --query @*[category=reports]* %}</div>

<h3 class="pub-category-header">Abstracts and Papers Read</h3>
<div class="publications">{% bibliography --query @*[category=abstracts]* %}</div>

<h3 class="pub-category-header">Patents</h3>
<div class="publications">{% bibliography --query @*[category=patents]* %}</div>

<h3 class="pub-category-header">Standards</h3>
<div class="publications">{% bibliography --query @*[category=standards]* %}</div>

<h3 class="pub-category-header">Tutorials, Refereed Demos/Posters, and Invited Lectures</h3>
<div class="publications">{% bibliography --file talks %}</div>

</div>

<script>
  function showPubView(view) {
    document.getElementById('pub-view-year').style.display = (view === 'year') ? 'block' : 'none';
    document.getElementById('pub-view-category').style.display = (view === 'category') ? 'block' : 'none';
    document.getElementById('pub-btn-year').className = 'btn btn-sm ' + (view === 'year' ? 'btn-primary' : 'btn-outline-primary');
    document.getElementById('pub-btn-category').className = 'btn btn-sm ' + (view === 'category' ? 'btn-primary' : 'btn-outline-primary');
  }
</script>
