Ext.define('testSencha.view.searchForm.SearchFormController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.searchForm',

  search(textField, evt) {
    if (evt.getKey() === evt.ENTER) {
      const store = textField.up('app-main').down('grid').getStore();
      const {
        target: { value, name: filterName },
      } = evt;

      const shouldAnyMatch = filterName === 'description';
      const filter = { value, id: filterName, property: filterName, anyMatch: shouldAnyMatch };
      store.addFilter(filter);
      store.reload();
    }
  },
});
