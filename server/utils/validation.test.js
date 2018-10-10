const expect = require('expect');
var { isRealString } = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBeFalsy();
    });

    it('Should reject string with only spaces', () => {
        var res = isRealString('   ');
        expect(res).toBeFalsy();
    });

    it('Should allow string with non-space characters', () => {
        var res = isRealString('  Andres  ');
        expect(res).toBeTruthy();
    });
});