# AGENTS.md — OpenCode & ECC Multi-Agent Guidelines

This project uses ECC (Engineering Coordination System) with OpenCode.

## Core Rules
- **No hex colors directly in components**: Always use CSS variables/tokens (`src/index.css`).
- **Design System**: Follow Neo-Brutalism + Studio X hybrid defined in `design.md`.
- **Languages**: Indonesian (ID) and English (EN) via Context without new dependencies.
- **Theme**: Light, Dark, System supported via class `dark` on `<html>`.
- **Execution Step-by-Step**: Execute instructions incrementally (one step per turn), run verification, and commit per milestone.

## Penulisan class Tailwind
- Gunakan bentuk kanonik sejak awal: border-2 (bukan border-[2px]),
  z-50 (bukan z-[50]), border-(--border) (bukan border-[var(--border)]).
- Pakai token warna (text-on-card, bg-card, bg-card-alt) sebelum var() mentah.
- Radius proyek ini: rounded-sm=10px, rounded-md=16px, rounded-lg=24px,
  rounded-xl=12px (berbeda dari bawaan Tailwind, mengikuti design.md).
- Peringatan suggestCanonicalClasses tidak boleh "diperbaiki" dengan mengubah
  class animasi.
