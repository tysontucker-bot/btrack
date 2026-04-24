export type Student = 'Ronan' | 'Audrina' | 'Caleb' | 'Ayden' | 'Jaxon' | 'Jacob' | 'Finnley';

export type Behavior = 'Refusal' | 'Aggression' | 'Elopement' | 'Disruption';

export type Antecedent = 'Demand Placed' | 'Denied Access' | 'Transition' | 'Sensory Input';

export type Consequence = 'Redirect' | 'Removal' | 'Loss Item' | 'Break' | 'Loss Privilege' | 'Ignore';

export type BehaviorFunction = 'Attention' | 'Escape' | 'Tangible' | 'Sensory' | 'Unknown';

export interface BehaviorEntry {
  student: Student;
  behavior: Behavior;
  antecedent: Antecedent | null;
  consequence: Consequence | null;
  behaviorFunction: BehaviorFunction | null;
  timestamp: string;
}
