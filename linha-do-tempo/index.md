---
layout: default
title: "Linha do tempo"
permalink: /linha-do-tempo/
libs: [timeline]
---

<h1>Linha do tempo</h1>
<p>Modo de navegação alternativo: os mesmos capítulos e textos-guia, organizados cronologicamente (séc. XI — Al-Andalus — até o presente).</p>

<div id="timeline-embed" style="width: 100%; height: 600px;"></div>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    // dados em _data/timeline.yml -> exportar/gerar assets/data/timeline.json (formato TimelineJS)
    fetch("{{ '/assets/data/timeline.json' | relative_url }}")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (window.TL) { new TL.Timeline("timeline-embed", data); }
      });
  });
</script>
