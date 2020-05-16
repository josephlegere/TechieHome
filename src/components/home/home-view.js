import { html } from "lit-html";

export default (props) => html`
  	<ul id="main-side-navi" class="sidenav">
		<li>
			<div class="user-view">
				<div class="background">
					<img src="images/BG_1.jpg">
				</div>
				<a href="#user"><img class="circle" src="images/BG_2.jpg"></a>
				<a href="#name"><span class="white-text">Sign-In</span></a>
			</div>
		</li>
		<div id="side-menu-items">
		</div>
		<li><div class="divider"></div></li>
	</ul>
	<nav>
		<div class="nav-wrapper">

			<a href="#" data-target="main-side-navi" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<a href="#" data-target="main-side-navi" class="sidenav-trigger right"><i class="material-icons">shopping_cart</i></a>

			<ul id="navi-menu-items" class="hide-on-med-and-down">
				<li><a href="collapsible.html">Sign-In</a></li>
			</ul>
			<ul class="right hide-on-med-and-down">
				<li><a href="#"><i class="material-icons right">shopping_cart</i></a></li>
			</ul>
		</div>
	</nav>

	<div id="content-display">
	</div>

	<footer class="page-footer">
		<div class="container">
			<div class="row">
			<div class="col l6 s12">
				<h6 class="white-text"><b>Footer Content</b></h6>
				<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
			</div>
			<div class="col l4 offset-l2 s12 center">
				<h5 class="white-text">Links</h5>
				<ul>
					<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
					<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
				</ul>
			</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container center">
				© 2019 TechieHome, All rights reserved.
			</div>
		</div>
	</footer>
`;