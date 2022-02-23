<template>
    <main class="pt-16 max-w-2xl mx-auto">
        <h1 class="text-2xl">Headless Datepicker</h1>

        <HeadlessDatepicker v-slot="{ controls, date: currentDate }">
            <div class="flex items-center justify-center">{{ formatCurrentDate(currentDate) }}</div>
            <div class="grid grid-cols-7">
                <HeadlessDatepickerDays v-slot="{ date }">
                    <div class="px-4 py-2">
                        <div class="text-sm text-gray-600">{{ date.getDate() }}</div>
                    </div>
                </HeadlessDatepickerDays>
            </div>
            <div class="flex justify-between">
                <div>
                    <button @click="controls.prevMonth()">Prev</button>
                </div>
                <div>
                    <button @click="controls.nextMonth()">Next</button>
                </div>
            </div>
        </HeadlessDatepicker>
    </main>
</template>
<script lang="ts">
import { format } from "date-fns"
import HeadlessDatepicker from "./components/HeadlessDatepicker.vue"
import HeadlessDatepickerDays from "./components/HeadlessDatepickerDays.vue"

export default {
    components: {
        HeadlessDatepicker,
        HeadlessDatepickerDays
    },
    setup() {

        function formatCurrentDate(date: Date) {
            return format(date, "MMMM yyyy");
        }

        return {
            formatCurrentDate
        }
    }
}
</script>