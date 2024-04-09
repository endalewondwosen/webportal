<template>
<div>
    <div class="pagetitle">
        <h1> List of Admission Applicants</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Applicants</li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <p>{{ files.first_name }}</p>
    <iframe :src="files.bank_statement" width="400%" height="800%" frameborder="2">
    </iframe>
</div>
</template>

<script>
export default {
    created() {
        let id = this.$route.params.id
        this.axios.get('/api/user/viewFinanceApplicant/' + id)
            .then(({
                data
            }) => {
                this.files = data
            }).catch()
    },
    data() {
        return {
            files: {}
        }
    },
}
</script>
