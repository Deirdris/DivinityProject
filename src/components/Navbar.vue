<template>
    <div id="nav">
      <nav>
        <div id="logo">
          <router-link to="/" tag="img" src="@/assets/logo.png" alt="logo"/>
        </div>
        <ul>
          <li><router-link to="/heroes">Heroes</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link id="gallery" to="/gallery">Gallery</router-link></li>
        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }

</script>

<style scoped lang="scss">

    #nav{
      background: black;
    }
    a{
      text-decoration: none;
      color: white;
      font-family: 'Dosis', sans-serif;
      background: black;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 17px;

      &:hover{
        background: #450d0d;
      }
      &:active{
        background: lighten(#450d0d,10%);
      }
    }
    #gallery{
      background: #450d0d;
      border-radius: 50px;
      
      &:hover{
        background: lighten(#450d0d,10%);
      }
    }
    nav{
      width: 80%;
      margin: auto;
      padding: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul{
        display: flex;
        justify-content: space-between;
        flex: 1;
        margin: 0;
      }
      li{
        list-style-type: none;
      }

      #logo{
        flex: 2;
      }
    }


</style>