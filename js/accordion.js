const futureLinkElems = document.querySelectorAll('.feature__link');
const futureSubElems = document.querySelectorAll('.feature-sub');

futureLinkElems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        if (elem.classList.contains('feature__link_active')) {
            elem.classList.remove('feature__link_active');
            futureSubElems[index].classList.add('hidden');
        } else {
            futureLinkElems.forEach(futureLinkElem => {
                futureLinkElem.classList.remove('feature__link_active');
            });

            futureSubElems.forEach(futureSubElem => {
                futureSubElem.classList.add('hidden');
            });

            futureSubElems[index].classList.remove('hidden');
            elem.classList.add('feature__link_active');
        }
    });
});