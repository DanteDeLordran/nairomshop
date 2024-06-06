<script lang="ts">
    import type { PageData } from "./$types";
    import { addToCart } from "$lib/client/cart";

    export let data: PageData;

</script>

<h1 class="font-extrabold leading-10 tracking-tight text-gray-800 text-center sm:leading-none text-5xl sm:text-5xl my-6">Products</h1>

<div class="flex flex-wrap justify-center">
    {#each data.products as product}
    <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 m-5">
        <a href={'/products/' + product.id}>
            <img class="rounded-t-lg p-8" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air">
        </a>
            <div class="px-5 pb-5">
                
                <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    {product.name}
                </h3>
                <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                    {product.description}
                </h3>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold  text-gray-900 dark:text-white">${product.price}</span>
                    <button on:click={()=>addToCart(product , data.user?.id || 1)} class="text-white bg-[#FF4F01] hover:bg-[#FF4F01] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF4F01] dark:hover:bg-[#ff0101e7] dark:focus:ring-blue-800"
                     >Add to cart</button>
                </div>
            </div>
        
    </div>
    {/each}
</div>
