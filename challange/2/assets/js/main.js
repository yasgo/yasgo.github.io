var mainFunction =
{
    elements: {

        testElement: ".test-element"

    },

    testValue: null,

    init: function () {

        //$("aside ul").mCustomScrollbar();

        $(document).on('keyup', function(e){
            var ENTER = 13;
            if(e.keyCode == ENTER) {
                var message = $('#message').val();
                addMessage(message);
                $('#message').val('')
            }
        });

        function addMessage(message) {
            var item = getMessageItem(message);
            var container = $('#message-list');
            container.append(item);
            container.stop().animate({scrollTop: container.height()}, 500, 'swing');
        }

        function getMessageItem(message) {
            return '<li class="friend"><p>' + message + '</p></li>'
        }

    }

};

$(document).ready(mainFunction.init);