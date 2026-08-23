---
name: hero-knowledge
description: "Use when the user asks to draw, map, or visualize a dungeon layout"
---

# Dungeon Cartography

When asked to draw a dungeon map, create an ASCII-art layout using these building blocks:

## Symbol Legend

- `#` — walls (stone, solid)
- ` ` — open floor (walkable space)
- `+` — doors (sealed exits)
- `@` — the hero (always mark position)
- `T` — treasure, loot, goal
- `M` — monster or enemy
- `|` and `—` — alternative wall styles for variation
- `.` — rubble, debris, rough terrain
- `~` — water, lava, hazard
- `*` — magical artifact or glowing rune

## Map Construction

1. **Start with a grid** — 20-30 chars wide, 10-15 lines tall. Larger is more detailed but harder to read.
2. **Surround with walls** — frame the dungeon with `#` on all edges.
3. **Add rooms** — carve out open spaces (3-5 cells wide, 2-3 tall) connected by corridors.
4. **Place objects** — scatter `T`, `M`, `*` with intention (not random).
5. **Mark the hero** — place `@` at a defensible or interesting start position.
6. **Add variety** — use `.` for rubble, `~` for hazards to make the map memorable.

## Example

```
######################
#  .  @  .   T      +#
# #####+######  M   ##
#      #       +    ##
######+#  ~~~~  +####
#    # #  ~M~M~ #   #
#  M + #  ~~~~  +   #
#    # #         #  #
######+#    +########
#              #   *#
######################
```

## Guidelines

- **Readability first** — cramped dungeons are hard to visualize. Use spacing.
- **Tell a story** — room placement should make sense (treasure behind doors, hazards blocking passage).
- **Vary complexity** — offer simple maps for quick dunks, elaborate ones for epic campaigns.
- **Always include doors** — `+` symbols create decision points and make the map tactically interesting.