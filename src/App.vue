<template>
    <div class="app">
        <v-sidebar title="Políticos"></v-sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
export default {
    name: 'app',
    components: {
        vSidebar: Sidebar,
    }
}
</script>

<style lang="scss">
@import 'app.scss';
</style>
