const path = require('path');
console.log(path.join(__dirname, '../..'));

module.exports = {
    title: '疯狂的笔记',
    description: '疯狂的笔记',
    base: '/learn-demo/',
    locales: {
        '/': {
          lang: 'zh-CN',
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': path.join(__dirname, '../..'),
            }
        }
    },
    themeConfig: {
        search: false,
        searchMaxSuggestions: 10,
        nav: [{
            text: '前端',
            link: '/zh/web/'
        }],
        sidebar: false,
        smoothScroll: true,
        sidebar: {
            '/zh/web/HTML/': [{
                title: 'HTML',
                collapsable: false,
                children: [{
                    title: '介绍',
                    path: 'one'
                }]
            }],
            '/zh/web/CSS/': [{
                title: 'HTML',
                collapsable: false
            }],
            '/zh/web/JaveScript/': [{
                title: 'HTML',
                collapsable: false
            }]
        }
    }
}
