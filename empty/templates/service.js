/**
 * 后端服务访问
 * @fileoverview <%= module_name %>/<%= submodule_name %> <%= module_description %>/<%= submodule_description %>
 * @author: <%= username %> <<%= email %>>
 * @date: <%= date %>
 */
define('<%= namespace %>:js/<%= module_name %>/services/<%= submodule_name %>.js', function(require, exports, module) {
    'use strict';

    var util = require('common:js/util.js');

    /**
     *
     * @param {} 
     */
    function get(id){
        return util.post('api', { id: id });
    }

    module.exports = {
        get: get
    };
});
