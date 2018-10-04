function showItems(){
    var purchase = document.getElementById('purchase');
    alert(purchase);
    var items = purchase.getElementsByTagName('*');
    alert(items.length);
};
showItems();
