<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);

</script>
<div id="images">
    {#each data.photos as photo}
<div class="image">
    <img src="{photo.Permalink}" >
</div>
{/each}
</div>