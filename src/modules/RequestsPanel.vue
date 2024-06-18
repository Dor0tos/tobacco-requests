<script setup>
import RequestsList from '../components/RequestsList.vue'
import RequestsCard from '../components/RequestCard.vue'
import { supabase } from '../libs/supabase.js'
import { ref, onMounted, defineProps } from 'vue'
import TypeFetcher from '@/libs/requsetTypeFetch'

const props = defineProps({
    adminMode: {
        type: Boolean,
        default: false
    }
})

const requests = ref([])

const typeFetcher = new TypeFetcher()

async function getRequests() {
    let requstedData
    if (props.adminMode) {
        const { data } = await supabase.from('requests').select()

        requstedData = data
    } else {
        const { data } = await supabase
            .from('requests')
            .select()
            .eq('created_by', '529aa00c-6563-4bce-af5a-23eda4ed3f7f')

        requstedData = data
    }

    requests.value = requstedData
}

onMounted(() => {
    getRequests()
})
</script>

<template>
    <RequestsList :columns="1">
        <RequestsCard
            v-for="(req, index) in requests"
            :id="index"
            :text="req.text"
            :created-at="new Date(req.created_at)"
            :request-type="typeFetcher.getTypeByID(req.type)"
            :status="req.status"
            v-bind:key="req"
            :admin-mode="adminMode"
        />
    </RequestsList>
</template>
