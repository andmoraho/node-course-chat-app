var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('Should generate the correct message object', () => {
        var from = 'Vi';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('Should generate a correct location object', () => {
        var from = 'Admin';
        var latitude = 1.3;
        var longitude = 15.6;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(from).toBe('Admin');
        expect(typeof message.createdAt).toBe('number');
        expect(typeof latitude).toBe('number');
        expect(typeof longitude).toBe('number');
        expect(message).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
    });
});