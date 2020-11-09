//$(document).ready(function () {
    //$("#ddlUnidade").change(function () {
    //    var selectedItem = $(this).val();
    //    var idMedico = $('#IdMedico').val();
    //    var divConsult = $("#divConsultorios");
    //    $.ajax({
    //        cache: false,
    //        type: "POST",
    //        url: "/Medico/BuscarConsultorio",
    //        data: { "UnidadeId": selectedItem, "MedicoId": idMedico },
    //        success: function (data) {
    //            divConsult.html('');
    //            $('#lblConsultorios').css('display', 'block');
    //            divConsult.html(data)
    //            //$.each(data, function (id, option) {
    //            //    ddlConsult.append($('<option></option>').val(option.id).html(option.name));
    //            //});                
    //        },
    //        error: function (xhr, ajaxOptions, thrownError) {                
    //            var message = $(xhr.responseText).find('i') != null ? $(xhr.responseText).find('i')[0].innerHTML : "Erro ao buscar consultórios";
    //            alert(message);
    //        }
    //    });
    //});
//});