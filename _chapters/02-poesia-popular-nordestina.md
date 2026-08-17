---
title: "A poesia popular nordestina como objeto"
numero: 2
slug: poesia-popular-nordestina
libs: [wavesurfer, photoswipe]
texto_guia: "[trecho/performance representativa a definir — cantoria ou repente de referência]"
texto_guia_midia: "áudio (Wavesurfer.js)"
relacionados: [introducao, sertao-colonial-cristaos-novos, redes-de-poesia]
ferramentas:
  - "Wavesurfer.js — áudio de cantorias/repente coletado no Sertão do Pajeú"
  - "PhotoSwipe / lightGallery — folhetos de cordel escaneados"
  - "TEI XML (opcional) — marcação estrutural de métrica/rima, se desejado"
---

Capítulo-hub da tese: formas e práticas poéticas (repente, glosa, desafio, cantoria), historiografia crítica e o lugar — ausente — da poesia popular nordestina no cânone literário brasileiro.

*[conteúdo a desenvolver]*

<div id="audio-exemplo"></div>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("audio-exemplo");
    if (!el || typeof WaveSurfer === "undefined") return;
    // TODO: apontar para um arquivo real em assets/audio/ (ou hospedagem externa, ver README)
    // var ws = WaveSurfer.create({ container: el, waveColor: "#c8c8c8", progressColor: "#b5533c" });
    // ws.load("{{ '/assets/audio/exemplo-cantoria.mp3' | relative_url }}");
  });
</script>
