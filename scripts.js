$(function() {
   $('#products li').click(function(e) {
       $('#cart').append(e.target);
   }) 
});