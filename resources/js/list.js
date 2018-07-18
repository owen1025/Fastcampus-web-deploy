$(document).ready(function() {
    $('#mainBtn').click(function() {
        $.ajax({
            url         : BASE_URL + 'list',
            type        : 'GET',
            success     : function(data) {
                var $albumCardOriginData = $('#albumCardTemp').html();
                
                data.forEach(function(val, index) {
                    $albumAppendCardData = $($albumCardOriginData);
                    $albumAppendCardData.css('display', 'block');
                    
                    $albumAppendCardData.find('.card-text').html(val.description);
                    $albumAppendCardData.find('img').attr('src', val.imgUrl);

                    $($albumAppendCardData.html()).appendTo('#albumCardRow');
                });
            },
            error       : function() {
                alert('Ajax Error');
            }
        });
    });
});