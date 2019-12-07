(function() {
    let btn = document.querySelector('#submit');
    btn.onclick = function() {
        let first = document.querySelector('#first').value;

        if (first == 'Варя' || first == 'Varvara' || first == "VARVARA" || first == "ВАРЯ" || first == "ВАРВАРА" || first == "Варвара" || first == "варвара" || first == "варя" || first == "varvara") {
            alert('вы  варя');
        } else {
            alert('вы не варя');
        }
    }

}())