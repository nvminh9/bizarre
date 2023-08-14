// List item
var divItem = '<ul>';
for(let i = 0; i<5; i++){
    divItem = divItem + '<li>' 
    + '<div class="item">' 
    +   '<img src="../img/itemimg.jpg" alt="">' 
    +   '<span>SKATER T-SHIRT OVERSIZED IN BLACK FADED</span> <br>'
    +   '<span style="font-size: 14px; font-weight: 400;">M - L - XL</span>'
    +   '</div>' 
    + '</li>';
}
divItem += '</ul>';
document.getElementById('listItem').innerHTML = divItem;