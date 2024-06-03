export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Experiencias":{"path":"/category/experiencias/","indexes":[0]},"History":{"path":"/category/history/","indexes":[1]},"CategoryA":{"path":"/category/categorya/","indexes":[2,3,4,5,6,7,8,9,10,11,12,13]},"CategoryB":{"path":"/category/categoryb/","indexes":[2,3,4,5,6,7,8,10,11,12]},"CategoryC":{"path":"/category/categoryc/","indexes":[14,15]}}}},"tag":{"/":{"path":"/tag/","map":{"Parque de la amistad":{"path":"/tag/parque-de-la-amistad/","indexes":[0]},"Surco":{"path":"/tag/surco/","indexes":[0]},"Mesiversario":{"path":"/tag/mesiversario/","indexes":[0]},"WWII":{"path":"/tag/wwii/","indexes":[1]},"tag A":{"path":"/tag/tag-a/","indexes":[5,6,7,8,9,13]},"tag B":{"path":"/tag/tag-b/","indexes":[5,6,7,8,9,13]},"tag C":{"path":"/tag/tag-c/","indexes":[2,3,4,10,11,12]},"tag D":{"path":"/tag/tag-d/","indexes":[2,3,4,10,11,12]},"tag E":{"path":"/tag/tag-e/","indexes":[14,15]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

