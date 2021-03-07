Ext.define('testSencha.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  addTable(btn) {
    const tabPanel = btn.up('app-main').down('tabpanel');
    tabPanel.setVisible(true);

    const newTab = {
      title: 'Товары',
      items: {
        xtype: 'table',
      },
    };

    tabPanel.setActiveTab(newTab);
  },

  logOut() {
    this.getView().destroy();

    Ext.create({
      xtype: 'loginForm',
    });
  },
});
