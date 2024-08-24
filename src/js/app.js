'use strict';

// Packages
import 'bootstrap';

// Sass Style
import '../sass/app.scss';

// Custom JS code
import { Helpers } from './utils/Helpers';
import { MobileMenu } from './components/MobileMenu';
import { ColorModeToggle } from './components/ColorModeToggle';

const App = {
	init: function() {
		Helpers.init();
		MobileMenu.init();
		ColorModeToggle.init();
	}
}

document.addEventListener('DOMContentLoaded', () => {
  App.init();
}, false);
