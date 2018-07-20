/*!
 * Alert
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../alert');

it('Alert', async () => {
  assert.equal(component({
    alert: {
      // prefix: 'alert',
      // style: 'success',
      // dismiss: true,
      fade: true,
      icon: {name: 'success'},
      html: '<strong>带html的</strong>',
      text: 'alert',
    },
  }), '');
});
