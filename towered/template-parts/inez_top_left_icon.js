document.write(`
<div class="wrap-hello-icons">
	<div>
		<div class="top-icon top-icon-badges">
			<div class="btn-group btn-group-menu">
				<a href="javascript:void(0);" type="button" class="top-icon-fa top-icon-award" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="note">
						<span class="outer">1</span>
					</span>
				</a>
				<div class="dropdown-menu">
					<div class="toltip toltip-overlay p-3">
						<div class="toltip-header">
							<div class="toltip-title icon-fa-box icon-award pl-4">
								Badges
							</div>
							<div class="toltip-close">
								<a href="#" data-dismiss="modal"><i class="fa fa-times-circle"></i></a>
							</div>
						</div>
						<div class="toltip-body text-center">
							<div class="wrap-icon">
								<i class="fad fa-chart-network icon-size-120 mt-3 mb-3" style="color:#6C389B;"></i>
							</div>
							<p>Congratulations! You Earned a Networking Badge.</p>
						</div>
						<div class="toltip-footer text-center">
							<a href="#" class="btn btn-blue m-auto">View More</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="top-icon ">
			<div class="btn-group btn-group-menu">
				<a href="javascript:void(0);" class="top-icon-fa top-icon-bell" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="note">
						<span class="outer">3</span>
					</span>
				</a>
				<div class="dropdown-menu">
					<div id="notification-toltip" class="toltip">
						<div class="toltip-body menu-scroll">
							<div id="toltip-item-1" class="toltip-item toltip-overlay d-flex">
								<div class="status-email"></div>
								<span class="date-time-notification">now</span>
								<div class="toltip-image">
									<img src="images/Bradley.png" width="48">
								</div>
								<div class="toltip-text">
									<p>Bradley has started the Ethics in Multinational Management project</p>
								</div>
							</div>
							<div id="toltip-item-2" class="toltip-item toltip-overlay d-flex">
								<div class="status-email"></div>
								<span class="date-time-notification">11m ago</span>
								<div class="toltip-image">
									<img src="images/Bradley.png" width="48">
								</div>
								<div class="toltip-text">
									<p>Bradley sent you and invitation</p>
								</div>
							</div>
							<div id="toltip-item-3" class="toltip-item toltip-overlay d-flex">
								<div class="status-email"></div>
								<span class="date-time-notification">52m ago</span>
								<div class="toltip-image">
									<img src="images/randy.png" width="48">
								</div>
								<div class="toltip-text">
									<p>Missed Call from Randy Wolff</p>
								</div>
							</div>
							<div id="toltip-item-10" class="toltip-item toltip-overlay d-flex justify-content-center pt-2 pb-2">
								<a href="#" class="btn btn-blue">MARK ALL READ</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="top-icon top-icon-message">
			<div class="btn-group btn-group-menu">
				<a href="javascript:void(0);" class="top-icon-fa top-icon-comment" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="note">
						<span class="outer">1</span>
					</span>
				</a>
				<div class="dropdown-menu">
					<div id="email-toltip" class="toltip">
						<div class="toltip-body  menu-scroll">
							<div id="toltip-item-1" class="toltip-item d-flex position-relative p-0 toltip-overlay border-radius-5">
								<a href="#" class="close-times" data-id="1"><i class="fas fa-times-circle"></i></a>
								<div class="status-email"></div>
								<div class="toltip-text p-2 pl-4">
									<div class="toltip-header">
										<div class="toltip-header-left p0">
											<p>Bradley Dexter</p>
										</div>
										<div class="toltip-header-right text-right p0">
											<p>2019-10-13 </p>
										</div>
									</div>
									<div class="toltip-content p0">
										<p>Hello Inez Campos, Bus.D., I saw your credentials and interests on CollaboratE... </p>
									</div>
								</div>
							</div>
						</div>
						<div class="wrap-view-all-btn toltip-overlay border-radius-5 p-3 text-center">
							<a href="#" class="btn btn-blue btn-sm">View All Messages</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
	<div class="top-icon top-icon-user hello">
		<div class="btn-group btn-group-menu">
			<a href="javascript:void(0);" class="btn-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	  	      <img class="img-circle img-border-blue" src="images/Inez.png" alt="">
				<span class="user-name">Hello, Inez</span>
			</a>
			<div class="dropdown-menu">
				<div id="notification-toltip" class="toltip">
					<div id="user-toltip" class="toltip menu-toltip toltip-overlay">
						<ul>
							<li><a href="bradley profile 1 screen.html">My Profile</a></li>
							<li><a href="#">Settings & Privacy</a></li>
							<li><a id="btn-sign-out" href="javascript:void(0);" data-toggle="modal" data-target="#signOutModal">Sign Out</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`);