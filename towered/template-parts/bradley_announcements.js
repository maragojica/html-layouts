document.write(`							
<section class="row row-custom announcements mb-4">
	<div class="col-lg-12">
		<div class="box box-border-radius box-shadow bg-blue-3 w-100 box-collapse-announce tile-not-draggable">
			<div class="d-flex justify-content-between position-relative align-items-center">
				<h2 class="box-subhead icon-fa-box icon-bullhorn mb-0">Announcements</h2>
				<div class="box-wrap-announce mr-3">
					<marquee behavior="scroll" direction="left">
					<span>Welcome to CollaboratED<sup>&trade;</sup>, the professional engagement and faculty development solution within the InspirED<sup>&trade;</sup> platform</span>
					<span>CBIE Annual Conference</span>
					<span>AIEA 2022 Annual Conference Call for Proposals </span>
					<span>AAPLAC 2021 Annual Conference Call for Proposals</span>
					<span>College Board Forum 2021</span>
					<span>2021 CIEE International Education and Exchange Summit</span>
					<span>Conference of the Americas on International Education</span>
					<span>International Virtual Exchange Conference (IVEC)</span>
					<span>AHEA Membership Webinar</span>
					</marquee>
				</div>
				<div class="d-flex">
					<!--<a class="btn btn-blue mr-2" href="#">Manage</a> -->
					<a class="btn btn-blue mr-5 btn-collapse-announce" data-toggle="collapse" href="#collapseAnnounce" role="button" aria-expanded="false" aria-controls="collapseExample">
						<span class="s-expan">Expand</span><span class="s-collap">Collapse</span>
					</a>
					<a href="javascript:void(0);" class="icon-setting icon-box btn-menu"><i class="fas fa-cog"></i></a>
				</div>
			</div>
			<link rel="stylesheet" href="css/owl.carousel.min.css">
			<link rel="stylesheet" href="css/owl.theme.default.min.css">
			<script src="js/owl.carousel.js"></script>
			<script>
				jQuery(document).ready(function() {
					jQuery('.owl-carousel').owlCarousel({
						singleItem:true,
						autoplay:true,
						autoplayTimeout:5000,
						autoplayHoverPause:true,
						loop: true,
						margin: 10,
						navigation: true,
						responsiveClass: true,
						responsive: {
							1000: {
								items: 1,
								nav: true,
								loop: true,
								margin: 20
							},
							300: {
								items: 1,
								nav: true,
								loop: true,
								margin: 20
							}
						}
					});
					jQuery(".owl-dots").appendTo("#dots-number");
				});
			</script>
			<div id="collapseAnnounce" style="max-height:1px;overflow:hidden !important;">
				<div id="wrap-owl-announcement" class="no-border">
					<div id="owl-announcement" class="owl-carousel owl-theme">
						<div class="item">
							<h2>Welcome to CollaboratED<sup>&trade;</sup>, the professional engagement and faculty development solution within the InspirED<sup>&trade;</sup> platform.</h2>
							<p class="sm">
								In CollaboratED, you can edit and add data to your My Profile area, participate in Forums based on timely topics, and begin working in your collaboration project from your My Projects tile. Help build the community by inviting a colleague to apply for AHEA membership. Send them this link today! <a href="https://www.ahealliance.org/join-ahea/" target="_blank">https://www.ahealliance.org/join-ahea/</a>.
							</p>
						</div>
						<div class="item">
							<h2>CBIE Annual Conference</h2>
							<h3>Start Date: 15 November 2021<br>
							 End Date: 19 November 2021</h3>
							<h4>Virtual Conference</h4>
							<p class="sm">
								Canada's International Education Conference is the annual conference for Canada. CBIE2021 will bring together 1000 international education leaders, professionals, and stakeholders. To learn more, click <a href="#" target="_blank">here</a>.
							</p>
						</div>
						<div class="item">
							<h2>AIEA 2022 Annual Conference Call for Proposals</h2>
							<h3>Start Date: 21 February 2022 <br>
							End Date: 23 February 2022</h3>
							<h4>New Orleans, LA, USA</h4>
							<p class="sm">
								The Association of International Education Administrators (AIEA) invites the submission of proposals for its 2022 conference. For more information click <a href="#" target="_blank">here</a>.
							</p>
						</div>
						<div class="item">
							<h2>AAPLAC 2021 Annual Conference Call for Proposals</h2>
							<h3>Start Date: 27 October 2021<br>
							 End Date: 30 October 2021</h3>
							<h4>Tucson, AZ, USA</h4>
							<p class="sm">
								The Association of Academic Programs in Latin America and the Caribbean (AAPLAC) invites the submission of proposals in both Spanish and English for the 2021 conference. To submit a proposal click <a href="#" target="_blank">here</a>.
							</p>
						</div>
						<div class="item">
							<h2>College Board Forum 2021</h2>
							<h3>Start Date: 27 October 2021<br>
							 End Date: 29 October 2021</h3>
							<h4>Virtual Conference</h4>
							<p class="sm">
								The College Board Forum brings together dynamic professionals and thought leaders across disciplines to address access and success issues that challenge—and inspire—educators at all levels and in all professions. For registration information, click <a href="#" target="_blank">here</a>.
							</p>
						</div>
						<div class="item">
							<h2>2021 CIEE International Education and Exchange Summit</h2>
							<h3>Start Date: 1 November 2021<br>
							 End Date: 5 November 2021</span></h3>
							<h4>Virtual Conference</h4>
							<p class="sm">
								The Exchange Summit will bring together colleagues from around the world who work not just in study abroad, but in cultural exchange programs of all kinds. For more information, please visit <a href="https://globaleducationconference.ciee.org/" target="_blank">https://globaleducationconference.ciee.org/</a>.
							</p>
						</div>
						<div class="item">
							<h2>Conference of the Americas on International Education</h2>
							<h3>Start Date: 19 October 2021<br>
							 End Date: 22 October 2021</h3>
							<h4>Virtual Conference</h4>
							<p class="sm">
								At CAEI we come together to strengthen contacts, exchange experiences, and chart the future of academic cooperation in the region. To learn more, click <a href="#" target="_blank">here</a>.
							</p>
						</div>
						<div class="item">
							<h2>International Virtual Exchange Conference (IVEC)</h2>
							<h3>Start Date: 27 October 2021<br>
							 End Date: 29 October 2021</h3>
							<h4>Virtual Conference</h4>
							<p class="sm">
								This year's event is an online experience hosted by SUNY COIL and Drexel University. For more information, go to <a href="https://iveconference.org/" target="_blank">https://iveconference.org/</a>.
							</p>
						</div>
						<div class="item">
							<h2>AHEA Membership Webinar</h2>
							<h3>Start Date: 06 October 2021 11:00 AM ET<br>
							 End Date: 06 October 2021 12:00 PM ET</h3>
							<h4>Virtual Webinar</h4>
							<p class="sm">
								CONAHEC members and AHEA partnered together to pilot test the InspirED™ platform. Three pairs of Faculty Fellows from six institutions exercised the ability to develop courses in an online, collaborative workspace. Hear from participants in this upcoming event.
							</p>
						</div>
					</div>
				</div>
				<div id="dots-number">
				</div>
			</div>
		</div>
	</div>
</section>
<script>
jQuery(window).on('load', function(){
	jQuery('#collapseAnnounce').addClass('collapse');
	jQuery('#collapseAnnounce').removeAttr('style');
});
</script>
`);