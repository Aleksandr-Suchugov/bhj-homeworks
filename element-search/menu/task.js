const mainMenuElms = document.querySelectorAll("ul.menu_main > li");
const mainElmsCount = mainMenuElms.length;

for (let i = 0; i < mainElmsCount; i++){
    mainMenuElms.item(i).addEventListener('click', function(event) { 
        event.preventDefault();
        let activeMenu = document.querySelector('.menu_active');
        if (activeMenu) {
            activeMenu.classList.remove('menu_active');
        }
        let subMenuItem = this.querySelector('ul.menu_sub');
        if (subMenuItem) {
           return subMenuItem.classList.add('menu_active');
        }
    });
}
