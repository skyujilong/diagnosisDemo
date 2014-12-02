/**
 * Created by lsc on 2014/12/1.
 */
define(['jquery', 'q'], function ($, Q) {
    var requestData = function (opt, self) {
        return Q.promise(function (resolve, reject, notify) {
            $.ajax({
                url: opt.url,
                data: opt.data || {},
                dataType: 'json',
                type: opt.type || 'get',
                success: function (data) {
                    resolve.apply(self || null, arguments);
                },
                error: function () {
                    reject.apply(self || null, arguments);
                }
            });
        });
    };
    return requestData;
});