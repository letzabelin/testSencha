Ext.define('testSencha.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  addTable(btn) {
    const tabPanel = btn.up('app-main').down('tabpanel');
    const tabsCount = tabPanel.items.getCount();

    if (tabsCount === 0) {
      tabPanel.setVisible(true);
    }

    const newTab = {
      title: 'Товары',
      items: {
        xtype: 'table',
      },
    };

    tabPanel.setActiveTab(newTab);
  },

  logOut() {
    const main = this.getView();
    main.destroy();

    Ext.create({
      xtype: 'loginForm',
    });
  },
});
