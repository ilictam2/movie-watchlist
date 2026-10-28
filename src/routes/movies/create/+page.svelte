<script>
    let {form} = $props();
</script>

<a href="/movies">Back</a>
<h1>Add a Movie</h1>

<form method="POST" action="?/create">
    <label class="form-label" for="title">Name</label>
    <input class="form-control mb-3" id="title" name="title" required />

    <label class="form-label" for="year">Year</label>
    <input class="form-control mb-3" id="year" name="year" type="number" required />

    <label class="form-label" for="length">Length</label>
    <input class="form-control mb-3" id="length" name="length" placeholder="114 Minuten" required />

    <button class="btn btn-primary" type="submit">Add Movie</button>
</form>

{#if form?.success}
  <p>Movie created</p>
{/if}