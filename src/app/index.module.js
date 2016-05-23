(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Sample
            'app.sample',

            // Login
            'app.pages.auth.login',

            // Login-v2
            'app.pages.auth.login-v2',

            // Register
            'app.pages.auth.register',

            // Register
            'app.pages.auth.reset-password',
        ]);
})();
