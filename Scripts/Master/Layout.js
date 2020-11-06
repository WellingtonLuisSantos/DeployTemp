$(document).ajaxStart(function () {
    StartProgress();
});

$(document).ajaxStop(function () {
    StopProgress();
});

function StartProgress() {
    //NProgress.start();
    $.blockUI({
        message: '<h3 style="font-weight:bold;">Carregando...</h3>', css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff',
        }
    });
    // NProgress.set(1.0);
}

function StopProgress() {
    //NProgress.done();
    $.unblockUI();
}

function TrataRetorno(response) {

    if (response.Status == 'Success') {
        changeView();
        showNotification(response.Title, response.Message, 'success');
    }
    else if (response.Status == 'Warning') {
        showNotification(response.Title, response.Message, 'warning');
    }
    else if (response.Status == 'Error') {
        showNotification(response.Title, response.Message, 'danger');
    }
    else {
        alert("Status de retorno não tratado!");
    }

    StopProgress();
}


function TrataRetornoFinish(response) {

    if (response.Status == 'Success') {
        showNotification(response.Title, response.Message, 'success');
        window.URL = "home/index";
    }
    else if (response.Status == 'Warning') {
        showNotification(response.Title, response.Message, 'warning');
    }
    else if (response.Status == 'Error') {
        showNotification(response.Title, response.Message, 'danger');
    }
    else {
        alert("Status de retorno não tratado!");
    }

    StopProgress();
}

function showNotification(title, text, type) {
    var defaultStack = {
        "dir1": "up",
        "dir2": "right",
        "spacing1": 0,
        "spacing2": 0
    }

    new PNotify({
        title: title,
        text: text,
        shadow: true,
        opacity: 1,
        addclass: 'stack_bar_bottom',
        type: type,
        stack: defaultStack,
        width: '70%',
        delay: 1400
    });
}

function changeView(view) {

    if (view == 'ShowViewEdit') {
        $('#divViewSearch').hide();
        $('#divViewEdit').show();
    }
    else if (view == 'ShowViewDetail') {
        $('#divViewSearch').hide();
        $('#divViewDetail').show();
    }
    else
        if (view == 'ShowViewCreate') {
            $('#divViewSearch').slideToggle();
            $('#divViewCreate').slideToggle();
        }
        else
            if ($('#divViewEdit').is(":visible")) {
                $('#divViewSearch').slideToggle();
                $('#divViewEdit').slideToggle();
            }
            else if ($('#divViewCreate').is(":visible")) {
                $('#divViewCreate').slideToggle();
                $('#divViewSearch').slideToggle();
            }
            else if ($('#divViewSearch').is(":visible")) {
                $('#divViewSearch').slideToggle();
                $('#divViewCreate').slideToggle();
            }

}