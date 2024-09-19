/** @type {import('tailwindcss').Config} */
export default {
  /* 扫描这些文件中使用的所有类名，并将这些类名包含到最终生成的 CSS 文件中。
  检查根目录下的 index.html 文件中的类名。
  检查 src 目录及其子目录下的所有 .vue、.js 和 .ts 文件中的类名。*是一个通配符，表示所有子目录中的文件。 */
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],

  // 配置全局 CSS 主题，这些颜色和字体将在整个项目中可用。
  theme: {
    // extend用于扩展默认主题的功能，保留 Tailwind 默认样式的基础上，灵活地添加和修改自己的样式
    extend: {
      colors: {
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E1B",
        "dire-wolf": "#292727",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    }
  },
  plugins: [],
}

