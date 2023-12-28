document.addEventListener('DOMContentLoaded', function () {
    var linkItems = document.querySelectorAll('.link-cont li[widths]');
    var linkItemsspan = document.querySelectorAll('.link-cont li span');

    for (let index = 0; index < linkItems.length; index++) {
        var widthValue = `${linkItems[index].getAttribute("name").length + 2}ch`;
        linkItems[index].style.width = widthValue;
        console.log(widthValue);
    }

});


