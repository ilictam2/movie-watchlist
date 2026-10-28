<script>
  import MovieCard from "#lib/components/MovieCard.svelte";
 let {data} = $props();
  
</script>

<a href="/movies/create" class="btn btn-primary mb-3">Add New Movie</a>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div class="row">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard {movie}></MovieCard>
    </div>
  {/each}
</div>
