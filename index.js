module.exports = function(content) {
    this.cacheable && this.cacheable();
    return 'GM_addStyle(' + JSON.stringify(content) + ')';
}
module.exports.seperable = true;
