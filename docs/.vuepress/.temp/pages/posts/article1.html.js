import comp from "/usr/src/app/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"1. Mesiversario\",\"lang\":\"es-es\",\"frontmatter\":{\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n<p>Nuestra primera salida como pareja.</p>\\n<blockquote>\\n<p>hola</p>\\n<p>cita</p>\\n</blockquote>\\n<img src=\\\"/images/parque-de-la-amistad.jpg\\\" alt=\\\"img\\\" width=\\\"300\\\" height=\\\"300\\\">\\n<p><img src=\\\"/images/parque-de-la-amistad.jpg\\\" alt=\\\"Primera cita|250\\\">\\n<img src=\\\"/images/brit-parque-amistad.jpg\\\" alt=\\\"Brithney\\\"></p>\"}")
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
