module.exports = {
  plugins: ['cypress-plugin-netlify'],
}
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888',
    supportFile: false,
  },
});
