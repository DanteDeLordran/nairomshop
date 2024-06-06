
<div class="w-full p-8">
    <h2 class="text-2xl font-semibold text-gray-700 text-center">Welcome back!</h2>

    <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-full"></span>
    </div>

    <form method="POST">
        <div class="mt-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input name="email"  class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
        </div>
        <div class="mt-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input name="password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
        </div>
        <div class="mt-8">
            <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
        </div>
        <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4"></span>
            <a href="/auth/register" class="text-xs text-gray-500 uppercase">or sign up</a>
            <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
    </form>
    
</div>