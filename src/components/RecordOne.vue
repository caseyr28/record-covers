<template>
    <div class="main" roll="content">
        <div class="title-container">
            <h1 data-aos="fade-up" data-aos-duration="800">
                Little
            </h1>
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Milton
            </h1>
            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                Sings
            </h1>
            <h1 data-aos="fade-up" data-aos-duration="1400" data-aos-delay="350">
                Big Blues
            </h1>
        </div>
        <ul class="images" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
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
            <div class="back-content">
            <h6 class="backCover-child">Following are the liner notes from the original album package</h6>
            <p class="backCover-child has-dropcap" >He may not be a household name, but die-hard blues fans know Little Milton as a superb all-around electric bluesman -- a soulful singer, an evocative guitarist, an accomplished songwriter, and a skillful bandleader. He's often compared to the legendary B.B. King -- as well as Bobby "Blue" Bland -- for the way his signature style combines soul, blues, and R&B, a mixture that helped make him one of the biggest-selling bluesmen of the '60s (even if he's not as well-remembered as King). As time progressed, his music grew more and more orchestrated, with strings and horns galore. He maintained a steadily active recording career all the way from his 1953 debut on Sam Phillips' legendary Sun label, with his stunning longevity including notable stints at Chess (where he found his greatest commercial success), Stax, and Malaco.
James Milton Campbell was born September 7, 1934, in the small Delta town of Inverness, MS, and grew up in Greenville. (He would later legally drop the "James" after learning of a half-brother with the same name.) His father Big Milton, a farmer, was a local blues musician, and Milton also grew up listening to the Grand Ole Opry radio program. At age 12, he began playing the guitar and saved up money from odd jobs to buy his own instrument from a mail-order catalog. By 15, he was performing for pay in local clubs and bars, influenced chiefly by T-Bone Walker but also by proto-rock & roll jump blues shouters. He made a substantial impression on other area musicians, even getting a chance to back Sonny Boy Williamson II, and caught the attention of R&B great Ike Turner, who was doubling as a talent scout for Sam Phillips at Sun. Turner introduced the still-teenaged Little Milton to Phillips, who signed him to a contract in 1953. With Turner's band backing him, Milton's Sun sides tried a little bit of everything -- he hadn't developed a signature style as of yet, but he did have a boundless youthful energy that made these early recordings some of his most exciting and rewarding. Unfortunately, none of them were hits, and Milton's association with Sun was over by the end of 1954. He set about forming his own band, which waxed one single for the small Meteor label in 1957, before picking up and moving to St. Louis in 1958.</p>
            <h2 class="backCover-child">Little Milton Sings<br>Big<br> Blues</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Master #</th>
                            <th></th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14852</td>
                            <td>FEEL SO BAD**<span>(Sam Hopkins: CBS Unart Catelog Inc.–BMI)</span></td>
                            <td>4:04</td>
                        </tr>
                        <tr>
                            <td>14846</td>
                            <td>RECONSIDER, BABY*<span>(Sam Hopkins: CBS Unart Catelog Inc.–BMI)</span></td>
                            <td>3:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
</template>


<script>
export default {
    name: 'RecordOne',
}
</script>

<style scoped>
   .main{
       background: url(../assets/bg.jpeg) repeat repeat;
       display: grid;
       padding-top: 8em;
       grid-template-columns: 54% 20% 1fr;
   }

   .main::after{
       content: "";
       background: url(../assets/stickers.png) no-repeat;
       background-size: 150px;
       width: 100%;
       height: 100%;
       position: fixed;
       top: 30px;
       left: 88vw;

   }
   h1{
        font-weight: 700;
        font-size: calc(14px + (180 - 14) * ((100vw - 300px) / (1600 - 300)));
        line-height: calc(14px + (140 - 14) * ((100vw - 300px) / (1600 - 300)));
        color: #F0ED00;
        letter-spacing: calc(1px + (-8 - 1) * ((100vw - 300px) / (1600 - 300)));
        margin: 0;

   }
   .title-container{
        position: fixed;
        z-index: 10;
   }
   .images{
        display: flex;
        grid-column-start: 2;
        flex-direction: column;
        list-style: none;
        z-index: 12;
   }
   .images img{
        margin: 1em 1em 1em 0;
        width: 100%;
        height: auto;

   }
   .static{
       position: absolute;
   }
   .static:hover{
       opacity: 0;
   }

   .backCover{
        grid-column-start: 1;
        grid-column-end: 3;
        display: grid;
        background-color: #D5FBF6;
        z-index: 10;
        width: 90vw;
        margin: 0 6% 6% 6%;
        -webkit-box-shadow: 0px -4px 38px -8px rgba(14,84,72,0.6);
        -moz-box-shadow: 0px -4px 38px -8px rgba(14,84,72,0.6);
        box-shadow: 0px -4px 38px -8px rgba(14,84,72,0.6);
   }
   .back-content{
       column-width: 400px;
        max-width: 100%;
        margin: 0 auto;
        padding: 3em;
   }

   .backCover-child{
       padding: 2%;
       /* grid-column-start: 2;
       color: azure;
       font-weight: 700;
       font-size: 7em;
       line-height: 94px; */
   }

   .has-dropcap:first-letter {
        font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
        float: left;
        font-size: 6rem;
        line-height: 0.65;
        margin: 0.1em 0.1em 0.0 0;
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

   .backCover p{
       grid-column-start: 1;
   }
   table {
        border-collapse: collapse;
        background-color: #F0F6F5;
    }

    thead,
    tbody,
    tr {

    }
    tr span{
        display: block;
        font-size: 8px;
        padding-left: 10px;
    }

    th,
    td {
        padding: 15px;
        /* overflow: hidden; */
        /* text-overflow: ellipsis; */
        /* white-space: nowrap; */
        border: 1px solid black;
    }

    th {
        top: 0;
        text-align: left;
        font-weight: normal;
        font-size: 1.1rem;
    }
    td {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .sub {
        font-size: 8px;
        padding-top:2px;
    }

</style>