$('#isiDonk h5.modal-title').html('Welcome To My Website');
$('#isiDonk div.modal-body').html('Selamat Datang Di Website Sederhana Ini By Saepulfariz');
// $('#isiDonk').modal('show');
const nomerHp = 6282216501151;
// kirim pesan
// script by saepulfariz 22/06/2020
$('#kirim-pesan').on('click', function () {

	const namaDepan = $('#nama-depan-pesan').val();
	const namaBelakang = $('#nama-belakang-pesan').val();
	const isiPesan = $('#isi-pesan').val();

	$('#isiDonk h5.modal-title').html('Warning');

	if (namaDepan === '' || namaBelakang === '' || isiPesan === '') {
		$('#isiDonk div.modal-body').html('Isi Donk, Malah Gak Di Isi ^_^');
		$('#isiDonk').modal('show');
	} else if (namaDepan === '' || namaBelakang === '') {
		$('#isiDonk div.modal-body').html('Isi Nama Depan Ama Belakang Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (isiPesan === '') {
		$('#isiDonk div.modal-body').html('Isi Pesannya Bro ^_^');
		$('#isiDonk').modal('show');
	} else {
		window.location.href = 'http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20Lengkap%20%3A%20' + namaDepan + ' ' + namaBelakang + '%0APesan%20%3A%20' + isiPesan;
	}
});

// kirim order
$('#pesan').on('click', function () {

	const namaDepan = $('#nama-depan').val();
	const namaBelakang = $('#nama-belakang').val();
	const barang = $('#barang').val();
	const alamat = $('#alamat').val();
	const kec = $('#kec').val();
	const kota = $('#kota').val();
	const kodePos = $('#kode-pos').val();

	$('#isiDonk h5.modal-title').html('Warning');

	if (namaDepan === '' || namaBelakang === '') {
		$('#isiDonk div.modal-body').html('Isi Nama Depan Ama Belakang Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (barang === '') {
		$('#isiDonk div.modal-body').html('Pilih Barang Nya Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (alamat === '') {
		$('#isiDonk div.modal-body').html('Isi Alamat Nya Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (kec === 'pilih') {
		$('#isiDonk div.modal-body').html('Isi Kecamatan Nya Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (kota === '') {
		$('#isiDonk div.modal-body').html('Isi Kota Nya Bro ^_^');
		$('#isiDonk').modal('show');
	} else if (kodePos === '') {
		$('#isiDonk div.modal-body').html('Isi Kode Pos Nya Bro ^_^');
		$('#isiDonk').modal('show');
	} else {
		window.location.href = 'http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20Lengkap%20%3A%20' + namaDepan + ' ' + namaBelakang + '%0ABarang%20%3A%20' + barang + '%0AAlamat%20%3A%20' + alamat + '%0AKecamatan%20%3A%20' + kec + '%0AKota%20%3A%20' + kota + '%0AKode%20Pos%20%3A%20' + kodePos;
	}
	// http://api.whatsapp.com/send?phone=6282216501151&text=
	// %0A baris baru
	// %20 spasi
	// %3A buat :
	// %3B buat ;
});


// validasi login pake javascript
$('#login').on('click', function () {
	const username = $('#username').val();
	const password = $('#password').val();

	$('#isiDonk h5.modal-title').html('Warning');

	if (username == '' && password == '') {
		$('#isiDonk div.modal-body').html('Masukkan Username Dan Passwordnya ^_^');
	} else if (username == "saepulfariz") {
		if (password == "123") {
			$('#isiDonk h5.modal-title').html('Login Berhasil');
			$('#isiDonk div.modal-body').html('Username Dan Password Benar ^_^');
			$('#isiDonk').modal('show');
			// ketika modal di close maka pindahkan ke halaman index
			$('#isiDonk').on('hide.bs.modal', function (e) {
				window.location.href = 'index.html';
			})
		} else {
			$('#isiDonk div.modal-body').html('Password Salah ^_^');
		}
	} else {
		$('#isiDonk div.modal-body').html('Username <b class="text-danger">' + username + '</b> Salah ^_^');
	}

	$('#isiDonk').modal('show');



	// alert('konek ' + username + password );
});