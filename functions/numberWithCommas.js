module.exports = function (x) {
    console.log('+numberWithCommas.js')
    console.log('-numberWithCommas.js');
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};