export type Student = 'Ronan' | 'Audrina' | 'Caleb' | 'Ayden' | 'Jaxon' | 'Jacob' | 'Finnley';

export type Behavior = 'Refusal' | 'Aggression' | 'Elopement' | 'Disruption';

export type Antecedent = 'Transition' | 'Denied Item' | 'Work Demand' | 'Peer Conflict';

export type Response = 'Redirect' | 'Break' | 'Loss Privilege' | 'Ignore';

export type Outcome = 'Complied' | 'Escalated' | 'Needed Removal';

export interface BehaviorEntry {
  student: Student;
  behavior: Behavior;
  antecedent: Antecedent | null;
  response: Response | null;
  outcome: Outcome | null;
  timestamp: string;
}
