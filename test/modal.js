/*!
 * Modal
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../modal');

it('Modal', async () => {
  assert.equal(component({
    modal: {
      // prefix: 'modal',
      cls: ['modal-more'],
      // fade: true,
      // size: 'sm',
      title: 'title',
      // dismiss: true,
      content: {
        action: '/route/to/submit',
        method: 'post',
      },
      html: '<strong>带html的</strong>',
      text: 'modal',
      buttons: [
        {style: 'default', text: '取消', autofocus: true, attributes: {'data-dismiss': 'modal'}},
        {style: 'primary', text: '提交', type: 'submit'},
      ],
    },
  }), '');
});
