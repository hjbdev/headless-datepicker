<template>
    <template v-for="date in currentMonth.dates">
        <slot :date="date"></slot>
    </template>
</template>
<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const currentMonth = inject('currentMonth');

        return {
            currentMonth
        }
    }
}
</script>