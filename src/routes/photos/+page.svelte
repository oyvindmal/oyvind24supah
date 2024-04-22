<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>


<ul>
    {#each data.locations as location}
        <li><a href="/photos/{location.id}">{location.name}</a></li>
    {/each}
</ul>
