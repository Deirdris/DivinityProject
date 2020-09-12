<template>
  <div class="home">

    <div id="background">

      <div id="text">

        <p>Divinity: Original Sin 2 is a RPG game made by Larian Studios.</p>
        <p>It takes place in world called Rivellon.</p>
        <p>You are one of many Godwoken.</p>
        <p>It's time for you to take place of current Gods and defeat the Void.</p>

      </div>

    </div>

  </div>
</template>

<script>


</script>

<style lang="scss">
.home {
  height: 100%;
  font-family: 'Dosis', sans-serif;
}

#background {
  background: url("~@/assets/bg.jpg");
  height: 86.8vh;
  display: grid;
  grid-template-rows: repeat(4,25%);
  grid-template-columns: repeat(5,20%);
  color: #450d0d;
  font-size: 18px;

  #text{
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}
</style>
