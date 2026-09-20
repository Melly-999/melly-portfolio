/**
 * Klaus — the canonical seven-stage workflow, in one place so every surface that
 * draws it (the showcase concept UI and the case study) uses the same vocabulary.
 *
 * TRUTH BOUNDARY. Klaus is an owner-defined role and architecture. No repository,
 * verified run, or live provider or model integration is claimed. Every line below
 * is written as design ("is scoped", "is selected"), never as an event that
 * happened, and the example task is an illustration, not work Klaus performed.
 */
export interface KlausStage {
  /** Short verb used in rails and spines. */
  label: string;
  /** What the stage is handed. */
  input: string;
  /** What the stage is designed to do. */
  action: string;
  /** What it is designed to produce. */
  output: string;
  /** The two stages that decide whether work moves on. */
  key?: boolean;
}

/** An illustration of the kind of task the workflow is designed to move. */
export const klausExampleTask = "Build an internal client dashboard.";

export const klausStages: readonly KlausStage[] = [
  {
    label: "Understand",
    input: "A request in the owner's words.",
    action: "State what must exist, what must not change, and how done will be judged.",
    output: "Scoped task with acceptance criteria.",
  },
  {
    label: "Research",
    input: "Repository files, project rules and truth boundaries.",
    action: "Select only the slice each role needs.",
    output: "Compact context packet.",
  },
  {
    label: "Route",
    input: "Scoped task and context packet.",
    action: "Split the work by role and assign each role to its configured agent or model.",
    output: "Architecture, implementation and review lanes.",
    key: true,
  },
  {
    label: "Implement",
    input: "Approved technical plan.",
    action: "Make the change in bounded steps, under the rules the plan was written with.",
    output: "Candidate change.",
  },
  {
    label: "Review",
    input: "Candidate change and the original intent.",
    action: "Inspect the result in a separate lane — implementation never judges itself.",
    output: "Issues and corrections.",
  },
  {
    label: "Validate",
    input: "Corrected change.",
    action: "Run the checks and read the results; report what cannot be verified as unverified.",
    output: "Check, build and test results.",
    key: true,
  },
  {
    label: "Handoff",
    input: "Verified change and its evidence.",
    action: "Record what was asked, what changed, what was proven and what remains.",
    output: "Final report and next state.",
  },
] as const;
