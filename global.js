function frame() {
    var url = 'https://turbowarp.org/' + document.querySelector('#twURI').value + '/embed';
    document.getElementById('frame').src = url;
}

function onStart() {
document.querySelector('#twURI').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        frame();
    }
    }
);
}

onStart();