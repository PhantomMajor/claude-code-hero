---
name: hero-spell
description: Cast a magic missile at a target
arguments:
  - name: target
    description: What to aim the spell at
    required: false
---

# Magic Missile

A command to test event-based automation through hooks. When cast, this triggers a `UserPromptSubmit` hook that intercepts the prompt, logs the action, and blocks it from reaching the model.

Usage: `/hero-spell <target>`

Examples:
- `/hero-spell the goblin king`
- `/hero-spell the darkness`
- `/hero-spell`
