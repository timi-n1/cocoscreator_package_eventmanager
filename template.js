/**
 * 程序自动生成，切勿手动修改
 */

(function () {

var DataMap = '##EventMapHoldPlace##';
var Evt = {};
for (var type in DataMap) {
    Evt[type] = {};
    for (var i = 0; i < DataMap[type].length; i++) {
        var key = DataMap[type][i];
        Evt[type][key] = type + '_' + key;
    }
}

window['cs'] = window['cs'] || {};
window['cs']['Evt'] = Evt;
if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = DataMap;
}

})();