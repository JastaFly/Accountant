var show_on = function (number) {
    let modal = document.getElementsByClassName('modal-window')[number];
    $(modal).slideToggle(350);
    let shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.display = 'block';
}

var show_off = function (number) {
    let modal = document.getElementsByClassName('modal-window')[number];
    $(modal).slideToggle(350);
    let shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.display = 'none';
}
