document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';

    const arrow = this.querySelector('.arrow');
    arrow.style.transform =
        arrow.style.transform === 'rotate(-135deg)' ? 'rotate(45deg)' : 'rotate(-135deg)';
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.style.transform = 'rotate(45deg)';
        });
    }
});
