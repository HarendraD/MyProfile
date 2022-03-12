function Order(oId,oDate,CustID,price) {
    var OId=oId;
    var ODate=oDate;
    var OCustId=CustID;
    var OPrice=price;

    this.getOrderId=function () {
        return OId;
    }
    this.getOrderDate=function () {
        return ODate;
    }
    this.getOrder_CustomerID=function () {
        return OCustId;
    }
    this.getOrderPrice=function () {
        return OPrice;
    }

    this.setOrderId=function (oId) {
        OId=oId;
    }
    this.setOrderDate=function (oDate) {
        ODate=oDate;
    }
    this.setOrder_CustomerID=function (oCustID) {
        OCustId=oCustID;
    }
    this.setOrderPrice=function (price) {
        OPrice=price;
    }
}