// JavaScript Document

$(document).ready(function(){
	var myLatlng = new google.maps.LatLng(37.267103, 127.002946);
	var mapOptions = {
			zoom: 17,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map,
			  title: "그린컴퓨터아트학원 수원캠퍼스"
	});
 });