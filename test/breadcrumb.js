/*!
 * Breadcrumb
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../breadcrumb');

it('Breadcrumb', async () => {
  assert.equal(component({
    breadcrumb: {
      cls: ['breadcrumb', 'breadcrumb-more'],
      active_cls: ['active', 'active-more'],
      // item: '<a href="${url}" class="${active}">${name}</a>',
      // item: (item, i) => {
      // 	console.dir(item);
      // 	console.dir(i);
      // 	return `<a href="${item.url}" class="${item.active && 'active' || ''}">${item.name}</a>`;
      // },
      items: [
        {
          name: 'Home',
          url: '/',
          cls: ['first', 'home'],
        },
        {
          name: 'Library',
        },
        {
          name: 'Data',
        },
      ],
    },
  }), '');
});
