<template>
    <div id="app">
        <v-sidebar></v-sidebar>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        vSidebar: Sidebar,
    }
}
</script>

<style lang="scss">
@import 'app.scss';
</style>
