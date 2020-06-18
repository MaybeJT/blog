const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    base: "/blog/",
    title: "Just We就是Just We,既不伟大也不卑微",
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
                    message: "New content is available.",
                       buttonText: "Refresh"
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
            { text: 'about', link: '/about/' },
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
        sidebar: [


        //     '/about/': [
        //         'about1',     /* /foo/ */
        //         'about2',  /* /foo/one.html */
        //         '',  /* /foo/two.html */
        //     ],
        // },
          '/',
          '/Data Strutures/',
          '/about/',
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
            ],

    }

}