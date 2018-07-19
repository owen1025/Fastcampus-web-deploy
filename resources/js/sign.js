$(document).ready(function() {
    $('#signBtn').click(function() {
        $.ajax({
            url         : BASE_URL + 'user/login',
            type        : 'POST',
            data        : {
                email   : $('input[type="email"]').val(),
                password: $('input[type="password"]').val(),
            },
            success     : function() {
                alert('Login success');
            },
            error       : function() {
                alert('Ajax Error');
            },
        });
    });

    $('#joinBtn').click(function() {
        $.ajax({
            url         : BASE_URL + 'user/join',
            type        : 'POST',
            data        : {
                email   : $('input[type="email"]').val(),
                password: $('input[type="password"]').val(),
            },
            success     : function() {
                alert('Join success');
            },
            error       : function() {
                alert('Ajax Error');
            },
        });
    });
});