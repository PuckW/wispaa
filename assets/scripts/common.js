(function ($) {
    // $('.video-player').videoPlayer();
    
    // $("img.lazyload").lazyload({
    //     effect : "fadeIn"
    // });
    
    // $(window).resize(function() {
    //     if ($('.side-navigation').is(':visible')) {
    //         var currentWidth = $('.side-navigation').width();
    //         var windowWidth = $(window).width();
    //         if (currentWidth > windowWidth && windowWidth > 300) {
    //             var newWidth = windowWidth - 20;
    //             $('.side-navigation').css('width', newWidth + 'px');
    //         }
    //     }
    // });
  
    // $('.forceLoginModal').loginModal({
    //     onLoad: function () {
    //         $("#loginForm").validateLoginForm();
    //         $("#signupForm").validateSignupForm();
    //     }
    // });
    

    /************************************************************************************
     *              FOLLOW AND UNFOLLOW ARTICLE PAGE JS
     ************************************************************************************/
    $('.followArticleBtn').followArticle({
        onSuccess: function (data, obj) {
           ($(obj).data('status') === 'follow') ? $(obj).html("Pick") : $(obj).html("Unpick");
            var message = ($(obj).data('status') === 'follow') ? 'Unpicked' : 'Picked';
            $(obj).toggleClass('selected')
            $.fn.General_ShowNotification({message: message + " successfully."});                 
        },
        beforeSend: function (obj) {
            $(obj).html('please wait...');
        },
        onError: function (obj, errorMessage) {
            $().General_ShowErrorMessage({message: errorMessage});
        }
    });

    $('#mypicks').click(function (e) {
        console.log('wopp woop');
        $('.follow').toggleClass('hide');
    });
    /************************************************************************************
     *              FOLLOW AND UNFOLLOW USER PROFILE PAGE JS
     ************************************************************************************/
    
    // $('.FollowProfileBlog').followBlog({
    //     onSuccess: function (data, obj) {
    //         var status = $(obj).data('status');
    //         if($(obj).hasClass('hasStar')) {
    //             (status == 'unfollow') ? $(obj).addClass('selected') : $(obj).removeClass('selected');
    //         }  
    //     },
    //     beforeSend: function (obj) {
    //         $(obj).find('.fa').addClass('fa-spin fa-spinner');
    //     },
    //     onError: function (obj, errorMessage) {
    //         $().General_ShowErrorMessage({message: errorMessage});
    //     },
    //     onComplete: function (obj) {
    //         $(obj).find('.fa').removeClass('fa-spin fa-spinner');
    //     }
    // });
    
    
    // $("#owl-thumbnails").owlCarousel({
    //     items: 2,
    //     itemsDesktop: [1199, 2],
    //     itemsDesktopSmall: [980, 1],
    //     itemsTablet: [768, 1],
    //     itemsMobile: [600, 1],
    //     pagination: true,
    //     navigation: true,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 1000,
    //     navigationText: [
    //         "<i class='fa fa-angle-left fa-2x'></i>",
    //         "<i class='fa fa-angle-right fa-2x'></i>"
    //     ]
    // });     
    
    // $('.shareIcons').SocialShare({
    //     onLoad: function (obj) {
    //         var title = obj.parents('div.article').find('.card__news-category').text();
    //         var url = obj.parents('div.article').find('a').attr('href');
    //         var content = obj.parents('div.article').find('.card__news-description').text();
    //         $('.rrssb-buttons').rrssb({
    //             title: title,
    //             url: url,
    //             description: content
    //         });
    //         setTimeout(function () {
    //             rrssbInit();
    //         }, 10);
    //     }
    // });
    
    //Contact form validation
    // $('#contactForm').validate({
    //     rules: {
    //         name: "required",
    //         email: "required",
    //         message: "required"
    //     },
    //     errorElement: "span",
    //     messages: {
    //         name: "Name cannot be blank.",
    //         email: "Email cannot be blank.",
    //         message: "Message cannot be blank."
    //     }
    // });
    
    /************************************************************************************
     *                  USER EDIT PROFILE PAGE JS
     ************************************************************************************/
    
    // $('.uploadFileBtn').uploadFile({
    //        onSuccess: function(data, obj){
    //             var resultJsonStr = JSON.stringify(data);
                
    //             var imgClass = $(obj).data('imgcls');
    //             $('.' + imgClass).css('background-image', 'url(' + data.url + ')');
                
    //             var fieldId = $(obj).data('id');
    //             $('#' + fieldId).val(resultJsonStr);
                
    //             $().General_ShowNotification({message: 'Image added successfully' });
    //         }
    // });
    
     /**
     * Update Social Post From Listing
     */
    // $('.editSocialPost').on('click', function (e) {
    //     e.preventDefault();
    //     var elem = $(this);
    //     var url = elem.data('url');
    //     var popup = window.open(url, '_blank', 'toolbar=no,scrollbars=yes,resizable=false,width=360,height=450');
    //     popup.focus();

    //     var intervalId = setInterval(function () {
    //         if (popup.closed) {
    //             clearInterval(intervalId);
    //             var socialId = elem.parents('a').data('id');
    //             if($('#updateSocial'+socialId).data('update') == '1') {
    //                 $().General_ShowNotification({message: 'Social Post(s) updated successfully.'});
    //             }  
    //         }
    //     }, 50);

    //     return;
    // });
    
}(jQuery));


    


