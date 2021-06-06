# Gatsby client-side pages path Windows issue

Issue reference: https://github.com/gatsbyjs/gatsby/issues/31791

## Description
Creating client-side pages with path match parameters fails on Windows because of invalid path characters (`:`):
```
Error: C:\Users\[redacted]\public\page-data\path\:param contains invalid WIN32 path characters.
```

### Steps to reproduce:

1. Create a client-side page configuration in the `gatsby-node.js` file:
    ```
    exports.createPages = async ({actions}) => {
      const {createPage} = actions

      createPage({
        path: '/path/:param',
        matchPath: '/path/:param',
        component: require.resolve('./src/templates/PageTemplate.js')
      })
    }
    ```
2. Create a template for the given page in `src/templates/PageTemplate.js`:
    ```
    import React from 'react'

    const PageTemplate = ({param}) => (
      <h1>{param}</h1>
    )

    export default PageTemplate
    ```
3. Run `gatsby develop` to build the project on a Windows machine.
4. Visit `http://localhost:8000/path/1` *(if the process hasn't failed yet)*.

### Expected result
- Ability to visit `http://localhost:8000/path/1` and see the provided parameter (`1`)

### Actual result
*(refer to issue description)*

<hr />

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
