---
page_id: teaching
layout: page
permalink: /teaching/
title: teaching
description: Courses taught at the University of Ottawa.
nav: true
nav_order: 5
---

{% assign teaching_entries = site.teaching | sort: "importance" %}

{% assign current = teaching_entries | where: "category", "current" %}
{% if current.size > 0 %}
#### Current courses
<ul>
  {% for course in current %}
    <li><a href="{{ course.url | relative_url }}">{{ course.title }}</a>{% if course.description %} — {{ course.description }}{% endif %}</li>
  {% endfor %}
</ul>
{% endif %}

{% assign past = teaching_entries | where: "category", "past" %}
{% if past.size > 0 %}
#### Featured past courses
<ul>
  {% for course in past %}
    <li><a href="{{ course.url | relative_url }}">{{ course.title }}</a>{% if course.description %} — {{ course.description }}{% endif %}</li>
  {% endfor %}
</ul>
{% endif %}

#### Courses taught at the University of Ottawa

Over the years I have taught the following courses (most recent terms first):

- **DTI 8101 / EBC 8101** — Interdisciplinary Doctoral Seminar in E-Business I (most Winter terms)
- **DTI 6300** — Process Modelling, Mining, and Automation (Winter 2024)
- **SEG 3501 / SEG 3601** — Requirements Engineering / *Ingénierie des exigences* (most Fall terms since 2005)
- **SEG 3101** — Software Requirements Analysis (Fall terms, 2010s)
- **CSI 5112** — Software Engineering (Winter terms, 2003–2015)
- **SEG 3700** — Introduction to Software Engineering (2003–2004)
- **ITI 1520 / CSI 1500 / CSI 1600** — Introduction to Computing I (2002–2008)
- **CSI 2511** — Computer Architecture I (2002–2004, and 1993–1999)
- **SEG 4910 / SEG 4911** — Software Engineering Capstone Project I & II (2010–2011)
