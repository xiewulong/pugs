/*!
 * Checkbox
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../checkbox');

it('Checkbox', async () => {
  assert.equal(component({
    checkbox: {
      // fake: false,
      // icon: false,
      // label: false,
      // radio: false,
      // id: 'checkbox-id',
      cls: ['checkbox-more'],
      name: 'checkbox-name',
      value: 'checkbox-value',
      // checked: false,
      // readonly: false,
      // disabled: false,
    },
  }), '');
});

it('Checkbox', async () => {
  assert.equal(component({
    checkbox: {
      fake: true,
      // icon: false,
      // label: false,
      radio: true,
      id: 'radio-id',
      cls: ['radio-more'],
      name: 'radio-name',
      value: 'radio-value',
      checked: true,
      readonly: true,
      disabled: true,
      html: '<strong>带html的</strong>',
      text: 'radio',
    },
  }), '');
});
