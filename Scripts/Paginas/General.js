$(document).ready(function () {
    $('body').on('hidden.bs.modal', '.modal', function () {
        $(this).removeData('bs.modal').find(".modal-content").empty();
    });
});