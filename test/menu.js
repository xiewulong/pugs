/*!
 * Menu
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../menu');

it('Menu', async () => {
  assert.equal(component({
    menu: {
      cls: ['menu', 'menu-more'],
      arrow: ['icon-arrow-down'],
      activeCls: ['active'],
      activeId: 1,
      depth: true,
      // item: (item, active, depth, i) => {
      // 	console.dir(item);
      // 	console.dir(active);
      // 	console.dir(depth);
      // 	console.dir(i);
      // 	return `<a href="${item.url}" class="${active && 'active' || ''}" data-id="${item.id}" data-depth="${depth}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
      // },
      items: [
        {
          id: 1,
          name: 'menu1',
          url: '/menu1',
          icon: {name: 'home'},
        },
        {
          id: 2,
          name: 'menu2',
          icon: {name: 'home'},
          children: [
            {
              id: 6,
              name: 'menu6',
              url: '/menu6',
            },
          ],
        },
        {
          id: 3,
          name: 'menu3',
          url: '/menu3',
          icon: {name: 'home'},
        },
        {
          id: 4,
          name: 'menu4',
          icon: {name: 'home'},
          children: [
            {
              id: 7,
              name: 'menu7',
              url: '/menu7',
            },
            {
              id: 8,
              name: 'menu8',
              children: [
                {
                  id: 9,
                  name: 'menu9',
                  url: '/menu9',
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'menu5',
          url: '/menu5',
          icon: {name: 'home'},
        },
      ],
    },
  }), '');
});
