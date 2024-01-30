class StreetFighter {
  constructor() {
      // No need for arguments here
  }

  startFight(fighter1, fighter2) {
      let f1CurrentHp = fighter1.hp;
      let f2CurrentHp = fighter2.hp;
      let fightOver = false;

      console.log(`Here's our Main Event of the evening...\n`);
      console.log(`\n12 Rounds of Boxing\n`);
      console.log(`\nManny Pacquiao VS Ippo Makunochi\n`);
      console.log(` `);

      for (let index = 0; index < 12; index++) {
          let mannyRandomAtks = fighter1.boxSkills();
          let ippoRandomAtks = fighter2.boxSkills();

          setTimeout(() => {
              if (fightOver) return;

              let round = index + 1;
              let f1AtkDamage = this.calculateDamage(fighter1);
              let f2AtkDamage = this.calculateDamage(fighter2);

              
              f1CurrentHp -= f2AtkDamage;// Update health points based on damage
              f2CurrentHp -= f1AtkDamage;

              console.log(`Round ${round}`);

              // Fight details for each round
              console.log(`Manny attacks Ippo with a ${mannyRandomAtks} and does a damage of ${f1AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);// Fight details for each round
              console.log(`Ippo attacks Manny with a ${ippoRandomAtks} and does a damage of ${f2AtkDamage}. \nManny's health: ${f1CurrentHp} \nIppo's health: ${f2CurrentHp}`);// Fight details for each round

              // Check if fight is over
              if (f1CurrentHp <= 0 || f2CurrentHp <= 0 || round === 12) {
                  fightOver = true;
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
  }

  calculateDamage(fighter) {
      let baseDamage = Math.floor(Math.random() * (fighter.strength - 0)) + 0;
      return baseDamage;
  }

  isCriticalHit() {
      // 30% chance of critical hit
      return Math.random() <= 0.3;
  }

  isCriticalHit2() {
      // 30% chance of critical hit
      return Math.random() <= 0.3;
  }

  firstToAtk() {
      // 50% chance of who's first to attack
      return Math.random() <= 0.5;
  }
}

class Fighter extends StreetFighter {
  constructor(hp, strength, skills) {
      super();
      this.hp = hp;
      this.strength = strength;
      this.skills = skills;
  }

  boxSkills() {
      let atk = Math.floor(Math.random() * this.skills.length);
      return this.skills[atk];
  }
}

// Define fighters
const fighter1 = new Fighter(100, 12, ['Straight-Left-Punch', 'Left-Uppercut', 'Right-Hook', 'Overhand-Left-Punch', 'Body-Shot', 'Counter-Punch']);
const fighter2 = new Fighter(100, 12, ['Straight-Punch', 'Right-Uppercut', 'Right-Hook', 'Liver-Blow', 'Body-Shot', 'Counter-Punch', 'Dempsey-Roll']);

// Start the fight
const streetFight = new StreetFighter();
streetFight.startFight(fighter1, fighter2);
