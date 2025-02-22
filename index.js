'use strict'

import { registerRoute } from '@/routes';

import MegaMaker from "./MegaMaker.vue"

// Add menu named MegaMaker to Control. Change "Control" to , Job, Files or Settings to change.
registerRoute(MegaMaker, {
    Control: {
        MegaMaker: {
            icon: 'mdi-size-m',
            caption: 'MegaMaker',
            path: '/Plugins/MegaMaker'
        },
    },
});
