
    define('jquery', [], function () { return jQuery; });
    define('jquery-private', [], function () { return jQuery; });

    _.assignIn = _.assign;
    _.pickBy = _.pick;

    define('lodash', [], function () { return _; });

    define('backbone', [], function () { return Backbone; });
    define('underscore', [], function () { return _; });

    define('tpl', [], function () { return _.template; });

    return require('converse');
}));
