import comp from "/usr/src/app/docs/.vuepress/.temp/pages/tag/mesiversario/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/mesiversario/\",\"title\":\"Tag Mesiversario\",\"lang\":\"es-es\",\"frontmatter\":{\"title\":\"Tag Mesiversario\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Mesiversario\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
