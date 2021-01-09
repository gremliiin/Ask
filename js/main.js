$(function () {

    let statusActive = false;
    window.nearLocationOptionsStatus = false;
    window.levelLocationOptionsStatus = false;
    let nearLocationArr = [];
    let levelLocationArr = [];

    isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    $('.offers__slider').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button class="prevArrow"></button>',
        nextArrow: '<button class="nextArrow"></button>',
    });

    if (!isMobile.any()) {
        $('.builder-maps__tabs').scrollbar();
    } else {
        document.querySelectorAll('.builder-maps__tabs').forEach(el => {
            el.style.overflowY = 'auto';
        });
    }

    let addEventsForStatus = () => {
        document.querySelectorAll('.builder__image--status').forEach((el, index) => {
            el.addEventListener('click', () => {
                if (!statusActive) {
                    el.classList.add('builder__image--status-active');
                    document.querySelectorAll('.builder__status')[index].style.display = 'block';
                    statusActive = true;
                } else {
                    el.classList.remove('builder__image--status-active');
                    document.querySelectorAll('.builder__status')[index].style.display = 'none';
                    statusActive = false;
                }
            });
            el.addEventListener('focusout', () => {
                if (statusActive) {
                    el.classList.remove('builder__image--status-active');
                    document.querySelectorAll('.builder__status')[index].style.display = 'none';
                    statusActive = false;
                }
            });
        });
    }

    let checkBuildingStatus = () => {
        if (document.getElementById('building-passed').classList.contains('active')) {
            document.getElementById('building-passed-body').style.display = 'block';
            document.getElementById('building-builder-body').style.display = 'none';
            setTimeout(() => {
                if (!isMobile.any()) {
                    $('.builder-maps__tabs').scrollbar();
                } else {
                    document.querySelectorAll('.builder-maps__tabs').forEach(el => {
                        el.style.overflowY = 'auto';
                    });
                }
            }, 500);
        } else if (document.getElementById('building-builder').classList.contains('active')) {
            document.getElementById('building-passed-body').style.display = 'none';
            document.getElementById('building-builder-body').style.display = 'block';
            setTimeout(() => {
                if (!isMobile.any()) {
                    $('.builder-maps__tabs').scrollbar();
                } else {
                    document.querySelectorAll('.builder-maps__tabs').forEach(el => {
                        el.style.overflowY = 'auto';
                    });
                }
            }, 500);
        }

    }

    let activateTab = (className) => {
        let tab = this.querySelectorAll(`.${className}`);
        tab[0].classList.add('active');
        tab.forEach((el, index) => {
            el.addEventListener('click', () => {
                tab.forEach((el, index) => {
                    el.classList.remove('active');
                });
                tab[index].classList.add('active');
                checkBuildingStatus();
            });
        });
    }


    let checkNearOptionsStatus = () => {
        if (nearLocationOptionsStatus) {
            document.getElementById('near_location_options').style.display = 'block';
            document.getElementById('near_location_button').classList.remove('filter__select');
            document.getElementById('near_location_button').classList.add('active-arrow');
        } else {
            document.getElementById('near_location_options').style.display = 'none';
            document.getElementById('near_location_button').classList.remove('active-arrow');
            document.getElementById('near_location_button').classList.add('filter__select');
        }

    }

    let checkLevelOptionsStatus = () => {
        if (levelLocationOptionsStatus) {
            document.getElementById('level_location_options').style.display = 'block';
            document.getElementById('level_location_button').classList.remove('filter__select');
            document.getElementById('level_location_button').classList.add('active-arrow');
        } else {
            document.getElementById('level_location_options').style.display = 'none';
            document.getElementById('level_location_button').classList.remove('active-arrow');
            document.getElementById('level_location_button').classList.add('filter__select');
        }
    }

    document.getElementById('near_location_input').addEventListener('click', () => {
        statusToggle(window.nearLocationOptionsStatus, 'nearLocationOptionsStatus');
        checkNearOptionsStatus();
    });

    document.getElementById('level_location_input').addEventListener('click', () => {
        statusToggle(window.levelLocationOptionsStatus, 'levelLocationOptionsStatus');
        checkLevelOptionsStatus();
    });

    document.getElementById('level_location_options').childNodes.forEach((el, index) => {
        if ((index + 1) % 2 === 0) {
            el.childNodes[1].childNodes[3].addEventListener('click', () => {
                setTimeout(() => {
                    if (el.childNodes[1].childNodes[3].checked) {
                        levelLocationArr.push(el.childNodes[1].childNodes[1].textContent);
                        document.getElementById('level_location_input').value = levelLocationArr.join(', ');
                    } else {
                        let index = levelLocationArr.indexOf(el.childNodes[1].childNodes[1].textContent);
                        if (index > -1) {
                            levelLocationArr.splice(index, 1);
                            document.getElementById('level_location_input').value = levelLocationArr.join(', ');
                        }

                    }
                }, 0);

            });
            if (el.childNodes[1].childNodes[3].checked) {
                levelLocationArr.push(el.childNodes[1].childNodes[1].textContent);
                document.getElementById('level_location_input').value = levelLocationArr.join(', ');
            } else {
                let index = levelLocationArr.indexOf(el.childNodes[1].childNodes[1].textContent);
                if (index > -1) {
                    levelLocationArr.splice(index, 1);
                    document.getElementById('level_location_input').value = levelLocationArr.join(', ');
                }

            }
        }
    });

    document.getElementById('near_location_options').childNodes.forEach((el, index) => {
        if ((index + 1) % 2 === 0) {
            el.childNodes[1].childNodes[3].addEventListener('click', () => {
                setTimeout(() => {
                    if (el.childNodes[1].childNodes[3].checked) {
                        nearLocationArr.push(el.childNodes[1].childNodes[1].textContent);
                        document.getElementById('near_location_input').value = nearLocationArr.join(', ');
                    } else {
                        let index = nearLocationArr.indexOf(el.childNodes[1].childNodes[1].textContent);
                        if (index > -1) {
                            nearLocationArr.splice(index, 1);
                            document.getElementById('near_location_input').value = nearLocationArr.join(', ');
                        }

                    }
                }, 0);
            });
            if (el.childNodes[1].childNodes[3].checked) {
                nearLocationArr.push(el.childNodes[1].childNodes[1].textContent);
                document.getElementById('near_location_input').value = nearLocationArr.join(', ');
            } else {
                let index = nearLocationArr.indexOf(el.childNodes[1].childNodes[1].textContent);
                if (index > -1) {
                    nearLocationArr.splice(index, 1);
                    document.getElementById('near_location_input').value = nearLocationArr.join(', ');
                }

            }
        }
    });

    document.getElementById('tabs-bulder-maps').addEventListener('scroll', () => {
        element = document.getElementById('tabs-bulder-maps');
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            document.querySelectorAll('.blur').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.blur').forEach(el => {
                el.style.display = 'block';
            });
        }
    });


    activateTab('builder-maps__tabs--item');

    addEventsForStatus();
    checkBuildingStatus();
    checkLevelOptionsStatus();
    checkNearOptionsStatus();
});