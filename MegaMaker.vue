<style>

</style>

<template>
    <v-container class="flex">
        <v-row>
            <v-col cols="4">
                <v-sheet
                    height="300"
                    >
                    <v-row>
                        <p class="mx-5 text-h6 font-weight-black">Sensors</p>
                    </v-row>
                    
                    <v-row>
                        <v-col class="ml-2" cols="6">
                            <p>Sensor_1</p>
                        </v-col>
                        <v-col>
                            <v-chip color="green">
                                Success
                            </v-chip>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="ml-2" cols="6">
                            <p>Sensor_2</p>
                        </v-col>
                        <v-col>
                            <v-chip color="red">
                                Error
                            </v-chip>
                        </v-col>
                    </v-row>

                </v-sheet>  
            </v-col>
        </v-row>
        
    </v-container>
    

</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
	
});
</script>
