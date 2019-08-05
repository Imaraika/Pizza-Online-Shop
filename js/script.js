$(document).ready(function() {
    //BUSINESS LOGIC
    function placeOrder(size, crust, toppings) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = toppings;
    }
    placeOrder.prototype.summary = function() {
        return "pizzasize: " + this.sizeChoice + ", crust:" + this.sizeCrust + ", toppings:" + this.sizeTopping;
    };
    //USER INTERFACE
    $("#submit").click(function() {
        var size = $('#sizeSelector').val();
        var crust = $('#crustSelector').val();
        var toppings = [];
        $("input[type=checkbox]:checked").each(function() {
            toppings.push($(this).val());
        });
        console.log(toppings);
        var newOrder = new placeOrder(size, crust, toppings);
        console.log(newOrder);
        $('ul#placeorderlist').append("<li>" + newOrder.summary() + "</li>");
        var anotherTopping = 0;
        for (var a = 0; a < toppings.length; a++) {
            anotherTopping += parseInt(toppings[a]);
        }
        var total = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
        console.log(total);
        $("#total").text(total);
    });
    $('#img').click(function() {
        alert("the delivery cost is 2000");
        var a = prompt("enter ur location");
        alert("your order will be delivered to" + a);
    });
 });