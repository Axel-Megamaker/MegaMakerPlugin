<template>
    <v-row>
        <v-col cols="12">
            <v-sheet>
                <v-row>
                    <p class="mx-5 pt-1 text-h6 font-weight-black">Sensorer</p>
                </v-row>
                
                <div v-for="(sensor, index) in sensors" :key="sensor.name">
                    <v-row class="mb-n8">
                    <v-col class="ml-2" cols="4">
                        <p>{{ sensor.name }}</p>
                    </v-col>
                    <v-col class="ml-2">
                        <p>{{ sensor.data }}</p>
                    </v-col>
                    <v-col cols="3">
                        <v-chip :color="sensor.status === 'Success' ? 'green' : 'red'">
                            {{ sensor.status }}
                        </v-chip>
                    </v-col>
                </v-row>

                <v-row v-if="index < sensors.length - 1">
                    <v-col>
                        <v-divider class="my-2"></v-divider>
                    </v-col>
                </v-row>

                </div>
            </v-sheet>  
        </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      sensors: [
        { name: "Luftfilter", data: "25%", status: "Success" },
        { name: "Luftfuktighet", data: "50%", status: "Error" },
        { name: "Sensor_3 ", data: "75%", status: "Success" }
      ]
    };
  }
};
</script>
