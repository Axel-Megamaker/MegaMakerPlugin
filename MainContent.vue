<style>

</style>

<template>
    <v-container class="flex">
        <v-row>
            <v-col col="8">
                <FilterComponent/>
            </v-col>
            <v-col col="4">
                <LoggerComponent/>
            </v-col>
        </v-row>
        
        
    </v-container>
    
</template>

<script lang="js">
import Vue from "vue";
import FilterComponent from "./FilterComponent.vue";
import LoggerComponent from "./LoggerComponent.vue";

export default Vue.extend({
    components: {
        FilterComponent,
        LoggerComponent
    }
	
});
</script>
