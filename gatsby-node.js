exports.createPages = async ({actions}) => {
  const {createPage} = actions

  createPage({
    path: '/path/:param',
    matchPath: '/path/:param',
    component: require.resolve('./src/templates/PageTemplate.js')
  })
}