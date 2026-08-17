---
title: "Sertão colonial: cristãos-novos e a especificidade de PE/PB"
numero: 3
slug: sertao-colonial-cristaos-novos
libs: [leaflet]
texto_guia: "[documento histórico de referência sobre cristãos-novos no sertão — a definir]"
texto_guia_midia: "digitalização de documento (imagem)"
relacionados: [poesia-popular-nordestina, al-andalus-em-dialogo, redes-de-poesia]
ferramentas:
  - "Leaflet.js — rotas de deslocamento/assentamento dos cristãos-novos"
  - "Leaflet.js — camada de concentração de população indígena do Cariri (mapa já levantado)"
  - "GeoJSON — dados de rotas e pontos, em assets/data/"
---

Argumento central: como a presença de cristãos-novos nos sertões de Pernambuco e da Paraíba configurou um ambiente de contato cultural específico, historicamente pouco atribuído à formação da poesia popular nordestina — e por que esse fenômeno foi tão particular a essas duas capitanias.

*[conteúdo a desenvolver]*

<div id="map-sertao" style="height:420px;"></div>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("map-sertao");
    if (!el || typeof L === "undefined") return;

    var map = L.map(el).setView([-8.0, -36.5], 7); // centro aproximado PE/PB
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    fetch("{{ '/assets/data/rotas-cristaos-novos.geojson' | relative_url }}")
      .then(function (r) { return r.json(); })
      .then(function (geojson) {
        L.geoJSON(geojson, {
          pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, { radius: 7, color: "#b5533c" })
              .bindPopup(feature.properties.nome);
          }
        }).addTo(map);
      });

    // TODO: adicionar segunda camada com a concentração de população indígena do Cariri
  });
</script>
