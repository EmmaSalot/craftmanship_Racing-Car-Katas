const chai = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const HtmlTextConverter = require('../text-converter/html-text-converter.js');

chai.should();

describe('Html Converter', function() {

    describe('HtmlTextConverter', function() {

        it('should return correct filename', function() {
            const filename = 'foo';
            const converter = new HtmlTextConverter(filename);

            const result = converter.getFilename();

            result.should.equal(filename);
        });

        it('should convert plain text to HTML', function() {
            const filename = 'test.txt';
            const text = 'This is a test text.\nIt has multiple lines.\n';
            sinon.stub(fs, 'readFileSync').returns(text);
            const expectedHtml = 'This is a test text.<br />It has multiple lines.<br />';
            const converter = new HtmlTextConverter(filename);

            const result = converter.convertToHtml();

            result.should.equal(expectedHtml);

            fs.readFileSync.restore();
        });

    });

});
