document.addEventListener('click', documentActions);
const menuBlocks = document.querySelectorAll('.item-tabs');
if (menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.items .item').length;
        menuBlock.classList.add(`_block_${menuBlockItems}`);
    })
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-sumenu = "${subMenuId}"]`);
        const catalogMenu = document.querySelector('.deals-body');

        if (subMenu) {
            const activeLink = document.querySelector('.tabs-button-active');
            const activeBlock = document.querySelector('.item-tabs-active');

            if (activeBlock && activeLink !== targetElement) {
                activeLink.classList.remove('tabs-button-active');
                activeBlock.classList.remove('item-tabs-active');
            }
            targetElement.classList.toggle('tabs-button-active');
            subMenu.classList.toggle('item-tabs-active');
        } else {
            console.log("Нет такoго подменю");
        }
        e.preventDefault();
    }
}