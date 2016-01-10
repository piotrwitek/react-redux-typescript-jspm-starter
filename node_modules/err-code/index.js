'use strict';

function createError(msg, code, props) {
    var err =  msg instanceof Error ? msg : new Error(msg);
    var key;

    if (code != null) {
        err.code = code;
    }

    if (props) {
        for (key in props) {
            err[key] = props[key];
        }
    }

    return err;
}

module.exports = createError;
