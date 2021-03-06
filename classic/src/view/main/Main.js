Ext.define('testSencha.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'app-main',

  requires: ['testSencha.view.main.MainController', 'testSencha.view.main.MainModel', 'testSencha.view.form.Form'],

  layout: {
    type: 'vbox',
    align: 'center',
    pack: 'center',
  },

  controller: 'main',
  viewModel: 'main',

  items: [
    {
      xtype: 'loginForm',
    },
  ],
});
