function Customer(id,name,address,contact) {
    var custId=id;
    var custName=name;
    var custAddress=address;
    var custContact=contact;

    this.getCustomerID=function () {
        return custId;
    }
    this.getCustomerName=function () {
        return custName;
    }
    this.getCustomerAddress=function () {
        return custAddress;
    }
    this.getCustomerContact=function (){
        return custContact;
    }
    this.setCustomerID=function (id) {
        custId=id;
    }
    this.setCustomerName=function (name) {
        custName=name;
    }
    this.setCustomerAddress=function (address) {
        custAddress=address;
    }
    this.setCustomerContact=function (contact){
        custContact=contact;
    }
}