Ext.define('testSencha.view.table.TableController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.table',

  openCard(view, cell, cellIndex, record) {
    if (Number(cellIndex) === 1) {
      const store = view.getStore();
      const {
        data: { name: productName },
      } = record;

      const productForm = Ext.create({
        xtype: 'productCard',
        title: `Карточка товара: ${productName}`,
        store,
      });

      productForm.show();
      productForm.loadRecord(record);
    }
  },
});
