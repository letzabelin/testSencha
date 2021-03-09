Ext.define('testSencha.view.table.TableController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.table',

  openCard(view, el, cellIndex, record) {
    const { dataIndex } = view.headerCt.getGridColumns()[cellIndex];

    if (dataIndex === 'name') {
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
