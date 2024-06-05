<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="w-full p-8 lg:w-1/2">
    <h2 class="text-2xl font-semibold text-gray-700 text-center">Welcome!</h2>

    <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-full"></span>
    </div>
    <div class="mt-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
    </div>
    <div class="mt-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
    </div>
    <div class="mt-8">
        <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
    </div>
    <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-1/5 md:w-1/4"></span>
        <a href="/auth/login" class="text-xs text-gray-500 uppercase">or login</a>
        <span class="border-b w-1/5 md:w-1/4"></span>
    </div>
</div>