// List item
var divItem = '<ul>';
for(let i = 0; i<5; i++){
    divItem = divItem + '<li> <a href="https://www.balenciaga.com/en-en/skater-t-shirt-oversized-black-faded-739028TOVN21055.html" style="color: black; text-decoration: none;">' 
    + '<div class="item">' 
    +   '<img src="../img/itemimg.jpg" alt="">' 
    +   '<span>SKATER T-SHIRT OVERSIZED IN BLACK FADED</span> <br>'
    +   '<span style="font-size: 14px; font-weight: 400;">M - L - XL</span>'
    + '</div>' 
    + '</a> </li> ';
}
divItem += '</ul>';
document.getElementById('listItem').innerHTML = divItem;