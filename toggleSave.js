const saveIconBtn = document.getElementById('saveIcon')

saveIconBtn.addEventListener('click', () => {
    if (saveIconBtn.classList.contains('fa-regular'))  {
        saveIconBtn.classList.remove('fa-regular');
        saveIconBtn.classList.add('fa-solid');
    } else {
        saveIconBtn.classList.remove('fa-solid');
        saveIconBtn.classList.add('fa-regular');
    }
});