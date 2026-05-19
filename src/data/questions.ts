
export interface QuestionItem {
  question: string;
  keywords: string[];
}

export const questions = {
  react: {
    easy: [
      {
        question: "What is React?",
        keywords: ["library", "ui", "components"],
      },
      {
        question: "What is JSX?",
        keywords: ["javascript", "xml", "syntax"],
      },
      {
        question: "What is a component in React?",
        keywords: ["reusable", "ui", "function"],
      },
      {
        question: "What is useState used for?",
        keywords: ["state", "rerender", "hooks"],
      },
      {
        question: "What are props in React?",
        keywords: ["data", "parent", "child"],
      },
      {
        question: "What is the virtual DOM?",
        keywords: ["virtual dom", "diffing", "performance"],
      },
      {
        question: "What is conditional rendering?",
        keywords: ["condition", "render", "ternary"],
      },
      {
        question: "What is useEffect?",
        keywords: ["side effects", "dependency", "cleanup"],
      },
      {
        question: "What is a React Hook?",
        keywords: ["hooks", "state", "lifecycle"],
      },
      {
        question: "What is the purpose of keys in React lists?",
        keywords: ["keys", "lists", "unique"],
      },
      {
        question: "Difference between state and props?",
        keywords: ["mutable", "immutable", "data"],
      },
      {
        question: "How do you handle events in React?",
        keywords: ["events", "onclick", "handler"],
      },
      {
        question: "What is controlled component?",
        keywords: ["form", "state", "input"],
      },
      {
        question: "What is uncontrolled component?",
        keywords: ["refs", "dom", "form"],
      },
      {
        question: "What does useRef do?",
        keywords: ["dom", "mutable", "reference"],
      },
      {
        question: "What is fragment in React?",
        keywords: ["fragment", "wrapper", "dom"],
      },
      {
        question: "How do you render lists in React?",
        keywords: ["map", "lists", "keys"],
      },
      {
        question: "What is lifting state up?",
        keywords: ["shared state", "parent", "children"],
      },
      {
        question: "What is React Router?",
        keywords: ["routing", "navigation", "spa"],
      },
      {
        question: "Why do React components re-render?",
        keywords: ["state", "props", "rerender"],
      },
      {
        question: "What is useContext?",
        keywords: ["context", "global state", "provider"],
      },
      {
        question: "What is prop drilling?",
        keywords: ["props", "nested", "components"],
      },
      {
        question: "What is the difference between functional and class components?",
        keywords: ["hooks", "class", "functional"],
      },
      {
        question: "How do forms work in React?",
        keywords: ["forms", "state", "submit"],
      },
      {
        question: "What is synthetic event in React?",
        keywords: ["synthetic event", "browser", "wrapper"],
      },
      {
        question: "How do you pass data between components?",
        keywords: ["props", "parent", "child"],
      },
      {
        question: "What is default export in React files?",
        keywords: ["export", "component", "module"],
      },
      {
        question: "What is named export?",
        keywords: ["named export", "module", "import"],
      },
      {
        question: "How do you style React applications?",
        keywords: ["css", "tailwind", "styled components"],
      },
      {
        question: "What is inline styling in React?",
        keywords: ["inline", "styles", "object"],
      },
      {
        question: "What are React DevTools?",
        keywords: ["debugging", "components", "chrome"],
      },
      {
        question: "What is hydration in React?",
        keywords: ["hydration", "server", "client"],
      },
      {
        question: "Why should components be reusable?",
        keywords: ["reusable", "maintainable", "modular"],
      },
      {
        question: "What is state immutability?",
        keywords: ["immutable", "state", "spread"],
      },
      {
        question: "What does map function do in React rendering?",
        keywords: ["map", "array", "render"],
      },
      {
        question: "How do you conditionally apply classes in React?",
        keywords: ["classnames", "condition", "styles"],
      },
      {
        question: "What is React Strict Mode?",
        keywords: ["strict mode", "development", "warnings"],
      },
      {
        question: "What is component composition?",
        keywords: ["composition", "children", "reusability"],
      },
      {
        question: "What is children prop in React?",
        keywords: ["children", "nested", "components"],
      },
      {
        question: "How do you update state in React?",
        keywords: ["setstate", "hooks", "rerender"],
      },
      {
        question: "What is one-way data flow?",
        keywords: ["one way", "data flow", "props"],
      },
      {
        question: "What is memoization in React?",
        keywords: ["memoization", "performance", "memo"],
      },
      {
        question: "What does React.memo do?",
        keywords: ["memo", "performance", "rerender"],
      },
      {
        question: "What is useMemo?",
        keywords: ["usememo", "memoization", "performance"],
      },
      {
        question: "What is useCallback?",
        keywords: ["usecallback", "memoization", "function"],
      },
      {
        question: "How do you fetch data in React?",
        keywords: ["fetch", "api", "useeffect"],
      },
      {
        question: "What is cleanup function in useEffect?",
        keywords: ["cleanup", "useeffect", "unsubscribe"],
      },
      {
        question: "What are custom hooks?",
        keywords: ["custom hooks", "reusable", "logic"],
      },
      {
        question: "Why is React popular?",
        keywords: ["components", "performance", "ecosystem"],
      },
      {
        question: "What is declarative UI?",
        keywords: ["declarative", "ui", "state"],
      },
    ],

    medium: [
      {
        question: "Explain useEffect dependency array.",
        keywords: ["dependency", "rerender", "effect"],
      },
      {
        question: "Difference between useMemo and useCallback?",
        keywords: ["memoization", "function", "performance"],
      },
      {
        question: "How does React reconciliation work?",
        keywords: ["reconciliation", "diffing", "virtual dom"],
      },
      {
        question: "What causes unnecessary re-renders?",
        keywords: ["rerender", "props", "performance"],
      },
      {
        question: "Explain React Context API.",
        keywords: ["context", "provider", "consumer"],
      },
      {
        question: "How does useReducer work?",
        keywords: ["reducer", "dispatch", "state"],
      },
      {
        question: "When would you use useReducer over useState?",
        keywords: ["complex state", "reducer", "logic"],
      },
      {
        question: "What is lazy loading in React?",
        keywords: ["lazy", "suspense", "code splitting"],
      },
      {
        question: "What is Suspense in React?",
        keywords: ["suspense", "fallback", "lazy"],
      },
      {
        question: "How does React handle forms internally?",
        keywords: ["controlled", "state", "events"],
      },
      {
        question: "How do error boundaries work?",
        keywords: ["error boundary", "fallback", "errors"],
      },
      {
        question: "Difference between controlled and uncontrolled inputs?",
        keywords: ["controlled", "uncontrolled", "refs"],
      },
      {
        question: "How does React batching work?",
        keywords: ["batching", "updates", "performance"],
      },
      {
        question: "What are portals in React?",
        keywords: ["portals", "modals", "dom"],
      },
      {
        question: "What is forwardRef?",
        keywords: ["forwardref", "refs", "components"],
      },
      {
        question: "How do refs differ from state?",
        keywords: ["refs", "state", "rerender"],
      },
      {
        question: "How would you optimize a large React app?",
        keywords: ["optimization", "memoization", "lazy loading"],
      },
      {
        question: "What is code splitting?",
        keywords: ["code splitting", "bundles", "lazy"],
      },
      {
        question: "How do you prevent prop drilling?",
        keywords: ["context", "redux", "state management"],
      },
      {
        question: "What are higher-order components?",
        keywords: ["hoc", "reuse", "components"],
      },
      {
        question: "What is render props pattern?",
        keywords: ["render props", "reuse", "logic"],
      },
      {
        question: "Explain React lifecycle in functional components.",
        keywords: ["lifecycle", "useeffect", "mount"],
      },
      {
        question: "How do keys improve React rendering?",
        keywords: ["keys", "lists", "diffing"],
      },
      {
        question: "How does state update asynchronously?",
        keywords: ["async", "batching", "state"],
      },
      {
        question: "What are stale closures in React?",
        keywords: ["closures", "state", "useeffect"],
      },
      {
        question: "How does React.memo improve performance?",
        keywords: ["memo", "rerender", "performance"],
      },
      {
        question: "What is dependency inversion in component architecture?",
        keywords: ["architecture", "dependency", "components"],
      },
      {
        question: "What is server-side rendering in React?",
        keywords: ["ssr", "server", "rendering"],
      },
      {
        question: "What is hydration mismatch?",
        keywords: ["hydration", "mismatch", "server"],
      },
      {
        question: "How do you structure scalable React apps?",
        keywords: ["architecture", "folders", "scalability"],
      },
      {
        question: "What is state normalization?",
        keywords: ["normalization", "state", "data"],
      },
      {
        question: "What is optimistic UI update?",
        keywords: ["optimistic", "ui", "updates"],
      },
      {
        question: "How does React event delegation work?",
        keywords: ["events", "delegation", "synthetic"],
      },
      {
        question: "What are concurrent features in React?",
        keywords: ["concurrent", "rendering", "react 18"],
      },
      {
        question: "Explain state colocation.",
        keywords: ["state", "components", "architecture"],
      },
      {
        question: "How would you debounce input in React?",
        keywords: ["debounce", "performance", "input"],
      },
      {
        question: "How do you cancel API requests in React?",
        keywords: ["abortcontroller", "cleanup", "fetch"],
      },
      {
        question: "What is useLayoutEffect?",
        keywords: ["uselayoutEffect", "dom", "render"],
      },
      {
        question: "Difference between useEffect and useLayoutEffect?",
        keywords: ["layout", "effect", "timing"],
      },
      {
        question: "What is hydration in SSR apps?",
        keywords: ["hydration", "server", "client"],
      },
      {
        question: "How do you test React components?",
        keywords: ["testing", "jest", "rtl"],
      },
      {
        question: "What is snapshot testing?",
        keywords: ["snapshot", "testing", "jest"],
      },
      {
        question: "How do you manage global state in React?",
        keywords: ["redux", "context", "zustand"],
      },
      {
        question: "What are compound components?",
        keywords: ["compound", "components", "patterns"],
      },
      {
        question: "How do you avoid memory leaks in React?",
        keywords: ["cleanup", "memory leaks", "effects"],
      },
      {
        question: "Explain tree shaking in React builds.",
        keywords: ["tree shaking", "bundles", "optimization"],
      },
      {
        question: "How do React hooks maintain state?",
        keywords: ["hooks", "state", "internals"],
      },
      {
        question: "How does React compare previous renders?",
        keywords: ["diffing", "reconciliation", "virtual dom"],
      },
      {
        question: "What are controlled side effects?",
        keywords: ["side effects", "cleanup", "useeffect"],
      },
      {
        question: "How do Suspense boundaries work?",
        keywords: ["suspense", "fallback", "loading"],
      },
    ],

    hard: [
      {
        question: "How does React Fiber work internally?",
        keywords: ["fiber", "scheduler", "reconciliation"],
      },
      {
        question: "Explain concurrent rendering in React.",
        keywords: ["concurrent", "rendering", "scheduler"],
      },
      {
        question: "How does React scheduling work?",
        keywords: ["scheduler", "priority", "fiber"],
      },
      {
        question: "What problems does concurrent mode solve?",
        keywords: ["blocking", "priority", "concurrent"],
      },
      {
        question: "How does Suspense work internally?",
        keywords: ["suspense", "fallback", "async"],
      },
      {
        question: "Explain React reconciliation algorithm deeply.",
        keywords: ["reconciliation", "diffing", "fiber"],
      },
      {
        question: "How does React batching work in React 18?",
        keywords: ["batching", "automatic batching", "updates"],
      },
      {
        question: "Explain server components in React.",
        keywords: ["server components", "rsc", "rendering"],
      },
      {
        question: "How do transitions work in React 18?",
        keywords: ["transitions", "priority", "ui"],
      },
      {
        question: "How would you design a scalable component library?",
        keywords: ["design system", "components", "architecture"],
      },
      {
        question: "How does hydration work internally?",
        keywords: ["hydration", "dom", "ssr"],
      },
      {
        question: "How would you optimize React bundle size?",
        keywords: ["bundles", "tree shaking", "code splitting"],
      },
      {
        question: "Explain render phase vs commit phase.",
        keywords: ["render", "commit", "fiber"],
      },
      {
        question: "What causes hydration mismatches?",
        keywords: ["hydration", "mismatch", "ssr"],
      },
      {
        question: "How does useSyncExternalStore work?",
        keywords: ["sync external store", "state", "subscriptions"],
      },
      {
        question: "Explain React compiler conceptually.",
        keywords: ["compiler", "optimization", "react"],
      },
      {
        question: "How would you architect microfrontends with React?",
        keywords: ["microfrontends", "architecture", "modules"],
      },
      {
        question: "What are React rendering bottlenecks?",
        keywords: ["performance", "rerenders", "memoization"],
      },
      {
        question: "How do streaming SSR and Suspense work together?",
        keywords: ["streaming", "ssr", "suspense"],
      },
      {
        question: "How does selective hydration work?",
        keywords: ["selective hydration", "priority", "ssr"],
      },
    ],
  },

  javascript: {
    easy: [
      {
        question: "What is JavaScript?",
        keywords: ["language", "web", "browser"],
      },
      {
        question: "Difference between var, let, and const?",
        keywords: ["scope", "hoisting", "block"],
      },
      {
        question: "What is hoisting?",
        keywords: ["hoisting", "variables", "functions"],
      },
      {
        question: "What is a closure?",
        keywords: ["closure", "scope", "function"],
      },
      {
        question: "What is event bubbling?",
        keywords: ["events", "bubbling", "propagation"],
      },
      {
        question: "What is event delegation?",
        keywords: ["delegation", "events", "performance"],
      },
      {
        question: "Difference between == and ===?",
        keywords: ["strict equality", "type coercion", "comparison"],
      },
      {
        question: "What is asynchronous JavaScript?",
        keywords: ["async", "non blocking", "callbacks"],
      },
      {
        question: "What is a promise?",
        keywords: ["promise", "async", "resolve"],
      },
      {
        question: "What does async/await do?",
        keywords: ["async", "await", "promises"],
      },
    ],

    medium: [
      {
        question: "Explain the event loop.",
        keywords: ["event loop", "call stack", "queue"],
      },
      {
        question: "Difference between microtasks and macrotasks?",
        keywords: ["microtasks", "macrotasks", "queue"],
      },
      {
        question: "How does prototypal inheritance work?",
        keywords: ["prototype", "inheritance", "objects"],
      },
      {
        question: "What is debounce?",
        keywords: ["debounce", "performance", "events"],
      },
      {
        question: "What is throttle?",
        keywords: ["throttle", "performance", "events"],
      },
      {
        question: "How does this keyword work in JavaScript?",
        keywords: ["this", "binding", "context"],
      },
      {
        question: "Difference between call, apply, and bind?",
        keywords: ["call", "apply", "bind"],
      },
      {
        question: "What are higher-order functions?",
        keywords: ["higher order", "functions", "callbacks"],
      },
      {
        question: "What is currying?",
        keywords: ["currying", "functions", "closures"],
      },
      {
        question: "Explain shallow copy vs deep copy.",
        keywords: ["shallow copy", "deep copy", "objects"],
      },
    ],

    hard: [
      {
        question: "How does the JavaScript engine work internally?",
        keywords: ["engine", "parser", "compiler"],
      },
      {
        question: "Explain memory management in JavaScript.",
        keywords: ["memory", "garbage collection", "heap"],
      },
      {
        question: "How does V8 optimize JavaScript?",
        keywords: ["v8", "optimization", "jit"],
      },
      {
        question: "Explain execution context in depth.",
        keywords: ["execution context", "scope", "call stack"],
      },
      {
        question: "How do generators work?",
        keywords: ["generators", "yield", "iterators"],
      },
      {
        question: "What are iterators in JavaScript?",
        keywords: ["iterators", "next", "iteration"],
      },
      {
        question: "How does garbage collection work?",
        keywords: ["garbage collection", "memory", "mark and sweep"],
      },
      {
        question: "Explain JavaScript concurrency model.",
        keywords: ["concurrency", "event loop", "async"],
      },
      {
        question: "What are WeakMap and WeakSet?",
        keywords: ["weakmap", "weakset", "memory"],
      },
      {
        question: "How would you optimize JavaScript performance?",
        keywords: ["optimization", "performance", "memory"],
      },
    ],

  },

  nextjs: {
    easy: [
      {
        question: "What is Next.js?",
        keywords: ["framework", "react", "ssr"],
      },
      {
        question: "What is file-based routing?",
        keywords: ["routing", "pages", "app router"],
      },
      {
        question: "What is server-side rendering?",
        keywords: ["ssr", "server", "rendering"],
      },
      {
        question: "What is static site generation?",
        keywords: ["ssg", "static", "build"],
      },
      {
        question: "What is the App Router?",
        keywords: ["app router", "routing", "nextjs"],
      },
      {
        question: "What are client components?",
        keywords: ["client components", "browser", "use client"],
      },
      {
        question: "What are server components?",
        keywords: ["server components", "server", "rendering"],
      },
      {
        question: "What is Link component in Next.js?",
        keywords: ["link", "navigation", "routing"],
      },
      {
        question: "What is image optimization in Next.js?",
        keywords: ["image", "optimization", "next image"],
      },
      {
        question: "What is middleware in Next.js?",
        keywords: ["middleware", "requests", "routing"],
      },
    ],

    medium: [
      {
        question: "Difference between SSR and SSG in Next.js?",
        keywords: ["ssr", "ssg", "rendering"],
      },
      {
        question: "How does data fetching work in Next.js?",
        keywords: ["fetching", "server", "cache"],
      },
      {
        question: "What is route caching in Next.js?",
        keywords: ["cache", "routing", "performance"],
      },
      {
        question: "What are loading.tsx files used for?",
        keywords: ["loading", "suspense", "fallback"],
      },
      {
        question: "What is hydration in Next.js?",
        keywords: ["hydration", "server", "client"],
      },
      {
        question: "How do layouts work in App Router?",
        keywords: ["layouts", "app router", "nested"],
      },
      {
        question: "What are route handlers in Next.js?",
        keywords: ["route handlers", "api", "server"],
      },
      {
        question: "What is incremental static regeneration?",
        keywords: ["isr", "static", "revalidation"],
      },
      {
        question: "How does metadata API work?",
        keywords: ["metadata", "seo", "head"],
      },
      {
        question: "How do server actions work?",
        keywords: ["server actions", "forms", "server"],
      },
    ],

    hard: [
      {
        question: "How does React Server Components architecture work in Next.js?",
        keywords: ["rsc", "server components", "streaming"],
      },
      {
        question: "Explain streaming in Next.js.",
        keywords: ["streaming", "suspense", "server"],
      },
      {
        question: "How does caching work internally in Next.js?",
        keywords: ["cache", "revalidation", "fetch"],
      },
      {
        question: "How would you optimize a large Next.js app?",
        keywords: ["optimization", "bundles", "performance"],
      },
      {
        question: "How does partial prerendering work?",
        keywords: ["partial prerendering", "streaming", "rendering"],
      },
      {
        question: "Explain dynamic rendering in Next.js.",
        keywords: ["dynamic", "rendering", "server"],
      },
      {
        question: "How do Suspense boundaries improve UX in Next.js?",
        keywords: ["suspense", "ux", "loading"],
      },
      {
        question: "How does middleware execution flow work?",
        keywords: ["middleware", "request", "response"],
      },
      {
        question: "How would you architect authentication in Next.js?",
        keywords: ["authentication", "middleware", "cookies"],
      },
      {
        question: "How does Next.js optimize SEO?",
        keywords: ["seo", "metadata", "rendering"],
      },
    ],

  },

  hr: {
    easy: [
      {
        question: "Tell me about yourself.",
        keywords: ["background", "experience", "skills"],
      },
      {
        question: "Why do you want this role?",
        keywords: ["role", "growth", "company"],
      },
      {
        question: "What are your strengths?",
        keywords: ["strengths", "skills", "confidence"],
      },
      {
        question: "What are your weaknesses?",
        keywords: ["weaknesses", "improvement", "learning"],
      },
      {
        question: "Why should we hire you?",
        keywords: ["skills", "value", "experience"],
      },
      {
        question: "Where do you see yourself in 5 years?",
        keywords: ["growth", "career", "goals"],
      },
      {
        question: "Describe your ideal work environment.",
        keywords: ["team", "culture", "environment"],
      },
      {
        question: "How do you handle stress?",
        keywords: ["stress", "pressure", "management"],
      },
      {
        question: "What motivates you?",
        keywords: ["motivation", "growth", "learning"],
      },
      {
        question: "How do you manage deadlines?",
        keywords: ["deadlines", "time management", "planning"],
      },
    ],
    medium: [
      {
        question: "Describe a conflict you handled in a team.",
        keywords: ["conflict", "team", "communication"],
      },
      {
        question: "Tell me about a difficult challenge you solved.",
        keywords: ["challenge", "problem solving", "solution"],
      },
      {
        question: "Describe a time you failed.",
        keywords: ["failure", "learning", "improvement"],
      },
      {
        question: "How do you prioritize tasks?",
        keywords: ["prioritization", "planning", "deadlines"],
      },
      {
        question: "Describe a leadership experience.",
        keywords: ["leadership", "team", "initiative"],
      },
      {
        question: "How do you handle criticism?",
        keywords: ["feedback", "growth", "improvement"],
      },
      {
        question: "Describe working under pressure.",
        keywords: ["pressure", "deadlines", "stress"],
      },
      {
        question: "Tell me about a time you learned something quickly.",
        keywords: ["learning", "adaptability", "skills"],
      },
      {
        question: "How do you collaborate with teams?",
        keywords: ["collaboration", "communication", "team"],
      },
      {
        question: "Describe a situation where you took initiative.",
        keywords: ["initiative", "ownership", "leadership"],
      },
    ],

    hard: [
      {
        question: "Describe a major professional setback and how you recovered.",
        keywords: ["setback", "recovery", "growth"],
      },
      {
        question: "How would you handle disagreement with senior leadership?",
        keywords: ["leadership", "communication", "professionalism"],
      },
      {
        question: "Tell me about a high-impact project you led.",
        keywords: ["project", "leadership", "impact"],
      },
      {
        question: "How do you make difficult decisions under uncertainty?",
        keywords: ["decision making", "uncertainty", "analysis"],
      },
      {
        question: "Describe mentoring a junior teammate.",
        keywords: ["mentoring", "guidance", "leadership"],
      },
      {
        question: "How do you balance speed and quality?",
        keywords: ["quality", "speed", "tradeoffs"],
      },
      {
        question: "Describe handling an underperforming teammate.",
        keywords: ["team", "performance", "communication"],
      },
      {
        question: "How do you approach ambiguous problems?",
        keywords: ["ambiguity", "problem solving", "analysis"],
      },
      {
        question: "Describe a situation where you changed team direction.",
        keywords: ["leadership", "strategy", "decision"],
      },
      {
        question: "What makes a strong engineering culture?",
        keywords: ["culture", "collaboration", "ownership"],
      },
    ],

  },
};
