---
page_id: teaching
layout: page
permalink: /teaching/
title: enseignement
description: Cours donnés à l'Université d'Ottawa.
nav: true
nav_order: 5
---

{% assign teaching_entries = site.teaching | sort: "importance" %}

{% assign current = teaching_entries | where: "category", "current" %}
{% if current.size > 0 %}
#### Cours actuels
<ul>
  {% for course in current %}
    <li><a href="{{ course.url | relative_url }}">{{ course.title }}</a>{% if course.description %} — {{ course.description }}{% endif %}</li>
  {% endfor %}
</ul>
{% endif %}

{% assign past = teaching_entries | where: "category", "past" %}
{% if past.size > 0 %}
#### Cours antérieurs en vedette
<ul>
  {% for course in past %}
    <li><a href="{{ course.url | relative_url }}">{{ course.title }}</a>{% if course.description %} — {{ course.description }}{% endif %}</li>
  {% endfor %}
</ul>
{% endif %}

#### Cours donnés à l'Université d'Ottawa

Au fil des ans, j'ai donné les cours suivants (sessions les plus récentes d'abord) :

- **DTI 8101 / EBC 8101** — Interdisciplinary Doctoral Seminar in E-Business I (la plupart des sessions d'hiver)
- **DTI 6300** — Process Modelling, Mining, and Automation (hiver 2024)
- **SEG 3501 / SEG 3601** — Ingénierie des exigences (la plupart des sessions d'automne depuis 2005)
- **SEG 3101** — Software Requirements Analysis (sessions d'automne, années 2010)
- **CSI 5112** — Software Engineering (sessions d'hiver, 2003–2015)
- **SEG 3700** — Introduction au génie logiciel (2003–2004)
- **ITI 1520 / CSI 1500 / CSI 1600** — Introduction à l'informatique I (2002–2008)
- **CSI 2511** — Architecture des ordinateurs I (2002–2004, et 1993–1999)
- **SEG 4910 / SEG 4911** — Projet de synthèse en génie logiciel I et II (2010–2011)
