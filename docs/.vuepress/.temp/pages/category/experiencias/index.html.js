import comp from "/usr/src/app/docs/.vuepress/.temp/pages/category/experiencias/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/experiencias/\",\"title\":\"Category Experiencias\",\"lang\":\"es-es\",\"frontmatter\":{\"title\":\"Category Experiencias\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Experiencias\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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