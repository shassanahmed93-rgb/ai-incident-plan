export function analyze(input) {
  const actions = {
    account_compromise:["Revoke suspicious sessions after preserving evidence","Rotate affected credentials and re-enroll MFA"],
    cloud_exposure:["Restrict public access after capturing configuration evidence","Verify corrected permissions with a least-privilege test"]
  };
  if (!Object.hasOwn(actions,input.incident)) throw new Error("Choose account_compromise or cloud_exposure.");
  return {status:"draft for review", lead:input.lead, severity:input.severity, phases:[
    {phase:"Validate", action:"Preserve and timestamp evidence", evidence:input.evidence},
    {phase:"Contain", action:actions[input.incident][0]},
    {phase:"Recover", action:actions[input.incident][1]},
    {phase:"Close", action:"Record impact, verify recovery, and assign follow-up owners"}
  ]};
}
