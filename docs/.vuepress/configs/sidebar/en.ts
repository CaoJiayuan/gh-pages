import type { SidebarConfig } from '@vuepress/theme-default'




export const en: SidebarConfig = {
    '/': [
        {
            text: '笔记',
            children: [
                '/notes/getting-started.md',
                '/guide/project-structure.md',
            ],
        },
    ],
}


