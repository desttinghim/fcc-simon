package;

import vue.Vue;

class Simon {
    public static var app : Vue;

    public static function main() {

        app = new Vue({
            el: '#app',
            data: {
                message: 'Hello World!',
            }
        });

    }
}
