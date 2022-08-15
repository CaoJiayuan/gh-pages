import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import * as sidebar from './configs/sidebar'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
    base: "/",
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '我的笔记',
            description: '我的开发笔记，记录有用的信息',
        }
    },
    themeConfig: {
        repo: "CaoJiayuan/gh-pages",
        docsRepo: "CaoJiayuan/gh-pages",
        docsBranch: "master",
        docsDir: "docs",
        sidebar: sidebar.en,
        home: "/",
        locales : {

        }
    },
})