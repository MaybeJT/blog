const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    base: "/blog/",
    title: "学习记录，2020加油",
    description:"笔记",
    head:[
      ['link',{rel:'icon',href:'/assets/img/favicon.ico'}]  ,
      ['meta',{name:"MaybeJT",content:"笔记记录"}],
    ],
    plugins: [
        [
            '@vuepress/pwa',
            {
                  serviceWorker: true,
                  updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
              }
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    // 不要忘了安装 moment
                    // const moment = require('moment')
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
    themeConfig: {
        // navbar:false,
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Data Strutures',link: '/Data Strutures/'},
            { text: '工具', link: '/Tools/' },
            { text: '万能网址', link: 'https://baidu.com' },
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' }
            //     ]
            // },
            // {
            //     text: '分组',
            //     items: [
            //         { text: 'Group1', items: [
            //             { text: 'about', link: '/about/' },
            //             { text: '万能网址', link: 'https://baidu.com' },
            //         ] },
            //         { text: 'Group2', items: [
            //             { text: 'about', link: '/about/' },
            //             { text: '另一个万能网址', link: 'https://www.csdn.net/' },
            //         ] }
            //     ]
            // }
        ],
        sidebar: {

            '/Data Strutures/': [
                '',     /* /foo/ */
                'one',
                'Hot100',/* /foo/one.html */
            ],
            '/Tools/':[
                '',
            ],
            // fallback
            '/': [
                '',        /* / */
                'test'    /* /about.html */
            ]

            // {
            //     title: 'Group 1',   // 必要的
            //     path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 默认值是 true,
            //     sidebarDepth: 1,    // 可选的, 默认值是 1
            //     children: [
            //         '/',
            //         '/about/',
            //         '/Data Strutures/'
            //     ]
            // },
        },

    }

}