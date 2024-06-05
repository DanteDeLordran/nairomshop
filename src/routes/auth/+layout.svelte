<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<div class="py-6">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-xl">
        <slot />
    </div>
</div>
