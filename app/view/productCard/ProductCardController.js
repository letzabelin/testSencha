Ext.define('testSencha.view.productCard.ProductCardController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.productCard',

  cancel() {
    const formView = this.getView();
    formView.close();
  },

  saveData() {
    const formView = this.getView();
    const store = formView.store;
    const formData = formView.getValues();

    const record = formView.getForm().getRecord().set(formData);
    store.update(record);

    // formView.updateRecord(record);
    formView.close();
    Ext.Msg.alert('Сообщение', 'Данные успешно изменены!');
  },
});
