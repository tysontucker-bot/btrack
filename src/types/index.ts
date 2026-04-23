export type Student = 'Ronan' | 'Audrina' | 'Caleb' | 'Ayden' | 'Jaxon' | 'Jacob' | 'Finnley';

export type Behavior = 'Refusal' | 'Aggression' | 'Elopement' | 'Disruption';

export interface BehaviorEntry {
  student: Student;
  behavior: Behavior;
  timestamp: string;
}
