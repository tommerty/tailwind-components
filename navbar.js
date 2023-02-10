var nav_links = [
  {
    "id": 0,
    "name": "",
    "link": "https://github.com/tommerty/tailwind-components",
    "current": false
  }
]

let nav = document.createElement("nav");
nav.className = "";
nav.innerHTML = `
<div class="navbar bg-gray1">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">FTwC</a>
  </div>
  <a class="btn bg-botred text-white hover:bg-myst_dark" href="https://github.com/sponsors/tommerty">Sponsor</a>
  <div class="flex-none gap-2">
    <div class="form-control">
      <!-- <input type="text" placeholder="Search" class="input" /> -->
    </div>
  </div>
</div>
    `;
document.body.prepend(nav);