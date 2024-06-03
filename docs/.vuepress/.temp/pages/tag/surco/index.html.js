import comp from "/usr/src/app/docs/.vuepress/.temp/pages/tag/surco/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/surco/\",\"title\":\"Tag Surco\",\"lang\":\"es-es\",\"frontmatter\":{\"title\":\"Tag Surco\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Surco\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
