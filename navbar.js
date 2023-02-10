var nav_links = [
    {
        "id": 0,
        "name": "",
        "link": "https://github.com/tommerty/tailwind-components",
        "current": false
    }
]

let nav = document.createElement("nav");
nav.className = "bg-gezel border-gray-200 px-2 sm:px-4 py-2.5 shadow-2xl z-50";
nav.innerHTML = `
<div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        <img src="/assets/ttc.webp" class="mr-4 h-14 sm:h-14" alt="Logo">
        <div class="flex-col gap-4 grid-cols-3">
        <div>
            <span class="self-center text-xl font-bold whitespace-nowrap">TTC</span>
        </div>
        <div>
            <span class="self-center text-xs font-bold whitespace-nowrap">Free Tailwind Components</span>
        </div>

    </div>
    </a>
    <div class="flex items-center md:order-2">
    <li class="flex items-center px-3 py-2 ">
    <a href="https://app.mystl.ink" class="block py-2 pr-4 pl-3 text-white bg-botred rounded-lg hover:text-gray2 hover:underline md:bg-transparent md:p-0"><b>Sponsor</b></a>
</li>
        </div>
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        ${nav_links.map(link => {
    console.log('link.link.replace("/", ""): ', link.link.replace("/", ""));
    if (document.URL.split("/")[3] == link.link.replace("/", "")) {
        link.current = true;
    }
    if (!link.current) {
        return `<li class="flex items-center px-3 py-2 ">
                    <a href="${link.link}" class="umami--click--header-${link.name}-button flex justify-center w-full block py-2 pr-4 pl-3 text-myst_main bg-myst_dark rounded md:bg-transparent md:text-myst_dark md:p-0"><b>${link.name}</b></a>
                </li>`
    } else {
        return `<li class="flex items-center px-3 py-2 ">
                    <a href="${link.link}" class="umami--click--header-${link.name}-button flex justify-center w-full block py-2 pr-4 pl-3 text-myst_main border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-myst_dark md:p-0"><b>${link.name}</b></a>
                </li>`
    }
}).join("")}
      </ul>
    </div>
    </div>
    `;
document.body.prepend(nav);