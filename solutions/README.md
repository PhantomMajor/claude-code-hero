# Quest Solutions

This folder contains the complete set of solutions (artifacts, custom configurations, agents, and scripts) built during the completion of **Claude Code Hero**.

These files are preserved here so that they can be committed to your fork without polluting the main game loop, conflicting with level verifications, or causing git history noise when running cleanup commands.

## Solutions Structure

- **`.claude/`**: Custom configuration, agents, slash commands, rules, and workflows.
  - [`hero-agent.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/agents/hero-agent.md): Level 6 agent.
  - [`hero-spell.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/commands/hero-spell.md): Level 3 slash command.
  - [`hero-status.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/commands/hero-status.md): Additional status command.
  - [`hero-protocol.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/rules/hero-protocol.md): Level 4 rules/protocols.
  - [`hero-knowledge/SKILL.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/skills/hero-knowledge/SKILL.md): Level 5 custom skill.
  - [`hero-warband.js`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/workflows/hero-warband.js): Level 12 workflow.
  - [`CLAUDE.md`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/.claude/CLAUDE.md): Level 2 instructions document.
- **`hero-plugin/`**: Level 9 plugin bundling all commands, agents, rules, and skills.
- **`scripts/`**:
  - [`hero-hook.sh`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/scripts/hero-hook.sh): Level 7 automated shell hook.
  - [`hero-oracle-server.rb`](file:///Users/udayadityasingh/Desktop/Claude/claude-code-hero/solutions/scripts/hero-oracle-server.rb): Level 8 MCP server implementation.
- **`.mcp.json`**: Level 11 MCP server configuration.

---

## Restoring Solutions

If you want to restore these solutions to the main project directories to test them, you can run the following command from the root directory:

```bash
cp -r solutions/.claude/ .claude/
cp -r solutions/scripts/ scripts/
cp -r solutions/hero-plugin/ hero-plugin/
cp solutions/.mcp.json .mcp.json
```
