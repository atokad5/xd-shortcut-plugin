global.setTimeout = function (fn) { fn() }
global.clearTimeout = function () { };

const styles = require("./styles.css");
const Vue = require("vue").default;
const hello = require("./hello.vue").default
const { Text, Color } = require("scenegraph");

let dialog;
function getDialog() {
  if (dialog == null) {
    document.body.innerHTML = `<dialog><div id="container"></div></dialog>`
    dialog = document.querySelector("dialog");
    var app4 = new Vue({
      el: "#container",
      components: { hello },
      render(h) {
        return h(hello, { props: { dialog } })
      }
    })
  }
  return dialog
}

module.exports = {
  commands: {
    myPluginCommand: function () {
      getDialog().showModal();
    }
  }
};
