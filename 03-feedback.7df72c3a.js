function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var l=a("kEUo3");const n=document.querySelector(".feedback-form");let s;(()=>{try{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);n.email.value=t.email,n.message.value=t.message}}catch(e){console.error(e.message)}})(),n.addEventListener("input",e(l).throttle((()=>{s=JSON.stringify({email:n.email.value,message:n.message.value}),localStorage.setItem("feedback-form-state",s)}),500)),n.addEventListener("submit",(e=>{e.preventDefault(),console.log(s),localStorage.removeItem("feedback-form-state"),n.reset()}));
//# sourceMappingURL=03-feedback.7df72c3a.js.map
