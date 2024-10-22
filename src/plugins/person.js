export default {
  install(app, options) {
    const person = {
      name: '서나당',
      say() {
        alert(this.name);
      },
      ...options,
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};