var assert = require('assert');
var request = require('request');

describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();

        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });

    describe('Api Page', function () {
      it('should have a link to it from the homepage', function (){
          browser.url('/');
          var hasApiLink = browser.isExisting('=API')

          assert(hasApiLink);
          // browser.isExisting('a[href="/api.html"]')
      })

      it('should take you to the API page', function (){
          browser.url('/');
          browser.click('=API');

          var title = browser.getTitle();
          assert.equal(title, 'WebdriverIO - API Docs');
      })

      it.skip('should filter search results', function (){
        var selector = 'input[name="search"]';
          browser.url('/api.html');

          browser.setValue(selector, 'debugs');
          browser.webdrivercss("search", [{
            elem: selector,
            name: "inputbox"
          }]);


          browser.webdrivercss("searchwithinput", [{
            elem: selector,
            name: "inputbox"
          }]);
      })

    })

});