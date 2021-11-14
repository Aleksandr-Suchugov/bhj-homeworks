const mainMenuElms = document.querySelectorAll("ul.menu_main > li");
const mainElmsCount = mainMenuElms.length;

for (let i = 0; i < mainElmsCount; i++) {
    mainMenuElms.item(i).addEventListener('click', function(event) { 
        let activeMenu = document.querySelector('.menu_active');
        let subMenuItem = this.querySelector('ul.menu_sub');              
        if (subMenuItem === activeMenu && activeMenu) {
            event.preventDefault();
            activeMenu.classList.remove('menu_active');
            return;
        }       
        if (subMenuItem) {
            event.preventDefault();
            if (activeMenu) {
                activeMenu.classList.remove('menu_active');          
            }
            subMenuItem.classList.add('menu_active');
            return;
        }
        return;
    });
}
