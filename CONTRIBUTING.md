# Contributing to AI Image Generator

First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to the AI Image Generator project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to (mailto:mushtaqfaheem46@gmai.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- Use a clear and descriptive title for the issue.
- Describe the exact steps to reproduce the problem.
- Provide specific examples to demonstrate the steps.
- Describe the behavior you observed after following the steps and why it's a problem.
- Explain which behavior you expected to see instead and why.
- Include screenshots if applicable.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- Use a clear and descriptive title for the issue.
- Provide a step-by-step description of the suggested enhancement.
- Provide specific examples to demonstrate the steps.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- Explain why this enhancement would be useful.
- List some other applications where this enhancement exists, if applicable.

### Code Contributions

#### Local Development

To set up the AI Image Generator locally, follow these steps:

1. Fork and clone the repository.
2. Install dependencies:
   ```
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```
3. Set up environment variables in `backend/.env`.
4. Run the application:
   ```
   # Backend
   npm start

   # Frontend (in a new terminal)
   cd ../frontend
   npm run dev
   ```

#### Pull Requests

- Fill in the required template.
- Do not include issue numbers in the PR title.
- Follow our coding styles and conventions.
- Document new code with inline comments.
- End all files with a newline.

### Styleguides

#### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.
- When only changing documentation, include `[ci skip]` in the commit title.

#### JavaScript Styleguide

- Use ES6+ features.
- Use camelCase for variables and functions.
- Use PascalCase for classes and React components.
- Prefer `const` over `let`. Never use `var`.
- Use meaningful variable names.
- Keep functions small and focused.
- Comment complex code sections.

#### React Styleguide

- Use functional components with hooks.
- Extract complex logic into custom hooks.
- Use prop spreading sparingly.
- Use prop types or TypeScript for type checking.
- Name event handlers as `handle[Event]`, e.g., `handleClick`.
- Keep components focused on one task.

#### CSS/Tailwind Styleguide

- Use kebab-case for custom class names.
- Group Tailwind classes logically (layout, typography, colors, etc.).
- Extract common class combinations into @apply directives.
- Use semantic color names in Tailwind config.
- Ensure proper contrast for accessibility.

### Testing

- Write unit tests for utility functions.
- Write integration tests for API calls.
- Use React Testing Library for component tests.
- Aim for good coverage, especially in critical paths.

### Documentation

- Update README.md if you change functionality.
- Add JSDoc comments to functions.
- Create/update diagrams if you modify architecture.

## Additional Notes

### Issue and Pull Request Labels

| Label Name | Description |
| --- | --- |
| `bug` | Confirmed bugs or reports very likely to be bugs. |
| `enhancement` | Feature requests. |
| `help-wanted` | Extra attention is needed. |
| `good-first-issue` | Good for newcomers. |
| `priority-high` | High priority. |
| `priority-low` | Low priority. |
| `frontend` | Related to React, UI, etc. |
| `backend` | Related to Node.js, MongoDB, etc. |
| `ai-integration` | Related to DALL-E or other AI services. |

### Recognition Model

We use the [All Contributors](https://allcontributors.org/) bot to recognize contributors. Types of contributions:

- code
- bug
- review
- tutorial
- design
- ideas
- infra
- doc
- test

Example: `@all-contributors please add @username for code, bug`

---

Remember that contributing isn't just about code. Documentation, design ideas, issue triage, and community engagement are equally valuable! Thank you for helping make AI Image Generator amazing! 🚀🎨
