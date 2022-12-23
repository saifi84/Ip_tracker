<template>
<v-app>
    <v-main>
        <AppBar />
        <div class="pa-16">
            <HomePage />
            <DetailBody />
        </div>
    </v-main>
</v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import HomePage from './components/HomePage';
import DetailBody from './components/DetailBody';


export default {
    name: 'App',

    components: {
        AppBar,
        DetailBody,
        HomePage,

    },

    data: () => ({
        //
    }),
};
</script>
