function cancelFunction(id) {
	swal({
		title: "Estas seguro de cancelar?",
		text: "Una vez cancelada la cita ya no se podra recuperar",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((OK) => {
			if (OK) {
				$.ajax({
					url: "/delete-cita/" + id,
					success: function(res) {
						console.log(res)
					}
				});
				swal("Cita cancelada con exito", {
					icon: "success",
				}).then((ok) => {
					if (ok) {
						location.href = "/list-cita"
					}
				});
			} else {
				swal("Cita no cancelada!");
			}
		});
}