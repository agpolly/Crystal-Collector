//Declare global variables and character objects

//Character objects: Name, HP, Attack, CounterAttack, Location

//Choose character- Move everyone - click event

//Choose enemy- Move everyone - click event

//Attack. generate random numbers and calculate HP - Check for death and move if needed- click event on fight button

//Game over- reset button to start over

var goodGuys {

    goodGuy1 {
	Name: Harry Potter,
	HP: ???,
	Attack: ???,
	CounterAttack: ???,
	Location: characters
}

    goodGuy2 {
	Name: Ron Weasley,
	HP: ???,
	Attack: ???,
	CounterAttack: ???,
	Location: characters
}

    goodGuy3 {
	Name: Hermione Granger,
	HP: ???,
	Attack: ???,
	CounterAttack: ???,
	Location: charaters
}
};

var badGuys {
	badGuy1 {
		Name: Lord Voldemort,
		HP: ???,
		Attack: ???,
		CounterAttack: ???,
		Location: enemies
	}

		badGuy2 {
		Name: Dolores Umbridge,
		HP: ???,
		Attack: ???,
		CounterAttack: ???,
		Location: enemies
	}

		badGuy3 {
		Name: Bellatrix Lestrange,
		HP: ???,
		Attack: ???,
		CounterAttack: ???,
		Location: enemies
	}
};

$("goodGuys").click(function(){
    $("#choices").appendTo("#characters");;
});

$("badGuys").click(function(){
    $("#choices").appendTo("#enemies");;
});