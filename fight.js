
var fighter1 = {
  hp: 100,
  strength: 12,
  attack: function(min = 0, strength) {
      return Math.floor(Math.random() * (strength - min)) + min;
  }
}

var fighter2 = {
  hp: 100,
  strength: 12,
  attack: function(min = 0, strength) {
      return Math.floor(Math.random() * (strength - min)) + min;
  }
}
// var f1counterAtk = {
//   critChance = function(min = 0, strength) {
//     let chance =  Math.floor(Math.random() * (5 - 2)) + 2;
//           if(chance===2){
//             fighter1.strength * 2.5;
//           }
//           return chance;
//   }
// }
// var f2counterAtk = {
//   critChance = function(min = 0, strength) {
//     let chance =  Math.floor(Math.random() * (5 - 2)) + 2;
//           if(chance===2){
//             fighter2.strength * 2.5;
//           }
//           return chance;
//   }
// }
// var f1Atk = {
//    skills = [Straight-Punch, Uppercut, Right-Hook, Left-Hook, Liver-blow],
//     attacks: function(){
//       let atk = Math.floor(Math.random() * (5 - 1)) + 1;
//       return skills[atk];
//     }
//    }
//    var f2Atk = {
//     skill = [Straight-Punch, Uppercut, Right-Hook, Left-Hook, Liver-blow],
//      atkskill: function(){
//        let atk = Math.floor(Math.random() * (5 - 1)) + 1;
//        return  skill[stk];
//      }
//     }
var MannyAtks = {
  skills: ['Straight-Left-Punch', 'Left-Uppercut', 'Right-Hook', 'Overhand-Left-Punch', 'Body-Shot','Counter-Punch'],
  boxSkills: function() {
      let atk = Math.floor(Math.random() * this.skills.length);
      return this.skills[atk];
  }
};
var IppoAtks = {
  skills: ['Straight-Punch', 'Right-Uppercut', 'Right-Hook', 'Liver-Blow', 'Body-Shot','Counter-Punch','Dempsey-Roll'],
  boxSkills: function() {
      let atk = Math.floor(Math.random() * this.skills.length);
      return this.skills[atk];
  }
};

let f1CurrentHp = fighter1.hp;
let f2CurrentHp = fighter2.hp;
let fightOver = false; // 

console.log(`Here's our Main Event of the evening...\n`);
console.log(`\n12 Rounds of Boxing\n`);
console.log(`\nManny Pacquiao VS Ippo Makunochi\n`);
console.log(` `);

for (let index = 0; index < 12; index++) {
  let mannyRandomAtks = MannyAtks.boxSkills();
  let ippoRandomAtks = IppoAtks.boxSkills();

  setTimeout(function() {
      if (fightOver) return; // if true then end the setTimeount and for loop

      let round = index + 1;
      let f1AtkDamage = calculateDamage(fighter1);
      let f2AtkDamage = calculateDamage(fighter2);

      console.log(`Round ${round}`);

    if(firstToAtk()){

      if (isCriticalHit()) { //
        f1AtkDamage = Math.floor((f1AtkDamage*1.2)+10);  //  increase the damage for critical hit, in case of random damage is 0, add 10
            if(f1AtkDamage <=15){ //set a mininum damage for critical hit
              f1AtkDamage = fighter1.strength;
              f2CurrentHp -= f1AtkDamage;
                console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and does a damage of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
              }else{
              f2CurrentHp -= f1AtkDamage;
              console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and got a CRITICAL DAMAGE of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
              if (f2CurrentHp <= 0) {
                console.log(` `); 
                console.log(`Ippo is K.O. Manny Pacquiao WINS`);
                  fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                  return;
              }
            }
      
         } else {
            f2CurrentHp -= f1AtkDamage;
            if(f1AtkDamage === 0){
              console.log(`Manny attacks Ippo with a ${mannyRandomAtks} but Ippo dodges it. Causes ${f1AtkDamage} damage to Ippo's HP.\nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
            }else{
              console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and does a damage of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
            }
           
            if (f2CurrentHp <= 0) {
              console.log(` `);
              console.log(`Ippo is K.O. Manny Pacquiao WINS`);
              fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
              return;
            }
          }
              
                if (isCriticalHit2()) {
                  f2AtkDamage = Math.floor((f2AtkDamage*1.2)+10); // Double the damage for critical hit. in case of random damage is 0, add 10
                  if(f2AtkDamage <=15){  //set a mininum damage for critical hit
                    f2AtkDamage = fighter2.strength;
                    f1CurrentHp -= f2AtkDamage;
                      console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and does a damage of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                    }else{
                    f1CurrentHp -= f2AtkDamage;
                    console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and got a CRITICAL DAMAGE of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                    if (f2CurrentHp <= 0) {
                      console.log(` `); 
                      console.log(`Ippo is K.O. Manny Pacquiao WINS`);
                        fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                        return;
                    }
                  }
                  console.log(` `);
              } else {
                  f1CurrentHp -= f2AtkDamage;
                  if(f2AtkDamage === 0){
                    console.log(`Ippo attacks Manny with a ${ippoRandomAtks} but Manny dodges it. Causes ${f2AtkDamage} damage to Manny's HP. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                  }else{
                    console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and does a damage of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                  }
                  if (f1CurrentHp <= 0) {
                    console.log(` `);
                    console.log(`Manny is K.O. Ippo Makunochi WINS`);
                    fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                    return;
                  }
                  console.log(` `);
                }
    }else{
                
                if (isCriticalHit2()) {
                  f2AtkDamage = Math.floor((f2AtkDamage*1.2)+10) // Double the damage for critical hit, in case of random damage is 0, add 10
                  if(f2AtkDamage <=15){  //set a mininum damage for critical hit
                      f2AtkDamage = fighter2.strength;
                      f1CurrentHp -= f2AtkDamage;
                      console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and does a damage of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                    }else{
                      f2CurrentHp -= f1AtkDamage;
                      console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and got a CRITICAL DAMAGE of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                      if (f2CurrentHp <= 0) {
                        console.log(` `); 
                        console.log(`Ippo is K.O. Manny Pacquiao WINS`);
                          fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                          return;
                      }
                    }
               } else {
                  f1CurrentHp -= f2AtkDamage;
                  if(f2AtkDamage === 0){    //If attack is = 0, means evaded attack
                    console.log(`Ippo attacks Manny with a ${ippoRandomAtks} but Manny dodges it. Causes ${f2AtkDamage} damage to Manny's HP. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                  }else{
                    console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and does a damage of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                  }
                  if (f1CurrentHp <= 0) {
                    console.log(` `);
                    console.log(`Manny is K.O. Ippo Makunochi WINS`);
                    fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                    return;
                  }
                }
                if (isCriticalHit()) {
                  f1AtkDamage = Math.floor((f1AtkDamage*1.2)+10); //  Double the damage for critical hit, in case of random damage is 0, add 10
                  if(f1AtkDamage <=15){  //set a mininum damage for critical hit
                    f1AtkDamage = fighter1.strength;
                    f2CurrentHp -= f1AtkDamage;
                      console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and does a damage of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                    }else{
                    f2CurrentHp -= f1AtkDamage;
                    console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and got a CRITICAL DAMAGE of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                    if (f2CurrentHp <= 0) {
                      console.log(` `); 
                      console.log(`Ippo is K.O. Manny Pacquiao WINS`);
                        fightOver = true;// when one of the fighters' Hp is <=0, the loop is ended.
                        return;
                    }
                  }
                    console.log(` `);
                   } else {
                      f2CurrentHp -= f1AtkDamage;
                      if(f1AtkDamage === 0){  //If attack is = 0, means evaded attack
                        console.log(`Manny attacks Ippo with a ${mannyRandomAtks} but Ippo dodges it. Causes ${f1AtkDamage} damage to Ippo's HP.\nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                      }else{
                        console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and does a damage of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);
                      }
                      if (f2CurrentHp <= 0) { //if the Hp of fighter 2 is less than or to 0, executed this 
                        console.log(` `); // 1 empty block
                        console.log(`Ippo is K.O. Manny Pacquiao WINS`);
                        fightOver = true; // when one of the fighters' Hp is <=0, the loop is ended.
                        return;
                      }
                      console.log(` `); // 1 empty block
                    }
            }

        // if (f2CurrentHp <= 0 && f1CurrentHp <= 0) {// if both fighters's 
        //     console.log(`Both Fighters are K.O. It's a draw!`);
        //     fightOver = true; 
        //     return;
        //     }
      if (round === 12) {
          if (f1CurrentHp < f2CurrentHp) {
              console.log(` `);
              console.log(`Ippo Makunochi WINS`);
          } else {
              console.log(` `);
              console.log(`Manny Pacquiao WINS`);
          }
      }
  }, index * 5000); // Delay each round by 5 seconds
}

function calculateDamage(fighter) {
  let baseDamage = fighter.attack(0, fighter.strength);
  return baseDamage;
}

function isCriticalHit() {
  // 30% chance of critical hit
  return Math.random() <= 0.3;
}

function isCriticalHit2() {
  // 30% chance of critical hit
  return Math.random() <= 0.3;
}
function firstToAtk() {
  // 50% chance of who's first to attack
  return Math.random() <= 0.5;
}