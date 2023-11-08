/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fromTop: {
          from: { transform: 'translateY(-20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        },
        fromLeft: {
          from: { transform: 'translateX(-20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        fromTop: 'fromTop 0.8s 9.3s backwards',
        fromLeft: 'fromLeft 1s 0.3s backwards'
      }
    }
  },
  plugins: []
}
