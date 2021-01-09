$(function () {

    window.statusDetails = false;

    let changeInputValue = (idInput, idRange, isText = true) => {

        let elInput = document.getElementById(idInput);
        let elRange = document.getElementById(idRange);

        if (isText) {
            elInput.value = `${elRange.min} м²`;
            elRange.value = elRange.min;
        } else {
            elInput.value = elRange.min;
            elRange.value = elRange.min;
        }

        elRange.addEventListener('input', (e) => {
            if (isText) {
                elInput.value = `${elRange.value} м²`;
            } else {
                elInput.value = elRange.value;
            }

            if (!isText) {
                $(`#${idInput}`).mask('0 000 000 000 000 000', { reverse: false });
            }

        });

        elInput.addEventListener('focusout', (e) => {

            if (elInput.value.replace(/\s/g, "") > +elRange.max || isNaN(elInput.value.substr(0, elInput.value.length - 3) * 1)) {
                if (isText) {
                    elInput.value = `${elRange.max} м²`;
                } else {
                    elInput.value = elRange.max;
                }
            } else if (elInput.value.replace(/\s/g, "") < +elRange.min || isNaN(elInput.value.substr(0, elInput.value.length - 3) * 1) || elInput.value === '') {
                if (isText) {
                    elInput.value = `${elRange.min} м²`;
                } else {
                    elInput.value = elRange.min;
                }
            } else {
                if (isText) {
                    elInput.value = `${isNaN(elInput.value * 1) ? elInput.value : elInput.value + ' м²'} `;
                    elRange.value = elInput.value.substr(0, elInput.value.length - 3);
                } else {
                    elRange.value = elInput.value;
                }
            }

            if (!isText) {
                $(`#${idInput}`).mask('0 000 000 000 000 000', { reverse: false });
            }

        });

        elInput.addEventListener('input', (e) => {
            elRange.value = elInput.value.replace(/\s/g, "");
            if (!isText) {
                $(`#${idInput}`).mask('0 000 000 000 000 000', { reverse: false });
            }
        });

        if (!isText) {
            $(`#${idInput}`).mask('0 000 000 000 000 000', { reverse: false });
        }
    }

    let checkDetailsStatus = () => {
        if (statusDetails) {
            document.getElementById('details-filter').style.display = 'block';
            document.getElementById('button-details').textContent = 'Скрыть доп. параметры';
        } else {
            document.getElementById('details-filter').style.display = 'none';
            document.getElementById('button-details').textContent = 'Еще детали';
        }

    }

    document.getElementById('button-details').addEventListener('click', () => {
        statusToggle(statusDetails, 'statusDetails');
        checkDetailsStatus();
    });

    changeInputValue('input-area-from', 'range-area-from');
    changeInputValue('input-area-up-to', 'range-area-up-to');
    changeInputValue('input-cost-from', 'range-cost-from', false);
    changeInputValue('input-cost-up-to', 'range-cost-up-to', false);
    changeInputValue('input-kitchen-from', 'range-kitchen-from');
    changeInputValue('input-kitchen-up-to', 'range-kitchen-up-to');

    checkDetailsStatus();
});