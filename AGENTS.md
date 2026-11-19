# AGENTS.md — OpenCode & ECC Multi-Agent Guidelines

This project uses ECC (Engineering Coordination System) with OpenCode.

## Core Rules
- **No hex colors directly in components**: Always use CSS variables/tokens (`src/index.css`).
- **Design System**: Follow Neo-Brutalism + Studio X hybrid defined in `design.md`.
- **Languages**: Indonesian (ID) and English (EN) via Context without new dependencies.
- **Theme**: Light, Dark, System supported via class `dark` on `<html>`.
- **Execution Step-by-Step**: Execute instructions incrementally (one step per turn), run verification, and commit per milestone.
