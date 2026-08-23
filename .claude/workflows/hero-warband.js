export const meta = {
  name: "hero-warband",
  description: "Orchestrate hero agents to analyze quest artifacts in parallel"
};

export default async function* workflow() {
  log("🎪 The Warband assembles...");

  // Define the artifacts to analyze
  const artifacts = [
    {
      name: "Spell",
      path: ".claude/commands/hero-spell.md",
      prompt: "Analyze the hero spell command. Describe its purpose, arguments, and role in the quest."
    },
    {
      name: "Protocol",
      path: ".claude/rules/hero-protocol.md",
      prompt: "Analyze the hero protocol rule. Explain how path-scoped rules work and what this rule guards."
    },
    {
      name: "Knowledge",
      path: ".claude/skills/hero-knowledge/SKILL.md",
      prompt: "Analyze the hero knowledge skill. Summarize what it teaches and when it triggers."
    }
  ];

  // Pipeline: send each artifact to an agent independently
  const analyses = yield* pipeline(artifacts, async (artifact) => {
    log(`📜 Analyzing: ${artifact.name}`);
    const result = await agent(
      `${artifact.prompt}\n\nFile path: ${artifact.path}`,
      { timeout: 30000 }
    );
    return {
      artifact: artifact.name,
      analysis: result
    };
  });

  log("🏆 Warband reports gathered.");
  log(`Total artifacts analyzed: ${analyses.length}`);

  // Log each report
  analyses.forEach((report, i) => {
    log(`\n[${i + 1}] ${report.artifact}:`);
    log(report.analysis.substring(0, 200) + "...");
  });

  yield {
    summary: "Warband analysis complete",
    artifactCount: analyses.length,
    timestamp: new Date().toISOString()
  };
}
