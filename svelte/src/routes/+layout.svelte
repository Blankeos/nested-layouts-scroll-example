<script>
  import "../global.css";

    const { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <nav class="h-20 justify-between bg-green-400 flex items-center px-5">
    VERTICAL LAYOUT (SVELTE)
    <div class="flex items-center gap-x-2">
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
    </div>
  </nav>
  <main class="flex flex-col flex-grow relative">{@render children()}</main>
  <footer class="h-20 bg-green-400">VERTICAL LAYOUT</footer>
</div>