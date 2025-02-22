'use strict'

import { registerRoute } from '@/routes';

import MainContent from "./MainContent.vue"
import themeConfig from "./themeConfig.js"

// Add menu named MegaMaker to Control. Change "Control" to , Job, Files or Settings to change.
registerRoute(MainContent, {
    Control: {
        MegaMaker: {
            icon: 'mdi-size-m',
            caption: 'MegaMaker',
            path: '/Plugins/MegaMakerPlugin'
        },
    },
});
