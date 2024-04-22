<script>
    export let data;
    console.log(data);
</script>
<ul>
    {#each data.locations as location}
        <li><a href="/photos/{location.id}">{location.name}</a></li>
    {/each}
</ul>
