/*! copyright: sofish@me.com https://github.com/sofish/storage.js */
(function($){

    // you need the line below when the file hosted on different sub-domain
    // document.domain = 'example.com';
    // and please uncomment and set it to your own as well as on storage.html

    if(typeof window.localStorage == 'undefined'){
        var iframe = $('<iframe style="width:0;height:0;" frameBorder="0"></iframe>'),
            i = 0,
            ret = {};

        iframe.on('load', function(e){
            var context = this.contentWindow.localStorage;

            ret['get'] = context.getItem;
            ret['set'] = context.setItem;
            ret['clear'] = context.clear;
        });

        // TODO: remember to set a right path to `iframe.php`
        iframe.attr('src', './storage.php');
        $('body').append(iframe);
    }

    function machine(){

        if(typeof window.localStorage == 'undefined'){

            return {
                get: function(key){
                    return ret.get ? ret.get(key) : setTimeout(arguments.callee, 100)
                },
                set: function(key, value){
                    return ret.set ? ret.set(key, value) : setTimeout(arguments.callee, 100)
                },
                remove: function(key, value){
                    return ret.set ? ret.remove(key) : setTimeout(arguments.callee, 100)
                },
                clear: function(){
                    return ret.clear ? ret.clear() : setTimeout(arguments.callee, 100)
                }
            }
        }

        return {
            set: function(key, value){
                return localStorage.setItem(key, value)
            },
            get: function(key){
                return localStorage.getItem(key)
            },
            remove: function(key){
                return localStorage.removeItem(key)
            },
            clear: function(){
                return localStorage.clear()
            }
        }
    }

    $.fn.storage = machine();

})(jQuery)