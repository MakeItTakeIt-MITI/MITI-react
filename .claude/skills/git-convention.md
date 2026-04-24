# Git Convention

This document defines the Git workflow and commit conventions for this project.
All contributors — human or AI — must follow these rules.

---

## Branch Strategy

This project uses a **trunk-based** model with a single long-lived branch:

| Branch | Purpose                                             |
| ------ | --------------------------------------------------- |
| `main` | Production-ready code. All work merges here via PR. |

Feature/fix work is done on short-lived branches cut from `main` and deleted after merge.

### Branch Naming

```
<type>/<short-description>
```

Examples:

- `feat/contact-form`
- `fix/mobile-nav-overflow`
- `refactor/hero-section`
- `style/typography-scale`

Keep names lowercase, hyphen-separated, and under 50 characters.

---

## Commit Message Format

```
<type>: <short imperative summary>
```

- Use the **imperative mood** ("add", not "added" or "adds")
- Keep the summary under 72 characters
- No period at the end

### Types

| Type       | When to use                                                           |
| ---------- | --------------------------------------------------------------------- |
| `feat`     | New feature or user-facing functionality                              |
| `fix`      | Bug fix                                                               |
| `style`    | Formatting, CSS, spacing — no logic change                            |
| `refactor` | Code restructure that neither adds a feature nor fixes a bug          |
| `test`     | Adding or correcting tests                                            |
| `doc`      | Documentation changes only                                            |
| `chore`    | Build scripts, dependency updates, config — no production code change |

### Examples

```
feat: add dark mode toggle to navbar
fix: prevent hero image from overflowing on mobile
style: adjust spacing between project cards
refactor: extract ProjectCard into its own component
doc: update README with local dev instructions
chore: upgrade Next.js to latest patch
```

---

## Pull Request Flow

1. Cut a branch from `main` using the naming convention above.
2. Make focused, atomic commits — one logical change per commit.
3. Open a PR targeting `main`.
4. PR title must follow the same `<type>: <summary>` format as commit messages.
5. Squash-merge into `main` to keep history linear.
6. Delete the feature branch after merge.

---

## What NOT to Do

- Do not commit directly to `main`.
- Do not use vague messages like `fix stuff`, `wip`, or `update`.
- Do not bundle unrelated changes in one commit.
- Do not leave merged branches alive.
