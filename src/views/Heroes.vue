<template>
  <div class="heroes">
    <div id="background2">

      <div class="container">

        <div class="card" v-for="(hero, i) in heroes" v-bind:key="i" :style='{ display: i === activeCard ? "grid": ""}'>

          <div class="image">
           <img class="portrait" :src='require(`@/assets/${hero.src}`)' :alt='hero.name'>
          </div>

          <div class="data">

            <p>Name: {{ hero.name }}</p>
            <p>Specialization: {{ hero.specialization }}</p>
            <p>Age: {{ hero.age }}</p>
            <p>Job: {{ hero.job }}</p>

          </div>

          <div class="about">

            <p>{{hero.about}}</p>

          </div>

          <div class="left">
            <button v-on:click="activeCard--"><i class="fas fa-arrow-left"></i></button>
          </div>

          <div class="right">
            <button v-on:click="activeCard++"><i class="fas fa-arrow-right"></i></button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Heroes",

  data() {
    return {
      activeCard: 0,

      heroes: [
        {
          src: 'lohse.jpg',
          name: 'Lohse',
          age: 'Around 30',
          specialization: 'Enchanter',
          job: 'Musician',
          about: 'All my life I\'ve been a performer, a musician; beloved and celebrated by all. But I have a secret: I\'m also a playground for sprites and spirits and... worse.\n' +
              '              The voice that rings inside me now is darker than any that came before. Almost caused a bunch of my fans to rip each other to pieces...\n' +
              '              But you can trust me: I\'ve got this under control. Step one: Find out who - or what - is trying to take control of my mind. Step two: Make it sorry it ever tried.'
        },
        {
          src: 'sebille.jpg',
          name: 'Sebille',
          age: 'Not known',
          specialization: 'Assassin',
          job: 'Assassin',
          about: '"I used to be a slave, kept under the thumb of the Master: the bastard that made me hunt down my own kin.\n' +
              '              How did he do that, you ask? With the living scar you see on my cheek, this horror that takes no more than a song sung by Master dearest to control my very thoughts.\n' +
              '              But now the tables have turned.\n' +
              '              I broke my shackles. And when I finally find him, I will make the Master sing a very different kind of song..."'
        }
      ]
    }
  },

  methods: {
    // changeCard: function (n){
    //   //showCard(activeCard += n);
    //   if (n < 0) {n = this.heroes.length - 1}
    //   if (n > this.heroes.length - 1) {n = 0}
    //   this.activeCard = n;
    // }

  },
  watch: {
    activeCard(){
      if (this.activeCard < 0) {this.activeCard = this.heroes.length - 1}
      if (this.activeCard > this.heroes.length - 1) {this.activeCard = 0}
    }
  }
}

//var activeCard = 1;
//showCard(activeCard);

// function showCard(n) {
//   var cards = document.getElementsByClassName("card");
//
//   if (n > cards.length) {activeCard = 1}
//   if (n < 1) {activeCard = cards.length}
//
// console.log(activeCard);
//
//   for (var i = 0; i < cards.length; i++) {
//     cards[i].style.display = "none";
//   }
//
//   cards[activeCard-1].style.display = "grid";
//
// }
</script>

<style lang="scss">

  .heroes{


  }

  #background2{
    background: url("~@/assets/bg2.jpg");
    height: 87.2vh;
  }

  .container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card{
    height: 60%;
    width: 80%;
    background: #140404;
    border-radius: 10px;
    border: black solid 5px;
    //display: grid;
    display: none;
    grid-template-columns: 10% 40% 40% 10%;
    grid-template-rows: 45% auto 45%;
  }

  .image{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-end: 1;
    grid-row-start: 2;
    border-bottom: black solid 3px;
    border-left: black solid 3px;
    border-right: black solid 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    .portrait{

      border: #941f1f solid 2px;
      border-radius: 5px;
      height: 90%;
    }
  }

  .data{
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-end: 1;
    grid-row-start: 2;
    border-bottom: black solid 3px;
    border-right: black solid 3px;
    color: #941f1f;
    font-size: 20px;
    font-family: 'Dosis', sans-serif;
    padding-top: 19px;
    padding-left: 10px;
  }

  .about{
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-end: 2;
    grid-row-start: 4;
    border-left: black solid 3px;
    border-right: black solid 3px;
    color: #941f1f;
    font-size: 17px;
    font-family: 'Dosis', sans-serif;
    padding-top: 29px;
    padding-left: 10px;
  }

  .left{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    grid-row-start: 3;
    color: #941f1f;
    font-size: 27px;
    font-family: 'Dosis', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right{
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-end: 2;
    grid-row-start: 3;
    color: #941f1f;
    font-size: 27px;
    font-family: 'Dosis', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>