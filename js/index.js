function insert(num) {
    document.form.textview.value + num;
}

function equal() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
} 