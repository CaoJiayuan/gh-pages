import type { SidebarConfig } from '@vuepress/theme-default'
import { walkDocs } from '../../utils/func'

export const en: SidebarConfig = {
    '/': [
        {
            text: '笔记',
            children: walkDocs('notes'),
        },
    ],
}


