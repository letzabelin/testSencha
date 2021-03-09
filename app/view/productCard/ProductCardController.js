Ext.define('testSencha.view.productCard.ProductCardController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.productCard',

  cancel() {
    const formView = this.getView();
    formView.close();
  },

  saveData() {
    const formView = this.getView();
    const record = formView.getForm().getRecord();
    const store = formView.store;

    formView.updateRecord(record);

    const isDataUpdated = record.dirty;
    formView.close();

    if (isDataUpdated) {
      Ext.Msg.alert('Сообщение', 'Данные успешно изменены!');

      setTimeout(() => {
        store.reload();
      }, 2000);
    }
  },
});
