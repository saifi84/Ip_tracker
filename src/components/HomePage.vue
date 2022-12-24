<template>
<div>
    <div class="d-flex flex-column align-center mt-4">
        <v-img src="../assets/pngwing.com.png" width="150" height="150"></v-img>
        <p class="text-h4 text-center mt-8 ">Look up IP Address Location</p>
        <p class="text-subtitle-2 text-center pl-16 pr-16 text-justify">If you can find out the IPv4 or IPv6 address of an Internet user, you can get an idea what part of
            the country or world they're in <br>by using our IP Lookup tool. What to do: Enter the IP address you're curious about in the box below, then click " IP LOOKUP."</p>
    </div>
    <div class="d-flex justify-center pl-10 pr-10 pt-10">
        <v-text-field v-model="txtField" label="Enter IP" outlined></v-text-field>
        <v-btn v-on:click="getDetail" depressed class="py-7 ml-n1 ml-5 " color="primary"> IP LOOKUP </v-btn>
    </div>
    <v-card class="mx-auto my-12" max-width="90%">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q='+ detail.lat+','+detail.lon +'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Geolocation data</v-card-title>
        <v-divider></v-divider>
        <v-row class="pl-4 mt-4">
            <v-col>
                <b>IP Address: </b>{{ detail.query }}
            </v-col>
            <v-col>
                <b>Country: </b>{{ detail.country }}
            </v-col>
        </v-row>
        <v-row class="pl-4">
            <v-col>

                <b>Region: </b>{{ detail.Quebec }}
            </v-col>
            <v-col>

                <b>City: </b>{{ detail.city }}
            </v-col>
        </v-row>
        <v-row class="pl-4">
            <v-col>
                <b>Zip Code: </b>{{ detail.zip }}
            </v-col>
            <v-col>
                <b>Organization: </b>{{ detail.org }}
            </v-col>
        </v-row>
        <v-row class="pl-4">
            <v-col>
                <b>Latitude: </b>{{ detail.lat }}
            </v-col>
            <v-col>
                <b>Longitude: </b>{{ detail.lon }}
            </v-col>
        </v-row>
        <v-row class="pl-4">
            <v-col>
                <b>Time Zone: </b>{{ detail.timezone }}
            </v-col>
            <v-col>
                <b>ISP: </b>{{ detail.isp }}
            </v-col>
        </v-row>

    </v-card>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            txtField: '',
        }
    },
    computed: {
        detail() {
            // eslint-disable-next-line
            debugger;
            return this.$store.state.detail;
        }
    },
    mounted() {
    },

    methods: {

        getDetail() {
            // eslint-disable-next-line
            debugger;
            this.$store.dispatch('getDetail', this.txtField);
        },
    }
}
</script>

<style scoped>
.inputField {
    width: 65%;
    margin: 1rem auto;
}
</style>
