/*!
 * Form
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../form');

it('Form', async () => {
  assert.equal(component({
    form: {
      // prefix: 'form',
      type: 'horizontal',
      cls: ['form-more'],
      name: 'form-name',
      action: '/path/to/action',
      method: 'post',
      file: true,
      // fieldset: true,
      disabled: true,
      title: 'title',
      html: '...',
      groups: [
        {
          label: 'Username',
          control: {
            // type: 'text',
            id: 'username',
            name: 'Username',
            placeholder: 'Username',
          },
        },
        {
          label: 'Password',
          control: {
            type: 'password',
            id: 'password',
            name: 'Password',
            placeholder: 'Password',
          },
        },
      ],
      buttons: [
        {
          style: 'default',
          text: 'Cancel',
        },
        {
          type: 'submit',
          style: 'primary',
          text: 'Submit',
        },
      ],
    },
  }), '');
});
