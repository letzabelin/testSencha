Ext.define('testSencha.view.table.TableController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.table',

  openCard(view, el, rowIndex, colIndex, evt, { data }) {
    console.log(data);

    Ext.create({
      xtype: 'productCard',
    });
  },
});
