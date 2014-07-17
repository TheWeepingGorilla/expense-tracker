var Purchase = {
  quantity: 0,
  amount: 0,
  item: "",
  totalCost: function() {
    return this.amount * this.quantity;
  }
};


$(document).ready(function() {

  $('#form').submit(function(event) {

    var newPurchase = Object.create(Purchase);

    newPurchase.item = $('input#description').val();
    newPurchase.amount = parseInt($('input#amount').val());
    newPurchase.quantity = parseInt($('input#quantity').val());


    $('#result-table tr:last').after("<tr>" + "<td>" + newPurchase.item + "</td>"
                              + "<td>" + "$" + newPurchase.amount + "</td>"
                              + "<td>" + newPurchase.quantity + "</td>"
                              + "<td>" + "$" + newPurchase.totalCost() + "</td>"
                              + "</tr>");

    $('input#description').val("");
    $('input#amount').val("");
    $('input#quantity').val("");
    event.preventDefault();
  });
});
