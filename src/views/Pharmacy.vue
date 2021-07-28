<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <Layout>
            <template v-slot:content>
                <div v-if="fetching">
                    Loading...
                </div>
                <div v-else-if="error">
                    Oh no... {{error}}
                </div>
                <div v-else>
                    <ul v-if="data">
                        <h2 class="text-blue-1000 text-xl font-semibold text-center my-6 underline">List of Prescriptions</h2>
                        <div v-for="{drug, student, id} in data.getDrugList" :key="id" class="">
                            <Drug :data="{drug, student }"/>
                        </div>
                    </ul>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/staffDashboardLayout'
import { useQuery } from '@urql/vue'
import Drug from '@/components/Drug'

export default {
    components: {
        Layout,
        Drug
    },
    setup(){
        const result = useQuery({
            query: ` {
            getDrugList {
                id
                student {
                    firstName
                    lastName
                    clinicID
                }
                drug {
                    name
                    instructions
                    }
                }
            }
            `
        });

        return {
            data: result.data,
            fetching: result.fetching,
            error: result.error
        }
    },
}
</script>