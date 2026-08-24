# Interactive Card Details Form

A clean, interactive credit card form component built with React and Tailwind CSS. The app features real-time validation, multi-screen state transitions, custom input formatting, and responsive layout scaling for modern web apps.

## 🔗 Links

- **Live Site:** [View Live Demo](https://card-details-form-navy.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/iviktorry/card-details-form)

---

## 🛠 My Process

### Built With

- **React 19** — Functional components, state management, and conditional rendering
- **Tailwind CSS** — Utility-first styling with responsive Flexbox layouts
- **Vite** — Fast, modern frontend build tool and dev server

### 🧠 What I Learned & Practiced

Building this project allowed me to strengthen my core React skills, particularly around state flow, form validation, and complex component architecture:

- **Lifting State Up Pattern:** Solved state sharing across separate UI sections (card preview vs. input form) by elevating state to a common parent component (`App`), passing state down via props.
- **Complex Object State with `useState`:** Managed multi-field form inputs and errors using JavaScript objects as state (`useState({})`), updating them dynamically using property spread operators (`...prev`) and dynamic computed keys (`[name]: value`).
- **Conditional Screen Rendering:** Implemented clean view-switching between the active form and the completion ("Thank You") screen based on a boolean state flag (`isFinished`).
- **Form Data Extraction & Validation:** Extracted input values efficiently using the native `FormData` and `Object.fromEntries()`, combined with standard Regex for format checks and error handling.
- **Custom Input Formatting:** Formatted credit card numbers on submit by grouping digits into 4-character blocks separated by spaces for realistic card presentation.

---

## 🙋‍♀️ Author

- **GitHub:** [@iviktorry](https://github.com/iviktorry)
- **Frontend Mentor** — [@iviktorry](https://www.frontendmentor.io/profile/iviktorry)
