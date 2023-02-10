// CTA

showCTA(`<div id="email-cta" class="bg-teal-600 p-9 text-center rounded-lg shadow-xl">

<h1 class="text-center text-white items-center text-2xl font-extrabold">Join our Newsletter <i
        class="fa-solid fa-envelope"></i></h1>

<p class="pt-3 pb-9 text-xl">Keep up to date with our company by signing up to our amazing monthly
    newsletter.<br><span class="font-bold text-lg">No spam, all amazing</span></p>
<a href="#"
    class="text-center text-white bg-teal-700 hover:bg-teal-900 hover:text-white p-2 rounded-lg font-bold text-xl">
    <i class="fa-solid fa-envelope text-white text-xl"></i> Sign Up</a>
</div>`);

ctaPreview(`<div id="email-cta" class="bg-teal-600 p-9 text-center rounded-lg shadow-xl">

<h1 class="text-center text-white items-center text-2xl font-extrabold">Join our Newsletter <i
        class="fa-solid fa-envelope"></i></h1>

<p class="pt-3 pb-9 text-xl">Keep up to date with our company by signing up to our amazing monthly
    newsletter.<br><span class="font-bold text-lg">No spam, all amazing</span></p>
<a href="#"
    class="text-center text-white bg-teal-700 hover:bg-teal-900 hover:text-white p-2 rounded-lg font-bold text-xl">
    <i class="fa-solid fa-envelope text-white text-xl"></i> Sign Up</a>
</div>`);

// Sign In

showSignin(`    <div class="bg- flex items-center justify-center h-screen">
<div class="sm:container mx-auto text-center bg-zinc-800 align-center p-4 rounded-lg shadow-xl text-white">
    <h3 class="font-bold text-lg text-center text-2xl pb-9">Welcome back!</h3>
    <!-- Data -->
    <form class="">
        <div class="grid sm:grid-cols-2 gap-2">
            <!-- email -->
            <div class="col-span-full">
                <input type="email" placeholder="you@domain.com" name="email" id="email"
                    class="input text-black md:w-1/2 w-3/4 bg-white rounded-lg p-1 m-1" />
                <label class="label">
                    <span id="popup_error_email" class="hidden text-left text-sm text-red-500">incorrect
                        Email<br>
                    </span>
                </label>
            </div>
            <!-- password -->
            <div class="col-span-full">
                <input type="password" placeholder="Password" name="password"
                    class="input text-black md:w-1/2 w-3/4 bg-white rounded-lg p-1 m-1" />
                <label class="label">
                    <span id="popup_error_passoword" class="hidden text-left text-sm text-red-500">incorrect
                        Passowrd<br>
                    </span>
                </label>
            </div>
        </div>
        <div class="justify-center">
            <button type="submit"
                class="bg-red-500 px-2 py-1 my-2 mx-1 rounded-lg shadow-xl hover:bg-red-700 text-white">Sign
                in</label>
        </div>
    </form>
    <div class="mt-9">
        <p>Don't have an account? <a href="#"
                class="text-neutral-400 link hover:text-white hover:underline">Sign
                up</a> </p>
    </div>
</div>
</div>`);

signinPreview(`
<div class=" text-center bg-zinc-800 align-center p-4 rounded-lg shadow-xl text-white">
    <h3 class="font-bold text-lg text-center text-2xl pb-9">Welcome back!</h3>
    <!-- Data -->
    <form class="">
        <div class="grid sm:grid-cols-2 gap-2">
            <!-- email -->
            <div class="col-span-full">
                <input type="email" placeholder="you@domain.com" name="email" id="email"
                    class="input text-black w-3/4 bg-white rounded-lg p-1 m-1" />
                <label class="label">
                    <span id="popup_error_email" class="hidden text-left text-sm text-red-500">incorrect
                        Email<br>
                    </span>
                </label>
            </div>
            <!-- password -->
            <div class="col-span-full">
                <input type="password" placeholder="Password" name="password"
                    class="input text-black w-3/4 bg-white rounded-lg p-1 m-1" />
                <label class="label">
                    <span id="popup_error_passoword" class="hidden text-left text-sm text-red-500">incorrect
                        Passowrd<br>
                    </span>
                </label>
            </div>
        </div>
        <div class="justify-center">
            <button type="submit"
                class="bg-red-500 px-2 py-1 my-2 mx-1 rounded-lg shadow-xl hover:bg-red-700 text-white">Sign
                in</label>
        </div>
    </form>
    <div class="mt-9">
        <p>Don't have an account? <a href="#"
                class="text-neutral-400 link hover:text-white hover:underline">Sign
                up</a> </p>
    </div>
</div>`);

// Info Section

showInfosec(`<div class="text-white mx-full my-2 text-center font-bold">
<h2>All these users love what we do</h2>
<div id="" class="flex flex-box p-2 gap-2 justify-center grayscale">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    </div>
</div>`);

infosecPreview(`<div class="text-white mx-full my-2 text-center font-bold">
<h2>All these users love what we do</h2>
<div id="" class="flex flex-box p-2 gap-2 justify-center grayscale">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    <img class="w-16 rounded-lg"
        src="https://picsum.photos/200">
    </div>
</div>`);
