/*!
 * Pagination
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../pagination');

it('Pagination', async () => {
  assert.equal(component({
    pagination: {
      totalCount: 666,
      cls: ['pagination', 'pagination-more'],
      first_cls: ['first'],
      last_cls: ['last'],
      prev_cls: ['prev'],
      next_cls: ['next'],
      page_cls: ['page'],
      // active_cls: ['active'],
      // disabled_cls: ['disabled'],
      first: 'first',
      last: 'last',
      prev: '«',
      next: '»',
      url: '/route/path?query=string&page=${page}&size=${size}',
      page: 10,
      // size: 20,
      // max_button_count: 6,
      // hide_on_single_page: false,
      // disable_active_page_button: false,
      ellipsis: '...',
    },
  }), '');
});
