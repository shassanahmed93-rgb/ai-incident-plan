# AI Incident Plan

Draft a phased playbook for a compromised account or cloud exposure.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/ai-incident-plan/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "status": "draft for review",
  "lead": "SOC lead",
  "severity": "high",
  "phases": [
    {
      "phase": "Validate",
      "action": "Preserve and timestamp evidence",
      "evidence": [
        "Authentication logs",
        "MFA challenge history"
      ]
    },
    {
      "phase": "Contain",
      "action": "Revoke suspicious sessions after preserving evidence"
    },
    {
      "phase": "Recover",
      "action": "Rotate affected credentials and re-enroll MFA"
    },
    {
      "phase": "Close",
      "action": "Record impact, verify recovery, and assign follow-up owners"
    }
  ]
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident. The workflow currently uses rules or templates and has no model integration.

## What this demonstrates

**Draft a playbook with evidence preservation and review gates.** Switch from account compromise to cloud exposure and inspect how containment changes. Both paths preserve evidence before changes and produce a draft for the incident lead to validate.

[Reference guidance](https://csrc.nist.gov/pubs/sp/800/61/r3/final)
