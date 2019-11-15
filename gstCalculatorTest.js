const getGSTandFinalPrice = require('./gstCalculator');
const assert = require('assert');

describe('Calculate GST', function () {
    it('should return GST as 0 and final price as 100 after GST for units:1, Commodity:"Rice" and unitPrice:100', function () {
        assert.deepEqual(getGSTandFinalPrice(1, "Rice", 100), {
            gst: 0,
            finalPrice: 100
        });
    });
    it('should return GST as 1000 and final price as 21000 after GST units:1, Commodity:"Sofa" and unitPrice:20000', function () {
        assert.deepEqual(getGSTandFinalPrice(1, "Sofa", 20000), {
            gst: 1000,
            finalPrice: 21000
        });
    });
    it('should return GST as 560 and final price as 2560 after GST units:1, Commodity:"Perfume" and unitPrice:2000', function () {
        assert.deepEqual(getGSTandFinalPrice(1, "Perfume", 2000), {
            gst: 560,
            finalPrice: 2560
        });
    });
    it('should return GST as 900 and final price as 11800 after GST units:2, Commodity:"Mobile" and unitPrice:5000', function () {
        assert.deepEqual(getGSTandFinalPrice(2, "Mobile", 5000), {
            gst: 900,
            finalPrice: 11800
        });
    });
    it('should return error', function () {
        assert.equal(getGSTandFinalPrice(2, "noproduct", 5000), "Error :no Slab found for current commodity") ;
    });
});