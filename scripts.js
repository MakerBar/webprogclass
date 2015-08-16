$(function() {
    var subtotal = 0.0;

    function updateTotal(price) {
        subtotal += price;

        var tax = subtotal * .07;
        var total = subtotal + tax;

        //display the updated figures
        $('#subtotal').text('$' + (Math.round(subtotal * 100) / 100));
        $('#tax').text('$' + (Math.round(tax * 100) / 100));
        $('#total').text('$' + (Math.round(total * 100) / 100));
    }

    $('#products li').click(function(event) {

       //move the product into the shopping cart
       $('#cart').append(event.target);

        var price = parseFloat($(event.target).data('price'));

        updateTotal(price);
    });
});