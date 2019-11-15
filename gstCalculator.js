const productsUnderGSTSlabs = require("./productUnderGSTSlabs.json");

function getGSTandFinalPrice(units, commodity, unitPrice) {
    try {
        const slab = getProductSlab(commodity);
        const gst = calculatGST(slab, unitPrice);
        const finalPrice = getFinalPriceafterGST(unitPrice, gst, units);
        return {
            gst,
            finalPrice
        }
    } catch (e) {
        return "Error :" + e;
    }
}

function getProductSlab(commodity) {
    const commodityCategory = productsUnderGSTSlabs.find((productUnderGST) => {
        return productUnderGST.Products.indexOf(commodity) != -1;
    });
    if (!commodityCategory) throw "no Slab found for current commodity";

    return commodityCategory.Slab;
}

function calculatGST(slab, unitPrice) {
    const gst = (unitPrice * slab) / 100;
    return gst;
}

function getFinalPriceafterGST(unitPrice, gst, units) {
    const finalPrice = (unitPrice * units) + (gst * units);
    return finalPrice;

}

module.exports = getGSTandFinalPrice;   
