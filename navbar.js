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
    <a href="#" class="btn btn-ghost normal-case text-xl">FOSS TwC</a>
    <a href="https://github.com/tommerty/tailwind-components/issues/new?assignees=tommerty&labels=enhancement&template=add-a-block.md&title=Add+Block+-+block_name"class="normal-case text-sm hover:text-botred hover:underline">Get involved</a>
  </div>
  <a class="btn bg-botred text-white hover:bg-myst_dark" href="https://github.com/sponsors/tommerty">Sponsor on <i class="ml-2 fa-brands fa-github"></i></a>
  <div class="flex-none gap-2">
    <div class="form-control">
      <!-- <input type="text" placeholder="Search" class="input" /> -->
    </div>
  </div>
</div>
    `;
document.body.prepend(nav);