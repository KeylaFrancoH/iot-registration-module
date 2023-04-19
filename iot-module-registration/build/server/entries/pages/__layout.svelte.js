import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-2685dc85.js";
import { w as writable } from "../../chunks/index-f9fe0307.js";
var app = /* @__PURE__ */ (() => '/*\n! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.m-0 {\n  margin: 0px;\n}\n.m-7 {\n  margin: 1.75rem;\n}\n.m-10 {\n  margin: 2.5rem;\n}\n.-mx-3 {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mt-24 {\n  margin-top: 6rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.ml-24 {\n  margin-left: 6rem;\n}\n.ml-8 {\n  margin-left: 2rem;\n}\n.mr-14 {\n  margin-right: 3.5rem;\n}\n.mt-7 {\n  margin-top: 1.75rem;\n}\n.ml-20 {\n  margin-left: 5rem;\n}\n.mr-8 {\n  margin-right: 2rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-52 {\n  height: 13rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-11\\/12 {\n  width: 91.666667%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.grow-0 {\n  flex-grow: 0;\n}\n.basis-auto {\n  flex-basis: auto;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n.bg-slate-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity));\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n.bg-contain {\n  background-size: contain;\n}\n.bg-clip-padding {\n  background-clip: padding-box;\n}\n.bg-center {\n  background-position: center;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.fill-current {\n  fill: currentColor;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.pt-1 {\n  padding-top: 0.25rem;\n}\n.pb-20 {\n  padding-bottom: 5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pr-8 {\n  padding-right: 2rem;\n}\n.pl-1 {\n  padding-left: 0.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.italic {\n  font-style: italic;\n}\n.not-italic {\n  font-style: normal;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.leading-snug {\n  line-height: 1.375;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.checked\\:border-blue-600:checked {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n.checked\\:bg-blue-600:checked {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n.hover\\:bg-stone-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(120 113 108 / var(--tw-bg-opacity));\n}\n.hover\\:bg-slate-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n.hover\\:text-red-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:border-gray-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.focus\\:border-blue-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n.focus\\:bg-white:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.focus\\:bg-blue-700:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n.focus\\:text-gray-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.focus\\:text-red-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n.focus\\:shadow-lg:focus {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.active\\:bg-blue-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\n.active\\:shadow-lg:active {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:text-green-300 {\n    --tw-text-opacity: 1;\n    color: rgb(134 239 172 / var(--tw-text-opacity));\n  }\n\n  .dark\\:ring-offset-gray-800 {\n    --tw-ring-offset-color: #1f2937;\n  }\n\n  .dark\\:focus\\:ring-blue-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));\n  }\n}\n@media (min-width: 640px) {\n\n  .sm\\:max-w-screen-sm {\n    max-width: 640px;\n  }\n\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:min-h-screen {\n    min-height: 100vh;\n  }\n\n  .md\\:w-9\\/12 {\n    width: 75%;\n  }\n\n  .md\\:w-8\\/12 {\n    width: 66.666667%;\n  }\n\n  .md\\:shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .md\\:pb-44 {\n    padding-bottom: 11rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:w-6\\/12 {\n    width: 50%;\n  }\n\n  .lg\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:p-16 {\n    padding: 4rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:text-left {\n    text-align: left;\n  }\n\n  .lg\\:text-center {\n    text-align: center;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:ml-20 {\n    margin-left: 5rem;\n  }\n\n  .xl\\:w-6\\/12 {\n    width: 50%;\n  }\n\n  .xl\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n\n  .xl\\:justify-center {\n    justify-content: center;\n  }\n\n  .xl\\:p-0 {\n    padding: 0px;\n  }\n}\n\n')();
const user = writable();
var navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj,.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj::after,.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj::before{box-sizing:border-box;padding:0;margin:0}.navbar.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj,.navbar.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:none}.container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{max-width:1200px;width:90%;margin:auto}.navbar.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{box-shadow:0 3px 2px -2px #aaa;position:fixed;width:100%;background:white;color:#000;opacity:0.85;z-index:100;padding-bottom:10px;padding-top:10px;left:0;top:0}.navbar-container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{display:flex;justify-content:space-between;height:64px;align-items:center}.menu-items.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{order:2;display:flex}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj,.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{order:1}.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{list-style:none;margin-left:1.5rem;font-size:1.3rem}.navbar.svelte-ox7nxj a.svelte-ox7nxj.svelte-ox7nxj{color:#444;text-decoration:none;font-weight:500;transition:color 0.3s ease-in-out}.navbar.svelte-ox7nxj a.svelte-ox7nxj.svelte-ox7nxj:hover{color:#1976d2}@media(max-width: 900px){.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{font-size:1rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{font-size:0.9rem}}@media(max-width: 814px){.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{font-size:0.8rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{font-size:0.7rem}}@media(max-width: 785px){.navbar.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{opacity:0.95;padding-top:30px}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj,.navbar-container.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:block}.navbar-container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{display:block;position:relative;height:64px;margin:0}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj{position:absolute;display:block;height:32px;width:30px;top:20px;left:20px;z-index:5;opacity:0;cursor:pointer}.navbar-container.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:block;height:20px;width:22px;position:absolute;top:20px;left:20px;z-index:2;display:flex;flex-direction:column;justify-content:space-between}.navbar-container.svelte-ox7nxj .hamburger-lines .line.svelte-ox7nxj.svelte-ox7nxj{display:block;height:4px;width:100%;border-radius:10px;background:#333}.navbar-container.svelte-ox7nxj .hamburger-lines .line1.svelte-ox7nxj.svelte-ox7nxj{transform-origin:0% 0%;transition:transform 0.3s ease-in-out}.navbar-container.svelte-ox7nxj .hamburger-lines .line2.svelte-ox7nxj.svelte-ox7nxj{transition:transform 0.2s ease-in-out}.navbar-container.svelte-ox7nxj .hamburger-lines .line3.svelte-ox7nxj.svelte-ox7nxj{transform-origin:0% 100%;transition:transform 0.3s ease-in-out}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{padding-top:100px;background:#fff;height:100vh;max-width:50%;transform:translate(-150%);display:flex;flex-direction:column;margin-left:-40px;padding-left:40px;transition:transform 0.5s ease-in-out;box-shadow:2px 0 5px -2px #aaa;overflow:scroll}.navbar.svelte-ox7nxj .menu-items li.svelte-ox7nxj.svelte-ox7nxj{margin-bottom:1.8rem;font-size:1.1rem;font-weight:500}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{position:absolute;bottom:4px;left:80px}.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{position:absolute;top:2px;left:80px;height:2.5rem}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj:checked~.menu-items.svelte-ox7nxj{transform:translateX(0)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line1.svelte-ox7nxj.svelte-ox7nxj{transform:rotate(45deg)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line2.svelte-ox7nxj.svelte-ox7nxj{transform:scaleY(0)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line3.svelte-ox7nxj.svelte-ox7nxj{transform:rotate(-45deg)}}@media(max-width: 500px){}@media(max-width: 370px){.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{top:4px;left:80px;height:2rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{bottom:8px;left:80px;font-size:0.8rem}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{max-width:80%}.navbar.svelte-ox7nxj .menu-items li.svelte-ox7nxj.svelte-ox7nxj{margin-bottom:1.4rem;font-size:0.8rem}}@media(max-width: 310px){.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{top:1px}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{bottom:1px;font-size:0.7rem}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{max-width:90%}}")();
const css = {
  code: ".svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj,.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj::after,.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj::before{box-sizing:border-box;padding:0;margin:0}.navbar.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj,.navbar.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:none}.container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{max-width:1200px;width:90%;margin:auto}.navbar.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{box-shadow:0 3px 2px -2px #aaa;position:fixed;width:100%;background:white;color:#000;opacity:0.85;z-index:100;padding-bottom:10px;padding-top:10px;left:0;top:0}.navbar-container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{display:flex;justify-content:space-between;height:64px;align-items:center}.menu-items.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{order:2;display:flex}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj,.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{order:1}.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{list-style:none;margin-left:1.5rem;font-size:1.3rem}.navbar.svelte-ox7nxj a.svelte-ox7nxj.svelte-ox7nxj{color:#444;text-decoration:none;font-weight:500;transition:color 0.3s ease-in-out}.navbar.svelte-ox7nxj a.svelte-ox7nxj.svelte-ox7nxj:hover{color:#1976d2}@media(max-width: 900px){.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{font-size:1rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{font-size:0.9rem}}@media(max-width: 814px){.menu-items.svelte-ox7nxj li.svelte-ox7nxj.svelte-ox7nxj{font-size:0.8rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{font-size:0.7rem}}@media(max-width: 785px){.navbar.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{opacity:0.95;padding-top:30px}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj,.navbar-container.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:block}.navbar-container.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{display:block;position:relative;height:64px;margin:0}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj.svelte-ox7nxj{position:absolute;display:block;height:32px;width:30px;top:20px;left:20px;z-index:5;opacity:0;cursor:pointer}.navbar-container.svelte-ox7nxj .hamburger-lines.svelte-ox7nxj.svelte-ox7nxj{display:block;height:20px;width:22px;position:absolute;top:20px;left:20px;z-index:2;display:flex;flex-direction:column;justify-content:space-between}.navbar-container.svelte-ox7nxj .hamburger-lines .line.svelte-ox7nxj.svelte-ox7nxj{display:block;height:4px;width:100%;border-radius:10px;background:#333}.navbar-container.svelte-ox7nxj .hamburger-lines .line1.svelte-ox7nxj.svelte-ox7nxj{transform-origin:0% 0%;transition:transform 0.3s ease-in-out}.navbar-container.svelte-ox7nxj .hamburger-lines .line2.svelte-ox7nxj.svelte-ox7nxj{transition:transform 0.2s ease-in-out}.navbar-container.svelte-ox7nxj .hamburger-lines .line3.svelte-ox7nxj.svelte-ox7nxj{transform-origin:0% 100%;transition:transform 0.3s ease-in-out}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{padding-top:100px;background:#fff;height:100vh;max-width:50%;transform:translate(-150%);display:flex;flex-direction:column;margin-left:-40px;padding-left:40px;transition:transform 0.5s ease-in-out;box-shadow:2px 0 5px -2px #aaa;overflow:scroll}.navbar.svelte-ox7nxj .menu-items li.svelte-ox7nxj.svelte-ox7nxj{margin-bottom:1.8rem;font-size:1.1rem;font-weight:500}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{position:absolute;bottom:4px;left:80px}.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{position:absolute;top:2px;left:80px;height:2.5rem}.navbar-container.svelte-ox7nxj input[type='checkbox'].svelte-ox7nxj:checked~.menu-items.svelte-ox7nxj{transform:translateX(0)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line1.svelte-ox7nxj.svelte-ox7nxj{transform:rotate(45deg)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line2.svelte-ox7nxj.svelte-ox7nxj{transform:scaleY(0)}.navbar-container.svelte-ox7nxj input[type='checkbox']:checked~.hamburger-lines .line3.svelte-ox7nxj.svelte-ox7nxj{transform:rotate(-45deg)}}@media(max-width: 500px){}@media(max-width: 370px){.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{top:4px;left:80px;height:2rem}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{bottom:8px;left:80px;font-size:0.8rem}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{max-width:80%}.navbar.svelte-ox7nxj .menu-items li.svelte-ox7nxj.svelte-ox7nxj{margin-bottom:1.4rem;font-size:0.8rem}}@media(max-width: 310px){.imagen.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{top:1px}.logo.svelte-ox7nxj.svelte-ox7nxj.svelte-ox7nxj{bottom:1px;font-size:0.7rem}.navbar.svelte-ox7nxj .menu-items.svelte-ox7nxj.svelte-ox7nxj{max-width:90%}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="navbar svelte-ox7nxj"><div class="navbar-container container svelte-ox7nxj"><input type="checkbox" name="" id="" class="svelte-ox7nxj">
		<div class="hamburger-lines svelte-ox7nxj"><span class="line line1 svelte-ox7nxj"></span>
			<span class="line line2 svelte-ox7nxj"></span>
			<span class="line line3 svelte-ox7nxj"></span></div>
		<ul class="menu-items svelte-ox7nxj"><li class="svelte-ox7nxj"><a href="/" class="svelte-ox7nxj">Dashboard Demo</a></li>
			<li class="svelte-ox7nxj"><a href="/registrar-modulo" class="svelte-ox7nxj">Registrar Entidad</a></li>
			<li class="svelte-ox7nxj"><a href="/endpoints" class="svelte-ox7nxj">Endpoint datos abiertos</a></li></ul>
		<a href="https://www.espol.edu.ec/" class="items-center svelte-ox7nxj"><img src="https://www.espol.edu.ec/sites/default/files/d9/logoESPOL.svg" class="imagen svelte-ox7nxj" alt="Espol Logo">
			<span class="logo svelte-ox7nxj">Sistema de Registro de M\xF3dulos IoT</span></a></div>
</nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  const ssr = false;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$unsubscribe_user();
  return `${``}

${`<div class="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-44 ">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({}) : ``}</div>`}`;
});
export { _layout as default };
