<template>
  <q-page padding>
    <q-banner rounded class="bg-purple-8 text-white">
      <template v-slot:avatar>
        <q-icon name="fas fa-map-marker-alt" color="primary" />
      </template>
      <span>{{coords}}</span>

      <template v-slot:action>
        <q-btn flat color="white" label="刷新位置" @click="getLocationKey" />
      </template>
    </q-banner>

    <q-dialog v-model="showAlert" transition-show="rotate" transition-hide="rotate">
      <q-card style="width:300px">
        <div class="text-h6">地理資訊獲取失敗</div>
        <q-card-section>
          <div class="text-h6">代碼：{{errorInfo.code}}}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">訊息：{{errorInfo.message}}</div>
        </q-card-section>
        <q-separator />
        <q-card-section align="right" class="bg-white text-teal">
          <q-btn flat label="關閉" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
document.addEventListener("deviceready", () => {}, false);

export default {
  data() {
    return {
      showAlert: false,
      postioninfo: {
        latitude: "",
        longitude: "",
        altitude: "",
        accuracy: "",
        altitudeAccuracy: "",
        heading: "",
        speed: "",
        timestamp: ""
      },
      errorInfo: {
        code: "",
        message: ""
      },
      apiKey: "SGG6Y0TKrmmxSQy9pcw9FDCJGipyZUeR",
      locationInfo: {
        key: "",
        Type: "",
        EnglishName: "",
        LocalizedName: "",

        Country_EnglishName: "",
        Country_LocalizedName: ""
      }
    };
  },
  computed: {
    coords: function() {
      return this.postioninfo.latitude === "" ||
        this.postioninfo.longitude === ""
        ? ""
        : this.postioninfo.latitude + "," + this.postioninfo.longitude;
    }
  },
  methods: {
    getPostionSuccess: function(pos) {
      this.postioninfo.latitude = pos.coords.latitude;
      this.postioninfo.longitude = pos.coords.longitude;
      this.postioninfo.altitude = pos.coords.altitude;
      this.postioninfo.accuracy = pos.coords.accuracy;
      this.postioninfo.altitudeAccuracy = pos.coords.altitudeAccuracy;
      this.postioninfo.heading = pos.coords.heading;
      this.postioninfo.speed = pos.coords.speed;
      this.postioninfo.timestamp = pos.timestamp;
    },
    getPostionError: function(er) {
      this.errorInfo.code = er.code;
      this.errorInfo.message = er.message;
      this.showAlert = true;
    },
    getPostionInfo: function() {
      let options = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 5000
      };
      navigator.geolocation.getCurrentPosition(
        this.getPostionSuccess,
        this.getPostionError,
        options
      );
    },
    getLocationKey: function() {
      let apurl =
        "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
      //console.log(this.postioninfo);
      console.log(this.coords+":");

      // this.$axios
      //   .get(apurl, {
      //     params: {
      //       apikey: this.apiKey,
      //       q: this.coords,
      //       language: "zh-tw"
      //     }
      //   })
      //   .then(res => {
      //     console.table(res.data);
      //   })
      //   .catch(error => {
      //     console.log("onError = " + this.coords);
      //     console.error(error);
      //   });
    }
  },
  mounted() {
    this.getPostionInfo();
    this.getLocationKey();
  }
};
</script>
