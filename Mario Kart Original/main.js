// Initializes items quantities
let totalItems = 0;
let shells = 0;
let mushrooms = 0;
let stars = 0;
let bullets = 0;
let bananas = 0;

// Checks for user input
document.getElementById('oneItemBtn').addEventListener('click', generateItem);

function generateItem() {
    // Gathers necessary information to generate item
    let racerPosition = document.getElementById('racerPosition').value;
    let randNum = Math.random();
    //Racer positions 1-6
    if(racerPosition<=6 && racerPosition>=1){
        if(randNum<=0.01) {
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/BulletBill.png\'>';
        } else if(randNum>0.01 && randNum<=0.05){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/GoldenMushroom.png\'>';
        } else if(randNum>0.05 && randNum<=0.20){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/Star.png\'>';
        } else if(randNum>0.20 && randNum<=0.55){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/GreenShell.png\'>';
        } else if(randNum>0.55){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/Banana.png\'>';
        }
    //Racer positions 7-12
    } else if (racerPosition<=12 && racerPosition>6){
        if(randNum<=0.05) {
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/Banana.png\'>';
        } else if(randNum>0.05 && randNum<=0.1){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/GreenShell.png\'>';
        } else if(randNum>0.1 && randNum<=0.35){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/Star.png\'>';
        } else if(randNum>0.35 && randNum<=0.7){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/GoldenMushroom.png\'>';
        } else if(randNum>0.7){
            document.getElementById('itemDisplay').innerHTML += '<img src = \'images/BulletBill.png\'>';
        }
    // Discounts racer positions greater than 12 or less than 1
    } else {
        alert('Invalid Racer Position');
    }
    totalItems += 1;
    document.getElementById('totalItems').innerHTML = totalItems;
}