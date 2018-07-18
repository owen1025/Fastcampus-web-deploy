$(document).ready(function() {
    $('#signBtn').click(function() {
        $.ajax({
            url         : BASE_URL + 'user/login',
            type        : 'POST',
            success     : function(data) {
                alert('Login success');
            },
            error       : function() {
                alert('Ajax Error');
            }
        });
    });
});