$(document).ready(function() {
    //BUSINESS LOGIC
    function placeOrder(size, crust, toppings) {
        this.Psize = size;
        this.CrSize = crust;
        this.ToSize = toppings;
    }
    placeOrder.prototype.summary = function() {
        return "pizzasize: " + this.Psize + ", crust:" + this.CrSize + ", toppings:" + this.ToSize;
    };
    //USER INTERFACE
    $("#sb").click(function() {
        $("#myForm").submit(); // Submit the form
    
        var size = $(this).find('#sizeSelector').val();
        var crust = $('#crustSelector').val();
        console.log(size);
        var toppings = [];
        $("input[type=checkbox]:checked").each(function() {
            toppings.push($(this).val());
        });
        console.log(toppings);
        var newOrder = new placeOrder(size, crust, toppings);
        console.log(newOrder);
        $('ul#placeorderlist').append("<li>" + newOrder.summary() + "</li>");
        var anotherTopping = 0;
        for (var i = 0; i < toppings.length; i++) {
            anotherTopping += parseInt(toppings[i]);
        }
        var finalTotal = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
       alert(finalTotal);
        $("#total").append("<p>"+finalTotal+"</p>");
    });
    $('#img').click(function() {
        alert("the delivery cost is 2000");
        var a = prompt("enter ur location");
        alert("your order will be delivered to" + a);
    });
 });