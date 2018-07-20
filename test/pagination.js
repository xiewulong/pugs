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
      firstCls: ['first'],
      lastCls: ['last'],
      prevCls: ['prev'],
      nextCls: ['next'],
      pageCls: ['page'],
      // activeCls: ['active'],
      // disabledCls: ['disabled'],
      first: 'first',
      last: 'last',
      prev: '«',
      next: '»',
      url: '/route/path?query=string&page=${page}&size=${size}',
      page: 10,
      // size: 20,
      // maxButtonCount: 6,
      // hideOnSinglePage: false,
      // disableActivePageButton: false,
      ellipsis: '...',
    },
  }), '');
});
