// event pada saat link di klik $ itu jquery
$('.page-scroll').on('click', function(){
	
	// difunction di tambahkan function(e) buat bajak a href dan diakhir di tambahkan e.preventDefault();
	
	/* console.log('ok'); buat lihatin ok ketika di klik di console log di browser pc */
	
	// ambil isi href //this salah satu yng bersangkutan 
	var Tujuan = $(this).attr('href'); 
	/* console.log(href); // buat lihatin hasil ketika di ambil hrefnya */
	// tangkap elemen yng bersangkutan
	var elemenTujuan = $(Tujuan);
	/// console.log(elemenTujuan); // Menangkap Section elemen section#about.about
	
	/// console.log(elemenTujuan.offset().top); // buat nampilkan jarak section#about.about ke top atau yng paling atas
	/// 500 1100 16000
	
	/// $('body').scrollTop tergantung ke scroll top
	
	/// console.log($('body').scrollTop()); // buat lihat jarak atas section ke top
	
	// e.preventDefault();
	
	// pindahkan scroll
	//// $('body').scrollTop('700'); pasti pidahnya ke ukuran 700
	
	// $('body').scrollTop(elemenTujuan.offset().top()); original
	
	$('body').animate({
			scrollTop: elemenTujuan.offset().top - 50
		}, 1000, 'easeInExpo');
		
		// top - 50 buat ada jarak di kurangin 50px
		///1000 buat satuan waktu ms
		/// dafault animasi "swing" dan yng satu lagi "linear"
		// jquery easing gsgd.co.uk

	
	e.preventDefault();
	});