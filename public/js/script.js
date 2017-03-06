$(function() {
    $(".button-collapse").sideNav();
     $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        $('#contactform')[0].reset();
        $('#submitButtonContact').removeClass('disabled');
      }
    }
  );
      
    $('.slider').slider({indicators: false});
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    var scroll_start = 0;
    var startchange = $('nav');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > $('#hero').height()-1) {
            $('nav').css('background-color', 'rgba(121,67,27,0.9)');
        }
        else {
            $('nav').css('background-color', 'transparent');
        }
    });
});


$('.collapsible-header').click(function(){
  $(this).children('a.secondary-content').children('i').toggleText('keyboard_arrow_down', 'keyboard_arrow_up');
})

$('#contact').submit(function(event){
    $('#submitButtonContact').addClass('disabled')
    event.preventDefault()
    var subjectStr = $('#first_name').val()+' '+$('#last_name').val()+" - "+$('#email').val();
    $.post('/sendEmail',{fromEmail:'webmaster',subject:subjectStr,message:$('#textarea1').val()},function(data){
        console.log(data);
        $('#emailModal').modal('open');
    })
})
$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};