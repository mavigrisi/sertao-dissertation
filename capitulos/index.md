---
layout: default
title: "Capítulos"
permalink: /capitulos/
---

<h1>Capítulos</h1>
<p class="label">cada capítulo tem URL própria e pode ser lido em qualquer ordem</p>

<ul class="chapter-index" id="textos-guia">
  {% assign sorted_chapters = site.chapters | sort: "numero" %}
  {% for c in sorted_chapters %}
    <li>
      <a href="{{ c.url | relative_url }}">{{ c.numero }}. {{ c.title }}</a>
      {% if c.texto_guia %}<p class="label">texto-guia: {{ c.texto_guia }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
