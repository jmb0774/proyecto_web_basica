(function() {
  var template = Handlebars.template,
    templates = Handlebars.templates = Handlebars.templates || {};
  templates['header'] = template({
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      return "<header>\n    <div class=\"container\">\n      <img class=\"logo\" src=\"img/logo.png\" alt=\"Mi cerveza\">\n      <h2 class=\"title\">Mi cerveza La Zaragozana</h2>\n      <p class=\"subtitle\">Aficiones y locuras de un amante de la cerveza</p>\n      <nav>\n        <button onclick=\"toggle_visibility('menu');\" class=\"btnmenu\">Menu</button>\n        <ul id=\"menu\" class=\"menu\">\n          <li class=\"menuitem\">\n            <a class=\"menulink\" href=\"index.html\">Inicio</a>\n          </li>\n          <li class=\"menuitem\">\n            <a class=\"menulink\" href=\"cervezas.html\">Cervezas</a>\n          </li>\n          <li class=\"menuitem\">\n            <a class=\"menulink\" href=\"contactar.html\">Contactar</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>";
    },
    "useData": true
  });
})();
