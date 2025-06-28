import type { Preview } from '@storybook/react-vite'
// import './s.css'; // Import global styles
import "../src/tailwind.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;