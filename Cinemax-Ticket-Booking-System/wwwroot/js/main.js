$(document).ready(function() {
  const reservatedSeats = [];

  function SetCookie(c_name,value,expiredays) {
      var cookieValue = encodeURIComponent(value);
      const exdate = new Date()
		exdate.setDate(exdate.getDate()+expiredays)
      document.cookie = c_name + "=" + cookieValue +
          ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path =/;domain=localhost")
	};

  $(".room-seats__seat").click(function() {

    var reservation = {
      showId: 0,
      col: 0,
      row: 0,
      isPurchased: false
    }

    $(this).addClass("choosen");
    $(this).css('background-image', 'url("../../image/seat_choosen.svg")');
    reservation.col = $(this).find(".room-seats__seat-number").text();
    reservation.row = $(this).parent().find(".room-seats__row-number").text();
    reservation.showId = $(".room-seats__showId").text();
    reservation.isPurchased = false;

    if($(this).find(".seat-reservation-hidden-value").text() !== "-1") {
      reservation.isPurchased = true;
    };

    reservatedSeats.push(reservation);
  });

  $(".testAction").click(function() {
    SetCookie("Reservation", JSON.stringify(reservatedSeats), 1);
    reservatedSeats = [];
  });
});