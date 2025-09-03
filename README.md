React Image Slider
A responsive and dynamic image slider built with React.js and Tailwind CSS.
This project is a fully functional image carousel designed to display a series of images with smooth transitions, manual navigation, and an automatic autoplay feature. It is built with a focus on clean, modular component design and a responsive user experience.

🚀 **[Live Demo Available Here!](https://uminteractive.netlify.app/)**

📸 Key Features
Dynamic Image Display: Displays a series of Harry Potter-themed images from a data array.

Autoplay Functionality: Images automatically transition every few seconds.

Manual Navigation: "Previous" and "Next" arrows allow users to browse slides.

User-Centric Autoplay: Autoplay temporarily pauses on user interaction and resumes after a short delay, ensuring a seamless experience.

Image Indicators: A series of dots below the slider indicates the current image and allows for quick navigation.

Fluid Transitions: Uses CSS transform: translateX for a smooth and fluid horizontal sliding effect between images.

🛠️ Technology Stack
React.js: The core framework for building a component-based user interface. It leverages Hooks like useState for state management, useEffect for handling side effects like autoplay, and useRef to manage the setInterval instance.

Tailwind CSS: A utility-first CSS framework for rapid UI development. It is used for responsive layouts, dynamic sizing, and applying smooth transitions.

JavaScript (ES6+): Powers the application's logic, including handling state updates, event handlers, and data processing.

React Icons: Used to provide the navigation icons (FcPrevious and FcNext).

🚀 Getting Started
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/sayaliwagal/imageSlider

Navigate to the project directory:

cd [your-project-folder]

Install dependencies:

npm install
# or
yarn install

Start the development server:

npm start
# or
yarn start

The application will now be running on http://localhost:3000.

🧩 Project Structure & Components
The application is structured into the following key components:

App.js: The root component. It manages the main state of the slider (currentImageIndex), controls the autoplay logic, and renders the Slider, Arrow, and Dots components.

Slider.js: Renders a single image from the data array. It handles displaying the image and includes an onError fallback for broken image links.

Arrow.js: Renders the "Previous" and "Next" navigation arrows. It receives onClick functions as props from the App component to trigger slide changes.

Dots.js: Renders the dot indicators for each image, showing the user their current position in the slider.

📱 Responsive Design
The slider is designed to be fully responsive, ensuring a great user experience on all devices, from mobile phones to desktop monitors.

The navigation arrows are a prime example of this responsiveness. The parent container is positioned with left-0 and right-0 and uses justify-between to always push the arrows to the outer edges. Sizing and spacing are handled with Tailwind's responsive prefixes:

className="absolute top-1/2 left-0 right-0 flex items-center justify-between px-2 sm:px-4 z-20"

This ensures the arrows are always visible and have an appropriate size and tap target regardless of the screen width.

✨ Future Enhancements
Add support for touch gestures (swiping) on mobile devices.

Implement lazy loading for images to improve initial load performance.

Add dynamic captions or text overlays on top of each image.

Introduce a settings panel to allow users to customize autoplay speed.

Include a thumbnail navigation component to replace the dots.