<script>
    export let data;
    console.log(data);
</script>
<ul>
    {#each data.locations as location}
        <li>{location.name}</li>
    {/each}
</ul>
