document.write(`
<nav class="navbar navbar-help navbar-light justify-content-between">
	<div class="dropdown-custom w-100">
		<div class="d-flex justify-content-between align-items-center">
			<div>
				<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink">
					<i class="far fa-bars"></i>
				</a>
			</div>
			<div>
				<a href="#"><img src="images/INSPIRED-logo-dark.png" width="150" /></a>
			</div>
		</div>
				
		<div class="dropdown-menu" id="main-menu-sidebar">
			<a class="dropdown-item dropdown-item-parent" data-toggle="collapse" href="#about_inspired" role="button" aria-expanded="false" aria-controls="about_inspired">
				<span class="icon-regular icon-plus-circle pr-1"></span>About InspirED<sup>&trade;</sup>
			</a>
			<div class="collapse" id="about_inspired" data-parent="#main-menu-sidebar">
				<div class="card card-body submenu-card">
					<a class="dropdown-item dropdown-item-parent dropdown-item-child" data-toggle="collapse" href="#getting_started" role="button" aria-expanded="false" aria-controls="getting_started">
						<span class="icon-regular icon-plus-circle pr-1"></span>Getting Started
					</a>
					<div class="collapse" id="getting_started" data-parent="#collapseProj">
						<div class="card card-body submenu-card">
							<a class="dropdown-item dropdown-item-child" href="/07IN_04005a_initial-sign-in.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Initial Sign In</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04006a_sign-in.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Sign In</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04004a_forgot-password.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Forgot Password</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04001a_home-screen.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Home</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04003a_top-navigation.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Top Navigation</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04002a_left-navigation.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Left Navigation</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04008_profile-screen.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Profile</a>
						</div>
					</div>

					<a class="dropdown-item dropdown-item-child" href="/07IN_04009_resources.html"><span class="icon-regular icon-file pr-2"></span>Resources</a>
					<a class="dropdown-item dropdown-item-child" href="/07IN_04010_forums.html"><span class="icon-regular icon-file pr-2"></span>Forums</a>
				</div>
			</div>


			<a class="dropdown-item dropdown-item-parent" data-toggle="collapse" href="#collapseProj" role="button" aria-expanded="false" aria-controls="collapseProj">
				<span class="icon-regular icon-plus-circle pr-1"></span>About CollaboratED<sup>&trade;</sup>
			</a>
			<div class="collapse" id="collapseProj" data-parent="#main-menu-sidebar">
				<div class="card card-body submenu-card">
					<a class="dropdown-item dropdown-item-parent dropdown-item-child" data-toggle="collapse" href="#collapseProjPlan" role="button" aria-expanded="false" aria-controls="collapseProjPlan">
						<span class="icon-regular icon-plus-circle pr-1"></span>Project Planning
					</a>
					<div class="collapse" id="collapseProjPlan" data-parent="#collapseProj">
						<div class="card card-body submenu-card">
							<a class="dropdown-item dropdown-item-child" href="/07IN_04011a_start-project.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Start Project</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04011b_create-an-interest.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Create an Interest</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04011c_partner-matching.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Partner Matching</a>
						</div>
					</div>
					<a class="dropdown-item dropdown-item-parent dropdown-item-child" data-toggle="collapse" href="#collapseMangProj" role="button" aria-expanded="false" aria-controls="collapseMangProj">
						<span class="icon-regular icon-plus-circle pr-1"></span>Managing Projects
					</a>
					<div class="collapse" id="collapseMangProj" data-parent="#collapseProj">
						<div class="card card-body submenu-card">
							<a class="dropdown-item dropdown-item-child" href="07IN_04012a_my-projects.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>My Projects</a>
							<a class="dropdown-item dropdown-item-child" href="07IN_04012b_project-milestones.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Project Milestones</a>
							<a class="dropdown-item dropdown-item-child" href="07IN_04012c_file-management.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>File Management</a>
							<a class="dropdown-item dropdown-item-child" href="07IN_04012d_project-discussion.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Project Discussion</a>
							<a class="dropdown-item dropdown-item-child" href="07IN_04012e_access-completed-projects.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Access Completed Project</a>
						</div>
					</div>
					
				</div>
			</div>

			<a class="dropdown-item dropdown-item-parent" data-toggle="collapse" href="#about_blended" role="button" aria-expanded="false" aria-controls="about_blended">
				<span class="icon-regular icon-plus-circle pr-1"></span>About BlendED<sup>&trade;</sup>
			</a>
			<div class="collapse" id="about_blended" data-parent="#main-menu-sidebar">
				<div class="card card-body submenu-card">
					<a class="dropdown-item dropdown-item-child" href="#">
						<span class="icon-regular icon-chevron-circle-right pr-2"></span>My Courses
					</a>
					<a class="dropdown-item dropdown-item-parent dropdown-item-child" data-toggle="collapse" href="#course_design" role="button" aria-expanded="false" aria-controls="course_design">
						<span class="icon-regular icon-plus-circle pr-1"></span>Course Design
					</a>
					<div class="collapse" id="course_design" data-parent="#collapseProj">
						<div class="card card-body submenu-card">
							<a class="dropdown-item dropdown-item-child" href="#"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Course Home</a>
						</div>
					</div>

					<a class="dropdown-item dropdown-item-parent dropdown-item-child" data-toggle="collapse" href="#course_administration" role="button" aria-expanded="false" aria-controls="course_administration">
						<span class="icon-regular icon-plus-circle pr-1"></span>Course Administration
					</a>
					<div class="collapse" id="course_administration" data-parent="#collapseProj">
						<div class="card card-body submenu-card">
							<a class="dropdown-item dropdown-item-child" href="#"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Create New Courses</a>
							<a class="dropdown-item dropdown-item-child" href="/07IN_04101_course-home.html"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Manage Course Format</a>
							<a class="dropdown-item dropdown-item-child" href="#"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Course Activities and Resources</a>
							<a class="dropdown-item dropdown-item-child" href="#"><span class="icon-regular icon-chevron-circle-right pr-2"></span>Manage Course Categories</a>
						</div>
					</div>
				</div>
			</div>
			
			<a class="dropdown-item" href="/07IN_00414_release-updates.html"><span class="icon-regular icon-file pr-2"></span>Release Updates</a>
		</div>
	</div>
	<!--<a class="navbar-brand pt-0 pb-0" href="20IN_02301.html">
		<img src="images/INSPIRED-logo-dark.png" width="150" class="d-inline-block align-top" alt="Logo">
	</a>-->
</nav>
`);