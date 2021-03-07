function handleZeroQuantity(value, meta) {
  if (Number(value) === 0) {
    meta.style = 'background-color: red';
  }

  return value;
}

Ext.define('testSencha.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'app-main',
  controller: 'main',

  requires: [
    'testSencha.view.main.MainController',
    'testSencha.store.Products',
    'Ext.plugin.Viewport',
    'testSencha.view.tabPanel.TabPanel',
  ],

  plugins: 'viewport',

  items: [
    {
      xtype: 'panel',
      title: 'Главная страница',
      dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          layout: 'hbox',
          items: [
            {
              xtype: 'button',
              text: 'Товары',
              listeners: {
                click: 'addTable',
              },
            },
            {
              xtype: 'button',
              text: 'Выйти',
              listeners: {
                click: 'logOut',
              },
            },
          ],
        },
      ],
      items: {
        xtype: 'tabPanel',
      },
    },
  ],
});
