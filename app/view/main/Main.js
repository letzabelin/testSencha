Ext.define('testSencha.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'app-main',
  controller: 'main',

  requires: ['Ext.plugin.Viewport'],

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
              handler: 'addTable',
            },
            {
              xtype: 'button',
              text: 'Выйти',
              handler: 'logOut',
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
