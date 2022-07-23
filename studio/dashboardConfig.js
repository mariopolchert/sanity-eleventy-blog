export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62dc155995186a2b54e88cd4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-su6upgv7',
                  apiId: '6c974852-8bf9-4461-8c58-5a0c482dd026'
                },
                {
                  buildHookId: '62dc155979f6ba2a66f34f12',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-wz5dqqd7',
                  apiId: 'b4ff19a6-740e-4de8-8710-034dae4021a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariopolchert/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-wz5dqqd7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
