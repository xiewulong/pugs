/*!
 * Select
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../select');

it('Select', async () => {
  assert.equal(component({
    select: {
      // fake: true,
      id: 'select-id',
      cls: ['form-control', 'select-more'],
      name: 'select-name',
      value: 1,
      size: 'lg',
      multiple: true,
      items: [
        {name: 'a', value: 0},
        {name: 'b', value: 1},
        {name: 'c', value: 2},
        {name: 'd', value: 3},
        {name: 'e', value: 4},
        {name: 'f', value: 5},
      ],
    },
  }), '');
});

it('Select', async () => {
  assert.equal(component({
    select: {
      fake: true,
      id: 'select-id',
      cls: ['select-more'],
      name: 'select-name',
      value: 2,
      size: 'sm',
      multiple: true,
      up: true,
      align: 'right',
      items: [
        {name: '0值名称', value: 0},
        {name: '1值名称', value: 1},
        {name: '2值名称', value: 2},
        {name: '3值名称', value: 3},
        {name: '4值名称', value: 4, disabled: true},
        {name: '5值名称', value: 5},
      ],
    },
  }), '');
});
