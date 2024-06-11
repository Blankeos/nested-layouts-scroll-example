<script>
    const { children } = $props();
</script>
<div class="flex flex-grow h-full ">
    <div class="flex w-32 flex-col p-2 gap-y-4  bg-orange-500 justify-center">
      <a href="/dashboard">Dashboard</a>
      <a href="/dashboard/settings">Settings</a>
    </div>
    <div class="h-full">{@render children()}</div>
  </div>