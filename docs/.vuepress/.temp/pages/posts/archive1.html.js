import comp from "/usr/src/app/docs/.vuepress/.temp/pages/posts/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive1.html\",\"title\":\"1. Mesiversario\",\"lang\":\"es-es\",\"frontmatter\":{\"date\":\"06-03-2024\",\"category\":[\"Experiencias\"],\"tag\":[\"Parque de la amistad\",\"Surco\",\"Mesiversario\"],\"archive\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/archive1.md\",\"excerpt\":\"\\n<p>Nuestra primera salida como pareja.</p>\\n<p><img src=\\\"/images/parque-de-la-amistad.jpg\\\" alt=\\\"Primera cita|250\\\">\\n<img src=\\\"/images/brit-parque-amistad.jpg\\\" alt=\\\"Brithney\\\"></p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
