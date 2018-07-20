/*!
 * Table
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../table');

it('Table', async () => {
  assert.equal(component({
    table: {
      // prefix: 'table',
      cls:['table-cls', 'table-more'],
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true,
      striped: true,
      title: 'title',
      columns: [
        {name: '#', key: (item, i) => i + 1, width: '10%', attributes: {class: ['index']}, item: (item, i) => {return {class: i == 0 && 'active'}}},
        {name: 'Firstname', key: 'firstname', width: '30%', attributes: {class: ['firstname']}, item: (item, i) => {return {class: i == 2 && 'success'}}},
        {name: 'Lastname', key: 'lastname', width: '30%', attributes: {class: ['lastname']}, item: (item, i) => {return {class: i == 0 && 'info'}}},
        {name: 'Username', key: 'username', width: '30%', attributes: {class: ['username']}, item: (item, i) => {return {class: i == 2 && 'danger'}}},
      ],
      items: [
        {firstname: 'Mark', lastname: 'Otto', username: '@mdo'},
        {firstname: 'Jacob', lastname: 'Thornton', username: '@fat', attributes: {class: 'active'}},
        {firstname: 'Larry', lastname: 'the Bird', username: '@twitter'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'success'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'info'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'warning'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'danger'}},
      ],
      empty: {
        cls: ['empty'],
        text: 'No matched data',
      },
      html: '<tr><td colspan="4">foot</td></tr>',
    },
  }), '');
});
