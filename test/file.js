/*!
 * File
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../file');

it('File', async () => {
  assert.equal(component({
    file: {
      // prefix: 'btn',
      cls: ['btn-more'],
      // type: 'button',
      style: 'primary',
      // size: 'sm',
      // block: false,
      // active: false,
      // disabled: false,
      html: '<strong>带html的</strong>',
      text: 'file',
      icon: {
        prefix: 'fa',
        name: 'upload',
      },
      input: {
        name: 'file',
        attributes: {
          multiple: 'multiple',
        },
      },
    },
  }), '');
});
