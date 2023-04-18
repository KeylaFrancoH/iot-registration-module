import { c as create_ssr_component, d as add_attribute } from "../../chunks/index-2685dc85.js";
var endpoints_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1h2hce8{overflow:hidden;width:100%}.responsive-iframe.svelte-1h2hce8{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;padding-top:8rem}")();
const css = {
  code: ".container.svelte-1h2hce8{overflow:hidden;width:100%}.responsive-iframe.svelte-1h2hce8{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;padding-top:8rem}",
  map: null
};
const Endpoints = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const apiStandardization = "http://172.24.178.122:8082/v1";
  let src = `${apiStandardization}/docs`;
  $$result.css.add(css);
  return `<div class="container svelte-1h2hce8"><iframe class="responsive-iframe svelte-1h2hce8"${add_attribute("src", src, 0)}></iframe></div>

<div><a href="/chart"></a>
</div>`;
});
export { Endpoints as default };
