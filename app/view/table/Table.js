function handleZeroQuantity(value, meta) {
  if (Number(value) === 0) {
    meta.style = 'background-color: red';
  }

  return value;
}

Ext.define('testSencha.view.table.Table', {
  extend: 'Ext.grid.Panel',
  xtype: 'table',
  controller: 'table',

  title: 'Список товаров',

  store: Ext.create('testSencha.store.Products'),

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
    { text: 'Кол-во', dataIndex: 'quantity', renderer: handleZeroQuantity },
  ],
});
