var new_bread_quantity,bread_sold;
var new_unga_quantity, unga_sold;
var  new_soda_quantity, soda_sold;
function bread(){

  new_bread_quantity = parseInt(document.getElementById('bread_amount').value);
  bread_sold = parseInt(document.getElementById('bread_sold').value);
  var new_value = (new_bread_quantity - bread_sold);
  document.getElementById('bread_amount').value = new_value;
  document.getElementById('bread_sold').value =0;
  // var product_name = document.getElementById('bread').value;



  if((new_value <= 50) || (new_bread_quantity <= 50) ){
    alert("Item need Restocking!!");
  update_bread_stock.innerHTML = "Update stock of this item";
    // update_bread_stock.innerHTML = ("you need to update stock of").concat(product_name);
    $("#notice").show();
    $("#bread").css("background-color", "red");
      }
      else {
        // $("#update_bread_stock").hide();
        $("#notice").show();
        update_bread_stock.innerHTML = "Enough stock";
         $("#bread").css("background-color", "blue");
      }
}


function unga(){

  new_unga_quantity = parseInt(document.getElementById('unga_amount').value);
  unga_sold = parseInt(document.getElementById('unga_sold').value);
  var new_value = (new_unga_quantity - unga_sold);
  document.getElementById('unga_amount').value = (new_unga_quantity - unga_sold);
  document.getElementById('unga_sold').value =0;

  if((new_value <= 50) || (new_unga_quantity <= 50) ){
    newunga= parseInt(document.getElementById('unga_amount').value);
    alert("Unga need Restocking!!");
    update_unga_stock.innerHTML = "You need to update stock of this item";
    $("#notice").show();
    $("#unga").css("background-color", "red");
      }
      else {
        update_unga_stock.innerHTML = " Enough stock";
         $("#unga").css("background-color", "blue");
        $("#notice").show();
      }
}

function soda(){

  new_soda_quantity = parseInt(document.getElementById('soda_amount').value);
  soda_sold = parseInt(document.getElementById('soda_sold').value);
  var new_value = (new_soda_quantity - soda_sold);
  document.getElementById('soda_amount').value = (new_soda_quantity - soda_sold);
  document.getElementById('soda_sold').value =0;

  if((new_value <= 50) || (new_soda_quantity <= 50) ){
    alert("Sodas need Restocking!!");
    update_soda_stock.innerHTML = "Update stock of this item";
    $("#notice").show();
    $("#soda").css("background-color", "red");
      }
      else {
        update_soda_stock.innerHTML = "Enough stock";
         $("#soda").css("background-color", "red");
        $("#notice").show();
      }
}

function addMoreItems(){


  $("#products").append(

    '<tr>'+
      '<td>'+
      '  <button type="button" contenteditable="true" id="bread" onclick="bread();" >Enter Item</button>'+
      '<button type="button" id="delete1" onclick="deleteRow(this)"><span id="delete">x</span></button>'+

      '</td>'+'<td>'+  ' <input type="number" contenteditable="true" id="bread_amount">'+  '  </td>'+
      '<td>'+

        '<input type="number" contenteditable="true" id="bread_sold">'+
      '</td>'+
      '<td>'+
      '  <label for="update1" id="update_bread_stock"></label>'+
      '</td>'+

    '</tr>'

  );

}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("products").deleteRow(i);
}
