$(document).ready(function () {    
    $('.btn-cancelar').click(function () { cancelarAgendaDetalhe(this.getAttribute('data-value-custon'), null) });
    $('.btn-confirmar').click(function () { confirmarAgendaDetalhe(this.getAttribute('data-value-custon'), null) });
});

function zerarDatas() {
    var view = $('#calendario').fullCalendar('getView');
    var viewEndDate = Date.parse(view.end.toISOString()).add({ days: -1 }).toLocaleDateString();
    startDateParam = view.start.toISOString();
    endDateParam = viewEndDate;

    rangeDates.firstDate = Date.parse(view.start.toLocaleString());
    rangeDates.lastDate = Date.parse(view.end.toLocaleString()).add({ days: -1 });
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

//function cancelarAgenda(id, element) {
//    StartProgress();
//    alert();
//    var idConsulta = id
//    $.ajax({
//        cache: false,
//        type: "POST",
//        url: "/Consulta/CancelarAgendamento",
//        data: { "id": idConsulta },
//        success: function (data) {
//            //debugger;
//            $('#agenda-' + idConsulta).removeClass('panel-primary').addClass('panel-danger');
//            $('#agenda-' + idConsulta).children().children('.btn').each(function (button) { $(this).hide(); });

//            zerarDatas();
//            var noteStyle = 'danger';
//            if (data.result == "OK") {
//                showNotification('Cancelar Agendamento', 'Consulta cancelada com sucesso!', noteStyle);
//                AtualizarCalendario(idMedico, startDateParam, endDateParam, null, null, true, true);
//                //$(".table_item_" + id).remove();

//                //alert("Registro cancelado com sucesso!");
//            }
//            else {
//                showNotification('Cancelar Agendamento', data.message, noteStyle);
//                AtualizarCalendario(idMedico, startDateParam, endDateParam, null, null, true, true);
//                //alert(data.message);
//            }

//        },
//        error: function (xhr, ajaxOptions, thrownError) {
//            var message = $(xhr.responseText).find('i') != null ? $(xhr.responseText).find('i')[0].innerHTML : "Erro ao buscar consultórios";
//            alert(message);
//            StopProgress();
//        }
//    });

//}

//function confirmarAgenda(id, element) {
//    StartProgress();
//    var idConsulta = id
//    $.ajax({
//        cache: false,
//        type: "POST",
//        url: "/Consulta/ConfirmarAgendamento",
//        data: { "id": idConsulta },
//        success: function (data) {
//            $('#agenda-' + idConsulta).removeClass('panel-primary').addClass('panel-success');
//            $('#agenda-' + idConsulta).children().children('.btn-confirmar').each(function (button) { $(this).hide(); });

//            zerarDatas();
//            var noteStyle = 'success';
//            if (data.result == "OK") {
//                showNotification('Confirmação de Agendamento', 'Consulta confirmada com sucesso!', noteStyle);
//                AtualizarCalendario(idMedico, startDateParam, endDateParam, null, null, true, true);

//                //$(".table_item_" + id).remove();

//                //alert("Registro confirmado com sucesso!");
//            }
//            else {
//                showNotification('Confirmação de Agendamento', data.message, noteStyle);
//                AtualizarCalendario(idMedico, startDateParam, endDateParam, null, null, true, true);
//                //alert(data.message);
//            }
            
//        },
//        error: function (xhr, ajaxOptions, thrownError) {
//            var message = $(xhr.responseText).find('i') != null ? $(xhr.responseText).find('i')[0].innerHTML : "Erro ao buscar consultórios";
//            alert(message);
//            StopProgress();
//        }
//    });    
//}