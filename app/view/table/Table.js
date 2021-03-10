Ext.define('testSencha.view.table.Table', {
  extend: 'Ext.grid.Panel',
  xtype: 'table',
  controller: 'table',

  requires: ['testSencha.store.Products'],

  title: 'Список товаров',

  store: {
    type: 'products',
  },

  forceFit: true,

  dockedItems: [
    {
      xtype: 'searchForm',
    },
  ],

  listeners: {
    cellmousedown: 'openCard',
  },

  columns: [
    { text: 'Идентификатор', dataIndex: 'id' },
    { text: 'Наименование', dataIndex: 'name' },
    { text: 'Описание', dataIndex: 'description' },
    { text: 'Цена', dataIndex: 'price' },
    {
      text: 'Кол-во',
      dataIndex: 'quantity',
      renderer(value, meta) {
        if (Number(value) === 0) {
          meta.style = 'background-color: red';
        }

        return value;
      },
    },
  ],
});
