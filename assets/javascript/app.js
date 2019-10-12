//create a click function for every character
//have the character clicked upon move to the your character section
//have the other three characters move to the enemies avaialble to attack section
//when clicked, , move the enemy chosen to the defender section
//when click attack button, substract HP lost from both your character and defender
//Each character has 3 attributes, health points, attack power, and counter attack power
//Each time your character attacks, their attack power increases by base attack power
//example, if base attack is 6, each attack will increase by 6 (12,18,24 and so on)
//The enemy character only has a counter attack, which never changes.
//The health points , attack power, and counter attack power must be different for each character
$(document).ready(function () {
    //New Approach for creating constructor
    function Char(name, healthPoints, attackPower, counterAttackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }
    var char1 = new Char('Obi-Wan-Kenobi', '120', '6', '15');
    console.log(char1);

    var char2 = new Char('Luke Skywalker', '100', '8', '12');
    console.log(char2);

    var char3 = new Char('Darth Sidious', '150', '5', '18');
    console.log(char3);

    var char4 = new Char('Darth Maul', '100', '8', '12');
    console.log(char4);

    //Click function for selecting characters
    $('.obi-wan').on('click', function () {
        $('.obi-wan').remove();
        $('.your-character').append('<img id="obi-wan" src="./assets/images/obiWan.png">');
    });

    $('.luke').on('click', function () {
        $('.luke').remove();
        $('.your-character').append('<img id="luke" src="assets/images/luke.png">');
    });

    $('.sidious').on('click', function () {
        $('.sidious').remove();
        $('.your-character').append('<img id="sidious" src="./assets/images/sidious.png">');
    });

    $('.maul').on('click', function () {
        $('.maul').remove();
        $('.your-character').append('<img id="maul" src="assets/images/maul.png">');
    });




});


