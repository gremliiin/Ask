let statusToggle = (status, nameVar) => {
    status ? window[`${nameVar}`] = false : window[`${nameVar}`] = true;
}

let openCloseBlock = (btn, block) => {
    document.getElementById(btn).addEventListener('click', () => {
        if(document.getElementById(block).classList.contains('view-block')){
            $('#' + block).removeClass('view-block').addClass('hidden-block');
        } else if(document.getElementById(block).classList.contains('hidden-block')){
            $('#' + block).removeClass('hidden-block').addClass('view-block');
        }

        $('#' + btn).toggleClass('arrow-transform');
    });
}

let idHeader = document.querySelector('.header').id;

switch (idHeader) {
    case 'main':
        document.getElementById('main-link').parentElement.classList.add('active-link');
        break;
    case 'apartments':
        document.getElementById('apartments-link').parentElement.classList.add('active-link');
        break;
    case 'jk':
        document.getElementById('jk-link').parentElement.classList.add('active-link');
        break;
    case 'mortgage':
        document.getElementById('mortgage-link').parentElement.classList.add('active-link');
        break;
    case 'stock':
        document.getElementById('stock-link').parentElement.classList.add('active-link');
        break;
    case 'contacts':
        document.getElementById('contacts-link').parentElement.classList.add('active-link');
        break;
    default:
        alert('Что это за страница?');
}