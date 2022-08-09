This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

Please be consistent in using npm and not yarn so we dont have duplicate lock files.

The Stack used on this project is:
Next Js
Recoil for state management
swr and axios for server side data fetching

Project Structure:

The page folder should only contain rendered components of the page. All the content should be moved to the component folder inside of the source file.
Component name should start with capital letters, Also maintain non functional themed components i.e use const MyComponent = () => {} instead of function MyComponent. This is to ensure consistent behavior across the codebase.


Git commit rules:

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention category(scope or module): message in your commit message while using one of the following categories:

feat: all changes that introduce completely new code or new features
1. Fix: changes that fix a bug (ideally you will additionally reference an issue if present)
2. Refactor: any code related change that is not a fix nor a feature
3. Docs: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
4. Build: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
5. Ci: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
6. Chore: all changes to the repository that do not fit into any of the above categories

```
`

Remove all unused files