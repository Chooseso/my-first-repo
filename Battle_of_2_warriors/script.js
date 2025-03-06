
// create a rounds function to simulate rounds 1 to 10
function rounds(warrior1, warrior2, attack){
    for(let i = 1; i<=10; i++){ /* Iterate 10 times to create a loop of rounds with 10 rounds */
        let thor_attack = attack(warrior1.strength) /* Store every random attack value Thor make */
        let zeus_attack = attack(warrior2.strength) /* Store every random attack value Zeus make */
        console.log(`= = = ROUND${i} = = =`) /* Display the Rounds */
        console.log(`${warrior1.name} attack ${warrior2.name} and does ${thor_attack} damage!`) /* Display thor's attack */
        warrior2.hp = warrior2.hp - thor_attack /* Subtract Thor's attack to the Zeus HP */
        console.log(`THOR'S HP: ${warrior1.hp} || ZEUS'S HP: ${warrior2.hp}`) /* Display Thor's HP and Zeus's HP */
        console.log(`${warrior2.name} attack ${warrior1.name} and does ${zeus_attack} damage!`) /* Display zeus's attack */
        warrior1.hp = warrior1.hp - zeus_attack /* Subtract Zeus's attack to the thor HP */
        console.log(`ZEUS'S HP: ${warrior2.hp} || THOR'S HP: ${warrior1.hp}`) /* Display Zeus's HP and Thor's HP */
        if(i===10 && warrior1.hp > warrior2.hp){ /* A conditional statement for Thor if he's hp is higher than zeus in round 10 */
            console.log("MATCH OVER: " + warrior1.name + " " + "WINS") /* Display Thor wins */
        }
        else if(i===10 && warrior2.hp > warrior1.hp){ /* A conditional statement for Zeus if he's hp is higher than thor in round 10 */
            console.log("MATCH OVER: " + warrior2.name + " " + "WINS") /* Display Zeus wins */
        }
        else if(i===10 && warrior1.hp === warrior2.hp ){ /* A conditional statement if Zeus and Thors hp has the same value in round 10 */
            console.log("MATCH OVER: " + "WE HAVE A DRAW") /* Display Draw */
        }
}
}

/* // Create attack function to generate random attack number by each warrior */
function attack(warrior_strength){
    /* Initialized a randomAttack Variable this will hold the random value produce by math.random multiply it by the respective strength by each warrior*/
    /* Used the Math.floor to round down decimal points value */
    let randomAttack = Math.floor(Math.random()*warrior_strength);
    return randomAttack /* Return the generated random value 0-12 */
}

/* // Creates Object of the warriors */
let warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: 0
}
let warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 12,
    attack: 0
}
/* // Invoke the rounds function to display the game */
rounds(warrior1,warrior2,attack)
