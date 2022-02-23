<template>
    <div>
        <slot :controls="controls" :date="date"></slot>
    </div>
</template>
<script lang="ts">
import { computed, provide, ref } from 'vue';
import { addMonths, subMonths } from 'date-fns';
import getCalendarMonth from '../support/getCalendarMonth';

export default {
    setup() {
        const date = ref(new Date());
        const weekStartsOn = 1; // monday

        const currentMonth = computed(() => {
            return getCalendarMonth(date.value, weekStartsOn);
        });

        provide('currentMonth', currentMonth);

        const controls = {
            nextMonth() {
                date.value = addMonths(date.value, 1);
            },
            prevMonth() {
                date.value = subMonths(date.value, 1);
            }
        }

        return {
            controls,
            date
        }
    }
}
</script>