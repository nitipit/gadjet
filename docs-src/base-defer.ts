import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';

const Color = require('color');

import { Sidebar } from 'gadjet/src/ui/sidebar/sidebar';
import { ButtonPin } from 'gadjet/src/ui/button/button-pin';

import './global.d';

import './_component/blockquote';
import './_component/code';
import './_component/paragraph';
import './_component/sidebar';
import './_component/function-detail';

hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', bash);

window.sidebar = document.querySelector('el-sidebar') as Sidebar;
window.sidebarButton = document.querySelector('el-sidebar-button') as ButtonPin;
window.Color = Color;