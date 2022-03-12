clearValidation();

$("#btnSaveUpdateCust").click(function () {
    let customerID = $("#txtId").val();
    let customerName = $("#txtName").val();
    let customerAddress = $("#txtAddress").val();
    let customerContact = $("#txtContactNO").val();
    let emptyVal='';
    if(customerID==emptyVal && customerName==emptyVal && customerAddress==emptyVal && customerContact==emptyVal){
        $("#btnSaveUpdateCust").prop("disabled",true);
        alert("warning-Please Input Data Correctly To Continue..");
        return;
    }else {
        $("#btnSaveUpdateCust").prop("disabled",false);
    }
    let index=isExists(customerID);
    if(index!=-1){
        alert("Customer Updated");
        customerList[index].setCustomerName(customerName);
        customerList[index].setCustomerAddress(customerAddress);
        customerList[index].setCustomerContact(customerContact);
        loadAllCustomers()
        bindEvent();
        clearFieldsCus()
        return;
    }
    //Save to customerList Array
    let c1=new Customer(customerID,customerName,customerAddress,customerContact);
    customerList.push(c1);
    loadAllCustomers();
    bindEvent();
    clearFieldsCus();
    alert("Saved Customer Successfully")
});

//Search Customer
$("#btnSearchCust").click(function () {
    let id=$("#searchCust").val();
    let index=isExists(id);
    if(index!=-1){
        $("#txtId").val(customerList[index].getCustomerID());
        $("#txtName").val(customerList[index].getCustomerName());
        $("#txtAddress").val(customerList[index].getCustomerAddress());
        $("#txtContactNO").val(customerList[index].getCustomerContact());
        return;
    }
    alert("Invalid ID");
});

//Delete Function ..
$("#btnDeleteCust").click(function () {
    let customerID=$("#txtId").val();
    let id=isExists(customerID);
    if(id!=-1){
        customerList.splice(id,1);
        loadAllCustomers();
        alert("Customer "+customerID+" Deleted");
        clearFieldsCus();
        return;
    }
    alert("No Customer Found");
});

function clearFieldsCus() {
    $("#txtId").val('');
    $("#txtName").val('');
    $("#txtAddress").val('');
    $("#txtContactNO").val('');
    $("#searchCust").val('');
}

function isExists(id){
    let x=-1;
    for(let i=0;i<customerList.length;i++){
        if(customerList[i].getCustomerID()==id) {
            x = i;
        }
    }
    return x;
}

function loadAllCustomers() {
    $("#customerTable>tr").remove();
    for(let i=0;i<customerList.length;i++){
        let customerID=customerList[i].getCustomerID();
        let customerName=customerList[i].getCustomerName();
        let customerAddress=customerList[i].getCustomerAddress();
        let customerContact=customerList[i].getCustomerContact();
        let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerContact}</td></tr>`;
        $("#customerTable").append(row);
    }

}
function bindEvent() {
    $("#customerTable>tr").off("click");
    $("#customerTable>tr").click(function(){
        let Row=$(this);
        let CustomerID = $(Row.children().get(0)).text();
        let CustomerName = $(Row.children().get(1)).text();
        let CustomerAddress = $(Row.children().get(2)).text();
        let CustomerContact = $(Row.children().get(3)).text();
        //set customer data to text field from table......................................................
        $("#txtCusID").val(CustomerID);
        $("#txtCusName").val(CustomerName);
        $("#txtCusAddress").val(CustomerAddress);
        $("#txtCusTP").val(CustomerContact);
    });
}

function clearValidation() {
    $("#validationTextId").css('display','none');
    $("#validationTextName").css('display','none');
    $("#validationTextAddress").css('display','none');
    $("#validationTextContactNumber").css('display','none');
}


let RegExCustID=/^(C00-)[0-9]{3,4}$/;
let RegExCusName=/^[A-z]{5,10}$/;
let RegExCusAddress=/^[A-z]{4,100}$/;
let RegExCusContactNO=/^(07)[0-9]{8,9}$/;
//Validation-Customer.Id
$("#txtId").keyup(function () {
    let input =$("#txtId").val();
    if(RegExCustID.test(input)){
        $("#txtId").css('border','2px solid green');
        $("#validationTextId").css('display','none');
        $("#btnSaveUpdateCust").prop("disabled",false);
    }
    else{
        $("#txtId").css('border','2px solid red');
        $("#validationTextId").css('display','block');
        $("#btnSaveUpdateCust").prop("disabled",true);
    }
});
//Validation-Customer.Name
$("#txtName").keyup(function () {

    let input =$("#txtName").val();
    if(RegExCusName.test(input)){
        $("#txtName").css('border','2px solid green');
        $("#validationTextName").css('display','none');
        $("#btnSaveUpdateCust").prop("disabled",false);
    }
    else{
        $("#txtName").css('border','2px solid red');
        $("#validationTextName").css('display','block');
        $("#btnSaveUpdateCust").prop("disabled",true);
    }
});

//Validation-Customer.address
$("#txtAddress").keyup(function () {
    let input =$("#txtAddress").val();
    if(RegExCusAddress.test(input)){
        $("#txtAddress").css('border','2px solid green');
        $("#validationTextAddress").css('display','none');
        $("#btnSaveUpdateCust").prop("disabled",false);
    }
    else{
        $("#txtAddress").css('border','2px solid red');
        $("#validationTextAddress").css('display','block');
        $("#btnSaveUpdateCust").prop("disabled",true);
    }
});

//Validation-Customer.Contact-NO
$("#txtContactNO").keyup(function () {
    let input =$("#txtContactNO").val();
    if(RegExCusContactNO.test(input)){
        $("#txtContactNO").css('border','2px solid green');
        $("#validationTextTp").css('display','none');
        $("#btnSaveUpdateCust").prop("disabled",false);
    }
    else{
        $("#txtContactNO").css('border','2px solid red');
        $("#validationTextTp").css('display','block');
        $("#btnSaveUpdateCust").prop("disabled",true);
    }
});