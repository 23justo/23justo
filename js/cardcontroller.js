$('.mas').on('click', function (event) {
    $('#exampleModal').modal('toggle')
    $("#cargotexto").text($(this).data('cargo'))
    $("#funciontexto").text($(this).data('funcion'))
  })
