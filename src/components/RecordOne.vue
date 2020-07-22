<template>
<div class="main">
    <h1>
        Little Milton Sings<br> &nbsp; Big  Blues
    </h1>
    <ul class="images">
        <li>
            <img class="static" src="../assets/milton-1-static.jpg" alt="an image of Little Milton playiong Guitar">
            <img class="active" src="../assets/milton.gif" alt="an image of Little Milton playiong Guitar">
        </li> 
        <li>
            <img class="static" src="../assets/milton-2-static.jpg" alt="an image of Little Milton playiong Guitar">
            <img class="active" src="../assets/milton.gif" alt="an image of Little Milton playiong Guitar">
        </li> 
        <li>
            <img class="static" src="../assets/milton-3-static.jpg" alt="an image of Little Milton playiong Guitar">
            <img class="active" src="../assets/milton.gif" alt="an image of Little Milton playiong Guitar">
        </li>   
    </ul>
    <div class="backCover">
        <h6 class="backCover-child">Following are the liner notes from the original album package</h6>
        <p class="backCover-child">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Repellat nisi dolore porro similique tempora libero natus? 
            Ipsum quam eligendi praesentium maiores quod recusandae hic ea 
            esse necessitatibus explicabo, iusto fugiat.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi dolore porro similique tempora 
            libero natus? Ipsum quam eligendi praesentium maiores 
            quod recusandae hic ea esse necessitatibus explicabo, 
            iusto fugiat. Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Repellat nisi dolore porro similique 
            tempora libero natus? Ipsum quam eligendi praesentium maiores 
            quod recusandae hic ea esse necessitatibus explicabo, iusto fugiat. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat 
            nisi dolore porro similique tempora libero natus? Ipsum quam eligendi 
            praesentium maiores quod recusandae hic ea esse necessitatibus explicabo, 
            iusto fugiat.</p>
        <h2 class="backCover-child">Little Milton Sings<br>Big<br> Blues</h2>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'RecordOne'
}
</script>

<style scoped>
   .main{
       background: url(../assets/bg.jpeg) repeat repeat;
       width: 100vw;
       height: auto;
   }
   h1{
       font-weight: 700;
       font-size: 14em;
       color: #F0ED00;
       letter-spacing: -10px;
       line-height: 200px;
       width: 1200px;
   }
   .images{
       display: flex;
       list-style: none;
   }
   li{
       margin-left: 1em;
   }
   .images img{
       height: 350px;
       margin: 3em 1em 10em 0;

   }

   .static{
       position: absolute;
   }
   .static:hover{
       opacity: 0;
   }

   .backCover{
       display: grid;
       grid-template-columns: 33% 33% 33%;
       background-color:lightskyblue;
       margin: 0 14em 14em 0;
       -webkit-box-shadow: 0px 25px 45px 0px rgba(0,0,0,0.41);
       -moz-box-shadow: 0px 25px 45px 0px rgba(0,0,0,0.41);
       box-shadow: 0px 25px 45px 0px rgba(0,0,0,0.41);
   }

   .backCover-child{
       padding: 3em;
       /* grid-column-start: 2;
       color: azure;
       font-weight: 700;
       font-size: 7em;
       line-height: 94px; */
   }
   .backCover h2{
       color: azure;
       font-weight: 700;
       font-size: 7em;
       line-height: 94px;
   }
   .backCover h6{
       text-transform: uppercase;
       
   }

</style>