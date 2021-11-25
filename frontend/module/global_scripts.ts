/**
 * Global scripts that will be executed on every page load
 * We recommend to use angular pages / components instead
 */

document.addEventListener('DOMContentLoaded', function () {
  // OpenProject logo gets thick red border on mouse hover.
  document.getElementById("#logo")?.addEventListener("mouseover", function(e) {
    this.style.border = '3px solid red';
  }, false);

  document.getElementById("#logo")?.addEventListener("mouseout", function(e) {
    this.style.border = '';
  }, false);

  // Widget box emphasized by giving it a nice red border.
  document.getElementById('#proto-plugin-block')?.parentElement?.classList?.add('proto-plugin-widget-box');

  console.log(I18n.t('js.proto_plugin_name') + ' OK');
}, false);
