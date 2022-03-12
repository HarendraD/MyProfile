$("#btnFindCust").click(function () {
    let id=($("#txtCustID").val());
    if(id==''){
        alert("Please Add Data to Search");
        return;
    }
    for(let i=0;i<customerList.length;i++){
        if(customerList[i].getCustomerID()==id){
            $("#txtCName").val(customerList[i].getCustomerName());
            $("#txtCAddress").val(customerList[i].getCustomerAddress());
            $("#txtCContactNO").val(customerList[i].getCustomerContact());
        }else {
            alert("Invalid ID");
        }
    }
});
//Search item and fill
$("#btnFindItem").click(function () {
    let code=$("#ICode").val();
    if(code==''){
        alert("Please Add Data to Search");
        return;
    }
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].getItemCode()==code){
            $("#IDescription").val(itemList[i].getItemDescription());
            $("#IUnit-Price").val(itemList[i].getItemPrice());
            $("#QTY-On-Store").val(itemList[i].getItemQty());
        }
    }
});
//Add to Cart Table
let tempTotal=0;
$("#btnAddToTable").click(function () {
    //Logic For Add Item To Table.
    let total=$("#IUnit-Price").val() * $("#QTY-Need").val();
    let rowItem = `<tr><td>${$("#txtOrderID").val()}</td>
                        <td>${$("#txtCName").val()}</td>
                        <td>${$("#ICode").val()}</td>
                        <td>${$("#IDescription").val()}</td>
                        <td>${$("#IUnit-Price").val()}</td>
                        <td>${$("#QTY-Need").val()}</td>
                        <td>${total}</td></tr>`;
    $("#orderTable").append(rowItem);
    tempTotal=tempTotal+total;
    $("#subTotal").text(tempTotal+'/=');
    let newQtyOnHand=$("#QTY-On-Store").val()-$("#QTY-Need").val();
    $("#QTY-On-Store").val(newQtyOnHand);

});
//Save Order
$("#btnSaveOrder").click(function () {
    if($("#txtOrderID").val()==null && $("#txtCustID").val()==null && $("#ICode").val()==null && $("#QTY-Need").val()==null) {
        alert("Wrong Data Input")
    }else {
        let OrderId=$("#txtOrderId").val();
        let OrderDate=$("#orderDate").text();
        let OrderCustId=$("#txtCustID").val();
        let OrderPrice=tempTotal;
        if(isOrderIDExists(OrderId)){
            alert("Order ID Already Exists");
            return;
        }
        let o1=new Order(OrderId,OrderDate,OrderCustId,OrderPrice);
        orderList.push(o1);
        alert("Order Conformed")
    }


});
$("#btnClear").click(function () {
    $("#orderTable>tr").remove();
    $("#txtOrderID").val('');
    $("#orderDate").val('');
    $("#txtCustID").val('');
    $("#txtCName").val('');
    $("#txtCAddress").val('');
    $("#txtCContactNO").val('');
    $("#ICode").val('');
    $("#IDescription").val('');
    $("#IUnit-Price").val('');
    $("#QTY-On-Store").val('');
    $("#QTY-Need").val('');
    $("#subTotal").text('00/=');

});

function isOrderIDExists(oId){
    for(let i=0;i<orderList.length;i++) {
        if(orderList[i].getOrderId()==oId){
            return true;
        }
        else{
            return false;
        }
    }
}



let RegExQtyNeed=/^[0-9]{2,}$/;
let RegExItemId=/^(I)[0-9]{3,4}$/;
let RegExCusId=/^(C00-)[0-9]{3,4}$/;
let RegExOrderId=/^(O)-[0-9]{3}$/;

$("#txtOrderID").keyup(function () {
    let txt =$("#txtOrderID").val();
    if(RegExOrderId.test(txt) && txt!=='') {
        $("#txtOrderId").css('border','2px solid green');
        $("#btnSaveOrder").prop("disabled",false);
        $("#btnAddToTable").prop("disabled",false);
    }
    else {
        $("#txtOrderId").css('border','2px solid red');
        $("#btnSaveOrder").prop("disabled",true);
        $("#btnAddToTable").prop("disabled",true);
    }
});



$("#txtCustID").keyup(function () {
    let txt =$("#txtCustID").val();
    if(RegExCusId.test(txt) && txt!==''){
        $("#txtCustID").css('border','2px solid green');
        $("#btnFindCust").prop("disabled",false);
        $("#btnAddToTable").prop("disabled",false);
    }
    else{
        $("#txtCustID").css('border','2px solid red');
        $("#btnFindCust").prop("disabled",true);
        $("#btnAddToTable").prop("disabled",true);

    }
});


$("#ICode").keyup(function () {
    let txt =$("#ICode").val();
    if(RegExItemId.test(txt) && txt!==''){
        $("#ICode").css('border','2px solid green');
        $("#btnFindItem").prop("disabled",false);
        $("#btnAddToTable").prop("disabled",false);
    }
    else{
        $("#ICode").css('border','2px solid red');
        $("#btnAddToTable").prop("disabled",true);
        $("#btnFindItem").prop("disabled",true);
    }
});

$("#QTY-Need").keyup(function () {
    let txt =$("#QTY-Need").val();
    if(RegExQtyNeed.test(txt) && txt!==''){
        $("#QTY-Need").css('border','2px solid green');
        $("#btnAddToTable").prop("disabled",false);
        $("#btnSaveOrder").prop("disabled",false);
    }
    else{
        $("#QTY-Need").css('border','2px solid red');
        $("#btnAddToTable").prop("disabled",true);
        $("#btnSaveOrder").prop("disabled",true);
    }
});

