const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://demo.guru99.com/test/newtours',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
    },
  },
});
