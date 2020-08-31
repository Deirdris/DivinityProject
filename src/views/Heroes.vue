<template>
  <div class="heroes">
    <div id="background2">

      <div class="container">

        <div id="card">

          <div class="image">
           <img class="portrait" src="../assets/lohse.jpg" alt="lohse">
          </div>

          <div class="data">

            <p>Name: Lohse</p>
            <p>Specialization: Enchanter</p>
            <p>Age: Around 30</p>
            <p>Job: Musician</p>

          </div>

          <div class="about">

            <p>All my life I've been a performer, a musician; beloved and celebrated by all. But I have a secret: I'm also a playground for sprites and spirits and... worse.
              The voice that rings inside me now is darker than any that came before. Almost caused a bunch of my fans to rip each other to pieces...
              But you can trust me: I've got this under control. Step one: Find out who - or what - is trying to take control of my mind. Step two: Make it sorry it ever tried.</p>

          </div>

          <div class="left">
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="right">
            <i class="fas fa-arrow-right"></i>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>

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

  #card{
    height: 60%;
    width: 80%;
    background: #140404;
    border-radius: 10px;
    border: black solid 5px;
    display: grid;
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