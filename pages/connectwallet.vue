<template>
<div>
  <v-card class="mx-auto" max-width="1000" tile>
      <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        <v-btn class="btn" depressed>
      Logout
    </v-btn>
    <v-btn  @click.native="onComplete" class="btn">connect ddWallet</v-btn >
     
      

      <v-row style="margin:2.5%; top: 130px">

                  <v-list-item>
                   <v-list-item-avatar size="100">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="John"
                      >
                    </v-list-item-avatar>
                    
                    <v-list-item-content>
                      <v-list-item-title class="title" style="margin-top:20px;">นาย อเนก จันยาบวย</v-list-item-title>
                      <v-list-item>ยอดคงเหลือ 0.30 coins </v-list-item>
                    </v-list-item-content>
                  </v-list-item>
    </v-row>
    



    <div class="mid">

  
     <v-btn 
      class="mx-2 "
      fab
      dark
      large
      color="purple"
    >
      <v-list-item-avatar size="100">
                      <img
                        src="https://image.flaticon.com/icons/png/512/330/330716.png"
                        alt="time"
                      >
                    </v-list-item-avatar>
          
  
    </v-btn>
  
      </div>
      <br><br>
    <div class="center">
         <p class="hours">ชั่วโมงรวม</p> <p class="hours"> 14</p>
    </div>
    <div class="mid">

 
      <v-btn  depressed>
      รายละเอียด
    </v-btn>
        </div>
  </v-card>
   <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
</div>
    
</template>

<script>






   import VueMetamask from 'vue-metamask';
    export default {
        components: {
            VueMetamask,
        },
        data(){
            return {
                msg: "This is demo net work"
            }
        },
        methods:{
            onComplete(data){
                console.log('data:', data);
            }
        }
    }
   
</script>
<style>
.center{
  
    text-align: center;
}
.mid{
    display: flex;
  justify-content: center;
  align-items: center;
}
p.hours {  
     display: inline-block; 
}
.btn{
    position: relative;
  float: right;
}

</style>