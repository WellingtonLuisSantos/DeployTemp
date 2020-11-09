$(document).ready(function () {
      
 
        
});

function TrataRetorno(response) {

    response = JSON.parse(response);

    if (response.result == 'OK-exclusao') {
        $('#' + response.id).remove();
    }
    else if (response.result == 'ERRO') {
        showMessage(response.title, response.message);
    }
    
}

function showMessage(title, message) {

    $('#myModalLabel').html(title);
    $('#p-mensagem').html(message);
    $('#myModalMessage').modal('show');

}

