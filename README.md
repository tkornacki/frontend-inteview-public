# Candidate-facing snapshot

This folder is published as a separate git repository. It includes `.npmrc` so installs use the public npm registry.

When you add the interview pack tooling here, copy `package.json` and `package-lock.json` from the main interview pack repo, then use Node 20 or newer:

```bash
npm install
npm run test
```
