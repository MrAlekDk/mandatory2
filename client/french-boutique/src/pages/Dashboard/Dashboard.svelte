<script>
    import Header from "../../components/Header/Header.svelte"
    import Footer from "../../components/Footer/Footer.svelte"

    let user = JSON.parse(localStorage.getItem("user"))
</script>

<Header />
<h1>Welcome to {user.email}</h1>
<p>This is the dashboard</p>
{#if user.admin}
<p>You are an admin</p>
{/if}
<Footer />
<style>

</style>