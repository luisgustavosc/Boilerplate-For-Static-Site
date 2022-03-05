'use strict';

// Packages
import 'bootstrap';

// Sass Style
import '../sass/app.scss';

// Custom JS code
import { Helpers } from './utils/Helpers';
import { MobileMenu } from './components/MobileMenu';

const App = {
	init: function() {
		Helpers.init();
		MobileMenu.init();
	}
}

document.addEventListener('DOMContentLoaded', () => {
  App.init();
}, false);
