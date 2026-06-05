import React, { useState } from 'react'

function App() {
  const [devlist] = useState([
    {
      id: 1,
      title: 'HTML & CSS',
      description: 'Learn the basics of web structure and styling.',
      code: `<html>
  <head>
    <title>My First Web Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 20px;
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to Web Development!</h1>
    <p>This is your first web page.</p>
  </body>
</html>`,
      article:
        'HTML builds the page structure. CSS styles it so the page looks good and remains readable across devices.',
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Learn how to make your web pages interactive.',
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 20px;
      }
      button {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>JavaScript Example</h1>
    <p id="message">Click the button to see a message.</p>
    <button onclick="showMessage()">Click Me</button>
    <script>
      function showMessage() {
        document.getElementById('message').textContent = 'Hello, you clicked the button!'
      }
    </script>
  </body>
</html>`,
      article:
        'JavaScript controls behavior. Use functions and events to update content when users click buttons.',
    },
    {
      id: 3,
      title: 'React',
      description: 'Build reusable UI components and manage app state.',
      code: `import React from 'react'

function Hello() {
  return <h1>Hello React!</h1>
}

export default Hello`,
      article:
        'React splits interfaces into components. Each component returns JSX to render UI efficiently.',
    },
    {
      id: 4,
      title: 'Backend & APIs',
      description: 'Connect your frontend to servers and databases.',
      code: `const express = require('express')
const app = express()

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' })
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})`,
      article:
        'Backend code runs on a server. APIs send and receive data between the frontend and the database.',
    },
    {
      id: 5,
      title: 'Deployment',
      description: 'Publish your project to the web and keep it live.',
      code: `# Example deployment steps
git add .
git commit -m "Deploy app"
git push origin main`,
      article:
        'Deployment makes your app available on the web. Use Git and hosting platforms to publish it live.',
    },
  ])

  const [selectedId, setSelectedId] = useState(devlist[0].id)
  const selectedStep = devlist.find((step) => step.id === selectedId)

  const articles = [
    {
      id: 1,
      title: 'HTML Structure',
      summary:
        'Learn how tags like <html>, <head>, <body>, <h1>, and <p> compose a page.',
      example:
        'A simple page title and a welcome message using HTML elements and embedded CSS.',
    },
    {
      id: 2,
      title: 'CSS Styling',
      summary:
        'Use color, spacing, and typography to make your page visually appealing.',
      example:
        'Style the body background, heading color, and button appearance with clean CSS rules.',
    },
    {
      id: 3,
      title: 'JavaScript Interaction',
      summary:
        'See how JavaScript handles user events to update the page dynamically.',
      example:
        'Click a button to change text on the page using getElementById and a function.',
    },
    {
      id: 4,
      title: 'React Components',
      summary:
        'Organize UI into reusable pieces and manage what is shown on the screen.',
      example:
        'Write a small React component that returns a heading and export it for reuse.',
    },
    {
      id: 5,
      title: 'Deploying Code',
      summary:
        'Push changes to a repository and publish your app to a host like Netlify or Vercel.',
      example:
        'Commit your code and push to Git to prepare for live deployment.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-900/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Web Dev Roadmap
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Learn web development step by step
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                A beautiful interactive roadmap for front-end and full-stack
                learning. Select a step, read the concept, and preview sample
                code instantly.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-800/90 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Steps
                </p>
                <p className="mt-2 text-3xl font-semibold text-cyan-300">
                  {devlist.length}
                </p>
              </div>
              <div className="rounded-3xl bg-cyan-500/10 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                  Current focus
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {selectedStep.title}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg shadow-slate-900/20">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Roadmap Progress
            </h2>
            <div className="space-y-4">
              {devlist.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setSelectedId(step.id)}
                  className={`group flex w-full items-start gap-4 rounded-3xl border px-5 py-4 text-left transition ${
                    selectedId === step.id
                      ? 'border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(56,189,248,0.3)]'
                      : 'border-slate-800 bg-slate-950/80 hover:border-slate-600 hover:bg-slate-900'
                  }`}
                >
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold ${
                      selectedId === step.id
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-lg shadow-slate-900/20">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    Selected step
                  </p>
                  <h2 className="text-3xl font-semibold text-white">
                    {selectedStep.title}
                  </h2>
                </div>
                <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-right text-sm text-slate-300">
                  Step {selectedStep.id} of {devlist.length}
                </div>
              </div>

              <p className="text-slate-300">{selectedStep.article}</p>

              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                <div className="flex items-center justify-between pb-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Code Preview
                  </p>
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    {selectedStep.title.includes('JavaScript')
                      ? 'JS Example'
                      : 'Snippet'}
                  </span>
                </div>
                <pre className="max-h-96 overflow-auto rounded-3xl bg-slate-900 p-4 text-sm leading-6 text-slate-200">
                  <code>{selectedStep.code}</code>
                </pre>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-lg shadow-slate-900/20">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    Best UI Articles
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Examples you can understand
                  </h3>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  Example Guide
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="rounded-3xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-400/40"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                      Article {article.id}
                    </p>
                    <h4 className="mt-3 text-lg font-semibold text-white">
                      {article.title}
                    </h4>
                    <p className="mt-3 text-sm text-slate-400">
                      {article.summary}
                    </p>
                    <p className="mt-4 rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                      <strong>Example:</strong> {article.example}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App