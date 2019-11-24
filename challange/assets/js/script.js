function changeBackgroundAnimation() {
    var backgroundCollection = [
        'assets/img/picture-1.jpeg',
        'assets/img/picture-2.jpeg',
        'assets/img/picture-3.jpeg'
    ]

    var picture = $('.login-section figure');
    var count = 1;
    var speed = 3;
    var interval = setInterval(setAnimation, speed * 1000);

    function setAnimation() {
        picture.addClass('passive');

        var timeout = setTimeout(nextPicture, 500);

        function nextPicture() {
            picture.css('background-image', 'url(' + backgroundCollection[count] + ')');
            picture.removeClass('passive');
            count++;

            if (count > backgroundCollection.length - 1) {
                count = 0;
            }

            clearTimeout(timeout);
        }
    }
}

function formValidate() {
    var button = $('.login-section form input[type=submit]');
    var usernameInput = $('.login-section form input[type=text]');
    var passwordInput = $('.login-section form input[type=password]');

    var username = 'yasin';
    var password = '123';

    button.on('click', function(e) {
        e.preventDefault();

        var userNameValue = usernameInput.val();
        var passwordValue = passwordInput.val();

        var status = (userNameValue == username && passwordValue == password);
        
        showMessage(status);
    });

    function showMessage(status) {
        var message = $('.login-section form .message');

        var failMessage = 'Kullanıcı adı veya şifre hatalı!';
        var successMessage = 'Giriş başarılı!';

        var failClass = 'fail';
        var successClass = 'success';

        message.text( status ? successMessage : failMessage );
        message.addClass('active').addClass( status ? successClass : failClass );

        var timeout = setTimeout(hideMessage, 2000);

        function hideMessage() {
            message.removeClass('active').removeClass(failClass).removeClass(successClass);
            clearTimeout(timeout);
        }
    }
}

function steakCook() {
    var steak = $('.login-section form .logo svg.steak');
    var steakBackground = $('.login-section form .logo-background');

    steakBackground.on('mousemove', function(e) {
        var w = $(this).width();
        var mX = e.pageX;
        var mY = e.pageY;
        var distance = calculateDistance($(this), mX, mY);
        var status = (1 / (w/2)) * distance;
        
        steak.css('opacity', status);
        console.log('status: ', status);
    });

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }
}

steakCook();

formValidate();

changeBackgroundAnimation();