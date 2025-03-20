var item_menu_active = document.currentScript.getAttribute('item_menu_active');

about_inspired = '';
	getting_started = '';
		getting_started_1 = '';
		getting_started_2 = '';
		getting_started_3 = '';
		getting_started_4 = '';
		getting_started_5 = '';
		getting_started_6 = '';
		getting_started_7 = '';
	resources = '';
	forums = '';

projects = '';
	projects_planning = '';  
		projects_planning_1 = '';  
		projects_planning_2 = '';  
		projects_planning_3 = '';  
	managing_project = '';
		managing_project_1 = '';
		managing_project_2 = '';
		managing_project_3 = '';
		managing_project_4 = '';
		managing_project_5 = '';

about_blended = '';
	about_my_courses = '';
	about_course_design = '';
		about_course_home = '';
	about_course_administration = '';
		about_create_new_courses = '';
		about_manage_course_format = '';
		about_course_activities_resources = '';
		about_manage_course_categories = '';	

release_notes = '';


switch(item_menu_active){
	case 'about_inspired':
		about_inspired = 'active';
		break;
		case 'getting_started':
			getting_started = 'active';
			break;

			case 'getting_started_1':
				getting_started_1 = 'active';
				break;
			case 'getting_started_2':
				getting_started_2 = 'active';
				break;
			case 'getting_started_3':
				getting_started_3 = 'active';
				break;
			case 'getting_started_4':
				getting_started_4 = 'active';
				break;
			case 'getting_started_5':
				getting_started_5 = 'active';
				break;
			case 'getting_started_6':
				getting_started_6 = 'active';
				break;
			case 'getting_started_7':
				getting_started_7 = 'active';
				break;
		case 'resources':
			resources = 'active';
			break;
		case 'forums':
			forums = 'active';
			break;

	case 'projects':
		projects = 'active';
		break;
		case 'projects_planning':
			projects_planning = 'active';
			break;
			case 'projects_planning_1':
				projects_planning_1 = 'active';
				break;
			case 'projects_planning_2':
				projects_planning_2 = 'active';
				break;
			case 'projects_planning_3':
				projects_planning_3 = 'active';
				break;
		case 'managing_project':
			managing_project = 'active';
			break;
			case 'managing_project_1':
				managing_project_1 = 'active';
				break;
			case 'managing_project_2':
				managing_project_2 = 'active';
				break;
			case 'managing_project_3':
				managing_project_3 = 'active';
				break;
			case 'managing_project_4':
				managing_project_4 = 'active';
				break;
			case 'managing_project_5':
				managing_project_5 = 'active';
				break;
		case 'type_project':
			type_project = 'active';
			break;
			case 'type_project_1':
				type_project_1 = 'active';
				break;
			case 'type_project_2':
				type_project_2 = 'active';
				break;
	
	case 'about_blended':
		about_blended = 'active';
		break;
		case 'about_my_courses':
			about_my_courses = 'active';
			break;
		case 'about_course_design':
			about_course_design = 'active';
			break;
			case 'about_course_home':
				about_course_home = 'active';
				break;
		case 'about_course_administration':
			about_course_administration = 'active';
			break;
			case 'about_create_new_courses':
				about_create_new_courses = 'active';
				break;
			case 'about_manage_course_format':
				about_manage_course_format = 'active';
				break;
			case 'about_course_activities_resources':
				about_course_activities_resources = 'active';
				break;
			case 'about_manage_course_categories':
				about_manage_course_categories = 'active';
				break;

	case 'release_notes':
		release_notes = 'active';
		break;
}
document.write(`
<div class="box-menu-navigation-info">
	<ol>
		<li class="`+about_inspired+`"><a href="/07IN_04007b_about-inspired.html">About InspirED<sup>&trade;</sup></a></li>
		<li class="`+getting_started+` ml-3">
			<a href="/07IN_04005a_initial-sign-in.html">a. Getting Started</a>
			<ol>
				<li class="`+getting_started_1+`"><a href="/07IN_04005a_initial-sign-in.html">i. Initial Sign In</a></li>
				<li class="`+getting_started_2+`"><a href="/07IN_04006a_sign-in.html">ii. Sign In</a></li>
				<li class="`+getting_started_3+`"><a href="/07IN_04004a_forgot-password.html">iii. Forgot Password</a></li>
				<li class="`+getting_started_4+`"><a href="/07IN_04001a_home-screen.html">iv. Home</a></li>
				<li class="`+getting_started_5+`"><a href="/07IN_04003a_top-navigation.html">v. Top Navigation</a></li>
				<li class="`+getting_started_6+`"><a href="/07IN_04002a_left-navigation.html">vi. Left Navigation</a></li>
				<li class="`+getting_started_7+`"><a href="/07IN_04008_profile-screen.html">vii. Profile</a></li>
			</ol>
			
		</li>
		<li class="`+resources+` ml-3"><a href="/07IN_04009_resources.html">b. Resources</a></li>
		<li class="`+forums+` ml-3"><a href="/07IN_04010_forums.html">c. Forums</a></li>
		<li class="`+projects+`">
			<a href="/07IN_04011a_start-project.html">About CollaboratED<sup>&trade;</sup></a>
			<ol>
				<li class="`+projects_planning+` sub-third-level">
					<a href="/07IN_04011a_start-project.html">a. Project Planning</a>
					<ol>
						<li class="`+projects_planning_1+`"><a href="/07IN_04011a_start-project.html">i. Start Project</a></li>
						<li class="`+projects_planning_2+`"><a href="/07IN_04011b_create-an-interest.html">ii. Create an Interest</a></li>
						<li class="`+projects_planning_3+`"><a href="/07IN_04011c_partner-matching.html">iii. Partner Matching</a></li>
					</ol>
				</li>
				<li class="`+managing_project+` sub-third-level">
					<a href="/07IN_04012a_my-projects.html">b. Managing Projects</a>
					<ol>
						<li class="`+managing_project_1+`"><a href="/07IN_04012a_my-projects.html">i. My Projects</a></li>
						<li class="`+managing_project_2+`"><a href="/07IN_04012b_project-milestones.html">ii. Project Milestones</a></li>
						<li class="`+managing_project_3+`"><a href="/07IN_04012c_file-management.html">iii. File Management</a></li>
						<li class="`+managing_project_4+`"><a href="/07IN_04012d_project-discussion.html">iv. Project Discussion</a></li>
						<li class="`+managing_project_5+`"><a href="/07IN_04012e_access-completed-projects.html">v. Access Completed Project</a></li>
					</ol>
				</li>
				
			</ol>
		</li>

		<li class="`+about_blended+`">
			<a href="#">About BlendED<sup>&trade;</sup></a>
			<ol>
				<li class="`+about_my_courses+` sub-third-level">
					<a href="#">a. My Courses</a>
				</li>
				<li class="`+about_course_design+` sub-third-level">
					<a href="#">b. Course Design</a>
					<ol>
						<li class="`+about_course_home+`"><a href="#">i. Course Home</a></li>
					</ol>
				</li>
				<li class="`+about_course_administration+` sub-third-level">
					<a href="#">c. Course Administration</a>
					<ol>
						<li class="`+about_create_new_courses+`"><a href="#">i. Create New Courses</a></li>
						<li class="`+about_manage_course_format+`"><a href="/07IN_04101_course-home.html">ii. Manage Course Format</a></li>
						<li class="`+about_course_activities_resources+`"><a href="#">iii. Course Activities and Resources</a></li>
						<li class="`+about_manage_course_categories+`"><a href="#">iv. Manage Course Categories</a></li>
					</ol>
				</li>
			</ol>
		</li>
		
		<li class="`+release_notes+`"><a href="/07IN_00414_release-updates.html">Release Updates</a></li>
	</ol>
</div>
`);