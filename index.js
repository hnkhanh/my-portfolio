$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy({
    scrollOffset: 0,
  });
  

  //scroll to top button
  let topBtn = $('.scroll-btn');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      topBtn.addClass('show');
    } else {
      topBtn.removeClass('show');
    }
  });
  topBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  // start carrousel
  $('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  duration: 200,
 });
 // move next carousel
 $('.next').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });
 // move prev carousel
 $('.previous').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });
 $(document).ready(function(){
   $('.sidenav').sidenav();
 });
 
 $('.carousel.certs').carousel({
  duration: 50,
  numVisible: 3,
  shift: 250,
  dist: -100,
  indicators: true,
})

   //skill icons spin animation
  $('.skill-item').mouseover(function(){
    $(this).addClass('flipInY').one('animationend', function(){
      $(this).removeClass('flipInY')
    });
  })
  
    $('select').formSelect();
  
    function changedValue() {
      let text = document.getElementById("message");
      let textValue = text.value;
      let row = text.getAttribute('rows');
      let lines = textValue.split(/\r|\r\n|\n/);
      let count = lines.length;
      if (count >= row) {
          text.style.overflowY = "scroll";
      }
      else if (count < row) {
          text.style.overflowY = "hidden";
      }
  }

  $(".submit").click(function(event){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let y = window.scrollY;
      if(name.length == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your name can\'t be blank',
          footer: 'Your message was not sent',
        });
        return false;
      }
      if(email.length == 0 || 
        !email.match(/^[A-Za-z\._\-[0-9]{1,}[@][A-Za-z]{1,}[\.][a-z]{2,4}$/)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please check your email address',
            footer: ' Your message was not sent',
          })
        return false;
      }
      if(message.length == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your message can\'t be blank',
          footer: ' Your message was not sent',
        })
        return false;
      }
      Swal.fire({
        title: 'Sweet!',
        text: 'Your message was sent',
        imageUrl: 'https://media.giphy.com/media/uWlpPGquhGZNFzY90z/giphy.gif',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
        confirmButtonText: `Gotcha!`,
      })
      
  });
});
