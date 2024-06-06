<script lang="ts">
    import { clearCart, getCart, removeFromCart } from '$lib/client/cart';

    $: orders = getCart()

    const handleRemoveFromCart = (i : number) =>{
        removeFromCart(i)
        orders = getCart()
    }

    async function handleSubmit(event: { currentTarget: EventTarget & HTMLFormElement }) {
        console.log(event.currentTarget.action)
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: JSON.stringify(orders)
		});
        if (response.ok) {
            clearCart()
            orders = getCart()
        }
	}

</script>

<h1 class="font-extrabold leading-10 tracking-tight text-gray-800 text-center sm:leading-none text-5xl sm:text-5xl my-6">Cart</h1>

<div class="flex justify-center mt-8">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <button disabled={orders.length === 0} class="text-white bg-[#FF4F01] hover:bg-[#FF4F01] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF4F01] dark:hover:bg-[#ff0101e7] dark:focus:ring-blue-800">
            Checkout
        </button>
    </form>
</div>
<div class="flex flex-wrap justify-center">
    {#each orders as order , i}
    <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 m-5">
        <img class="rounded-t-lg p-8" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air">
        <div class="px-5 pb-5">
            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                Product : {order.productId}
            </h3>
            <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                Amount : {order.quantity}
            </h3>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold  text-gray-900 dark:text-white">${order.totalPrice}</span>
                <button on:click={()=>handleRemoveFromCart(i)} class="text-white bg-[#FF4F01] hover:bg-[#FF4F01] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF4F01] dark:hover:bg-[#ff0101e7] dark:focus:ring-blue-800"
                 >Remove</button>
            </div>
        </div>
    
    </div>
{/each}
</div>