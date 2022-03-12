function Item(code,description,uPrice,qty) {
    var Code=code;
    var Description=description;
    var UPrice=uPrice;
    var Qty=qty;


    this.getItemCode=function () {
        return Code;
    }
    this.getItemDescription=function () {
        return Description;
    }
    this.getItemQty=function () {
        return Qty;
    }
    this.getItemPrice=function (){
        return UPrice;
    }
    this.setItemCode=function (code) {
        Code=code;
    }
    this.setItemDescription=function (description) {
        Description=description;
    }
    this.setItemQty=function (qty) {
        Qty=qty;
    }
    this.setItemPrice=function (uPrice){
        UPrice=uPrice;
    }
}