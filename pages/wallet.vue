<template>
  <div>
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      ></v-img>
      <v-btn class="btn" depressed> Logout </v-btn>
      <v-btn @click="goconnect()" class="btn">connect Wallet</v-btn>

      <v-row style="margin: 2.5%; top: 130px">
        <v-list-item>
          <v-list-item-avatar size="100">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="John"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title" style="margin-top: 20px"
              >นาย อเนก จันยาบวย</v-list-item-title
            >
            <v-list-item>ยอดคงเหลือ 0.30 coins </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-row>

      <div class="mid">
        <v-btn class="mx-2" fab dark large color="purple">
          <v-list-item-avatar size="100">
            <img
              src="https://image.flaticon.com/icons/png/512/330/330716.png"
              alt="time"
            />
          </v-list-item-avatar>
        </v-btn>
      </div>
      <br /><br />
      <div class="center">
        <p class="hours">ชั่วโมงรวม</p>
        <p class="hours">14</p>
      </div>
      <div class="mid">
        <v-row justify="center">
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" v-on="on"> รายละเอียด </v-btn>
            </template>
            <v-card>
              <v-card-title>ชั่วโมง</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px">
                <div v-for="date in date" :key="date['.key']">
                  <h2>{{ date.datetime }}</h2>
                  <div v-for="playerId in date.players" :key="playerId['.key']">
                    <p>{{ players[playerId].firstname }}</p>
                    <p>{{ players[playerId].lastname }}</p>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

import VueMetamask from "vue-metamask";
export default {
  components: {
    VueMetamask,
  },
  data() {
    return {
      players: {
        p1: {
          ".key": "p1",
          firstname: "แต่งกายไม่สุภาพ",
          lastname: " 6 ชม.",
          jerseynumber: 10,
          teams: {
            2_9_2021 : "2-9-2021",
          },
          userId: "u1",
        },
        p2: {
          ".key": "p2",
          firstname: "ไม่สวมหมวกกันน็อก",
          lastname: "6 ชม.",
          jerseynumber: 55,
          teams: {
            2_9_2021 : "2-9-2021",
          },
          userId: "u1",
        },
        p3: {
          ".key": "p3",
          firstname: "ไม่สวมหมวกกันน็อก",
          lastname: "10 ชม.",
          jerseynumber: 40,
          teams: {
            1_9_2021: "1-9-2021",
          },
          userId: "u1",
        },
        p4: {
          ".key": "p4",
          firstname: "แต่งกายไม่เรียบร้อย",
          lastname: "10 ชม.",
          jerseynumber: 30,
          teams: {
            1_9_2021: "1-9-2021",
          },
          userId: "u1",
        },
        p5: {
          ".key": "p5",
          firstname: "เหยียบหญ้า",
          lastname: "10 ชม.",
          jerseynumber: 11,
          teams: {
            1_9_2021: "1-9-2021",
          },
          userId: "u1",
        },
        p6: {
          ".key": "p6",
          firstname: "เหยียบหญ้า",
          lastname: "10 ชม.",
          jerseynumber: 8,
          teams: {
            1_9_2021: "1-9-2021",
          },
          userId: "u1",
        },
      },
      date: {
        1_9_2021: {
          ".key": "1-9-2021",
          datetime: "1-9-2021",
          players: {
            p3:"p3",
            p4: "p4",
            p5: "p5",
            p6: "p6",
          },
          userId: "u1",
        },
        2_9_2021: {
          ".key": "2-9-2021",
          datetime: "2-9-2021",
          players: {
            p1: "p1",
            p2: "p2",
         
          },
          userId: "u1",
        },
      },
      msg: "This is demo net work",
      dialogm1: "",
      dialog: false,
    };
  },
  
  created() {
  this.getdata();
  },

  methods: {
    onComplete(data) {
      console.log("data:", data);
    },
    goconnect() {
      console.log("sadsa");
      this.$router.push("/connectwallet");
    },
    getdata() {
     

      // Make a request for a user with a given ID
      axios
        .get("/api/getAllStudent")
        .then(function (response) {
          // handle success
          
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>
<style>
.center {
  text-align: center;
}
.mid {
  display: flex;
  justify-content: center;
  align-items: center;
}
p.hours {
  display: inline-block;
}
.btn {
  position: relative;
  float: right;
}
</style>