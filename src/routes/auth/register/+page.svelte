
<div class="w-full p-8">
    <h2 class="text-2xl font-semibold text-gray-700 text-center">Join us!</h2>

    <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-full"></span>
    </div>
    <form method="post">
        <div class="mt-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input name="email" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required>
        </div>
        <div class="mt-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input name="password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required>
        </div>
        <div class="mt-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input name="username" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" required>
        </div>
        <div class="mt-4">
            <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input name="firstName" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" required>
        </div>
        <div class="mt-4">
            <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input name="lastName" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" required>
        </div>
        <div class="mt-8">
            <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
        </div>
        <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4"></span>
            <a href="/auth/login" class="text-xs text-gray-500 uppercase">or login</a>
            <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
    </form>
</div>