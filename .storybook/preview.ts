import type { Preview } from '@storybook/react-vite'
// import '.'; // Import global styles
import "../src/tailwind.css"

const preview: Preview = {
  parameters: {

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      backgrounds: {
        default: "dark",
        values: [
          { name: "light", value: "#ffffff" },
          { name: "dark", value: "#1e1e1e" },
        ],
      },
    },

  },


};

export default preview;