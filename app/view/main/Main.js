Ext.define('testSencha.view.main.Main', {
  extend: 'Ext.grid.Panel',
  xtype: 'app-main',
  controller: 'main',

  title: 'Главная',

  requires: ['testSencha.view.main.MainController', 'testSencha.store.Products', 'Ext.plugin.Viewport'],
  plugins: 'viewport',

  // store: 'products',

  height: 200,
  width: 400,

  columns: [
    { text: 'Идентификатор', dataIndex: 'id' },
    { text: 'Наименование', dataIndex: 'name' },
    { text: 'Описание', dataIndex: 'description' },
    { text: 'Цена', dataIndex: 'price' },
    { text: 'Количество', dataIndex: 'quantity' },
  ],
});
