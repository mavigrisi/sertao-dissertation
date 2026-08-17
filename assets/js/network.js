// Inicializa a rede do Capítulo 5 com Cytoscape.js.
// Espera um elemento #network-canvas com data-source apontando para um JSON
// no formato { nodes: [{data:{id,label,type}}], edges: [{data:{source,target}}] }

window.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("network-canvas");
  if (!container || typeof cytoscape === "undefined") return;

  var detail = document.getElementById("network-detail");
  var typeColors = {
    pessoa: "#b5533c",
    texto: "#3a6b8a",
    lugar: "#5c8a3a",
    som: "#8a5c9c"
  };

  fetch(container.dataset.source)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var cy = cytoscape({
        container: container,
        elements: [].concat(data.nodes, data.edges),
        style: [
          {
            selector: "node",
            style: {
              "background-color": function (ele) {
                return typeColors[ele.data("type")] || "#999";
              },
              "label": "data(label)",
              "font-size": 10,
              "color": "#3a3a3a"
            }
          },
          {
            selector: "edge",
            style: {
              "width": 1,
              "line-color": "#c8c8c8",
              "curve-style": "bezier"
            }
          }
        ],
        layout: { name: "cose" }
      });

      cy.on("tap", "node", function (evt) {
        var n = evt.target.data();
        if (detail) {
          detail.innerHTML =
            "<span class='label'>painel de detalhe</span>" +
            "<p><strong>" + n.label + "</strong><br>tipo: " + n.type + "</p>";
        }
      });

      // filtros por tipo (chips na toolbar)
      document.querySelectorAll(".filter-chip[data-type]").forEach(function (chip) {
        chip.addEventListener("click", function () {
          var type = chip.dataset.type;
          chip.classList.toggle("active");
          var activeTypes = Array.from(
            document.querySelectorAll(".filter-chip.active")
          ).map(function (c) { return c.dataset.type; });

          cy.nodes().forEach(function (node) {
            var show = activeTypes.length === 0 || activeTypes.indexOf(node.data("type")) > -1;
            node.style("display", show ? "element" : "none");
          });
        });
      });
    });
});
