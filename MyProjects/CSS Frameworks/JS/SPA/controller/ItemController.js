clearValidationLabels();

$("#btnSaveUpdateItem").click(function () {
    let itemCode = $("#txtCode").val();
    let itemDesc = $("#txtDescription").val();
    let itemUnitPrice = $("#txtUnitPrice").val();
    let itemQuantity = $("#txtQuantity").val();

    if(itemCode==null && itemDesc==null && itemUnitPrice==null && itemQuantity==null){
        alert("Please Input Data Correctly To Continue..");
        return;
    }
    let index=isExists(itemCode);
    if(index!=-1){
        alert("Item Updated");
        itemList[index].setItemDescription(itemDesc);
        itemList[index].setItemPrice(itemUnitPrice);
        itemList[index].setItemQty(itemQuantity);
        loadAllItems()
        getTableData();
        clearItemFields();
        return;
    }
    //Save to customerList Array
    let i1=new Item(itemCode,itemDesc,itemUnitPrice,itemQuantity);
    itemList.push(i1);
    loadAllItems();
    getTableData();
    clearItemFields();
    alert("Saved Item Successfully")
});

//Search Customer
$("#btnSearchItem").click(function () {
    let id=$("#searchItem").val();
    let index=isExists(id);
    if(index!=-1){
        $("#txtCode").val(itemList[index].getItemCode());
        $("#txtDescription").val(itemList[index].getItemDescription());
        $("#txtUnitPrice").val(itemList[index].getItemPrice());
        $("#txtQuantity").val(itemList[index].getItemQty());
        return;
    }
    alert("Invalid ID");
    clearItemFields();
});

//Delete Function ..
$("#btnDeleteItem").click(function () {
    let itemCode=$("#txtCode").val();
    let id=isExists(itemCode);
    if(id!=-1){
        itemList.splice(id,1);
        loadAllItems();
        alert("Item "+itemCode+" Deleted");
        clearItemFields();
        return;
    }
    alert("No Item Found");
});

function clearItemFields() {
    $("#txtCode").val('');
    $("#txtDescription").val('');
    $("#txtUnitPrice").val('');
    $("#txtQuantity").val('');
    $("#searchItem").val('');
}

function isExists(id){
    let x=-1;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].getItemCode()==id) {
            x = i;
        }
    }
    return x;
}

function loadAllItems() {
    $("#itemTable>tr").remove();
    for(let i=0;i<itemList.length;i++){
        let itemCode=itemList[i].getItemCode();
        let itemDesc=itemList[i].getItemDescription();
        let itemPrice=itemList[i].getItemPrice();
        let itemQty=itemList[i].getItemQty();
        let row = `<tr><td>${itemCode}</td><td>${itemDesc}</td><td>${itemPrice}</td><td>${itemQty}</td></tr>`;
        $("#itemTable").append(row);
    }

}
function getTableData() {
    $("#itemTable>tr").off("click");
    $("#itemTable>tr").click(function(){
        let Row=$(this);
        let itemCode = $(Row.children().get(0)).text();
        let itemDesc = $(Row.children().get(1)).text();
        let itemPrice = $(Row.children().get(2)).text();
        let itemQty = $(Row.children().get(3)).text();
        //set Item data to text field from table......................................................
        $("#txtCode").val(itemCode);
        $("#txtDescription").val(itemDesc);
        $("#txtUnitPrice").val(itemPrice);
        $("#txtQuantity").val(itemQty);
    });
}

function clearValidationLabels() {
    $("#validationTextCode").css('display','none');
    $("#validationTextDesc").css('display','none');
    $("#validationTextUnitPrice").css('display','none');
    $("#validationTextQuantity").css('display','none');
}


let RegExItemCode=/^(I)[0-9]{3,4}$/;
let RegExItemDesc=/^[A-z]{5,10}$/;
let RegExUnitPrice=/^[0-9]{1,9}(.)[0-9]{2}$/;
let RegExQty=/^[0-9]{1,9}$/;

$("#txtCode").keyup(function () {
    let input =$("#txtCode").val();
    if(RegExItemCode.test(input)){
        $("#txtCode").css('border','2px solid green');
        $("#validationTextCode").css('display','none');
        $("#btnSaveUpdateItem").prop("disabled",false);
    }
    else{
        $("#txtCode").css('border','2px solid red');
        $("#validationTextCode").css('display','block');
        $("#btnSaveUpdateItem").prop("disabled",true);
    }
});

$("#txtDescription").keyup(function () {
    let input =$("#txtDescription").val();
    if(RegExItemDesc.test(input)){
        $("#txtDescription").css('border','2px solid green');
        $("#validationTextDesc").css('display','none');
        $("#btnSaveUpdateItem").prop("disabled",false);
    }
    else{
        $("#txtDescription").css('border','2px solid red');
        $("#validationTextDesc").css('display','block');
        $("#btnSaveUpdateItem").prop("disabled",true);
    }
});


$("#txtUnitPrice").keyup(function () {
    let input =$("#txtUnitPrice").val();
    if(RegExUnitPrice.test(input)){
        $("#txtUnitPrice").css('border','2px solid green');
        $("#validationTextUnitPrice").css('display','none');
        $("#btnSaveUpdateItem").prop("disabled",false);

    }
    else{
        $("#txtUnitPrice").css('border','2px solid red');
        $("#validationTextUnitPrice").css('display','block');
        $("#btnSaveUpdateItem").prop("disabled",true);
    }
});


$("#txtQuantity").keyup(function () {
    let input =$("#txtQuantity").val();
    if(RegExQty.test(input)){
        $("#txtQuantity").css('border','2px solid green');
        $("#validationTextQuantity").css('display','none');
        $("#btnSaveUpdateItem").prop("disabled",false);
    }
    else{
        $("#txtQuantity").css('border','2px solid red');
        $("#validationTextQuantity").css('display','block');
        $("#btnSaveUpdateItem").prop("disabled",true);
    }
});