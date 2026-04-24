import { useState } from 'react';
import type { Student, Behavior, Antecedent, Consequence, BehaviorFunction, BehaviorEntry } from '../types';

const BEHAVIORS: Behavior[] = ['Refusal', 'Aggression', 'Elopement', 'Disruption'];
const ANTECEDENTS: Antecedent[] = ['Demand Placed', 'Denied Access', 'Transition', 'Sensory Input'];
const CONSEQUENCES: Consequence[] = ['Redirect', 'Removal', 'Loss Item', 'Break', 'Loss Privilege', 'Ignore'];
const FUNCTIONS: BehaviorFunction[] = ['Attention', 'Escape', 'Tangible', 'Sensory', 'Unknown'];

interface QuickEntryProps {
  student: Student;
  onSave: (entry: BehaviorEntry) => void;
  onBack: () => void;
}

interface SectionGridProps<T extends string> {
  items: T[];
  selected: T | null;
  onSelect: (item: T) => void;
  accentColor: string;
  accentBg: string;
}

function SectionGrid<T extends string>({ items, selected, onSelect, accentColor, accentBg }: SectionGridProps<T>) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '8px',
      }}
    >
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          style={{
            padding: '24px 12px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: `2px solid ${selected === item ? accentColor : '#d1d5db'}`,
            background: selected === item ? accentBg : '#f9fafb',
            cursor: 'pointer',
            minHeight: '72px',
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function QuickEntry({ student, onSave, onBack }: QuickEntryProps) {
  const [selectedBehavior, setSelectedBehavior] = useState<Behavior | null>(null);
  const [selectedAntecedent, setSelectedAntecedent] = useState<Antecedent | null>(null);
  const [selectedConsequence, setSelectedConsequence] = useState<Consequence | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<BehaviorFunction | null>(null);

  function handleSave() {
    if (!selectedBehavior) return;
    onSave({
      student,
      behavior: selectedBehavior,
      antecedent: selectedAntecedent,
      consequence: selectedConsequence,
      behaviorFunction: selectedFunction,
      timestamp: new Date().toISOString(),
    });
  }

  const sectionLabelStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '0.08em',
    color: '#6b7280',
    marginBottom: '10px',
    marginTop: '24px',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ padding: '16px' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '8px',
          padding: '8px 0',
          color: '#3b82f6',
        }}
      >
        ← Back
      </button>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.5rem' }}>
        {student}
      </h1>

      <p style={sectionLabelStyle}>Select Behavior</p>
      <SectionGrid
        items={BEHAVIORS}
        selected={selectedBehavior}
        onSelect={setSelectedBehavior}
        accentColor="#ef4444"
        accentBg="#fee2e2"
      />

      <p style={sectionLabelStyle}>Antecedent</p>
      <SectionGrid
        items={ANTECEDENTS}
        selected={selectedAntecedent}
        onSelect={setSelectedAntecedent}
        accentColor="#f59e0b"
        accentBg="#fef3c7"
      />

      <p style={sectionLabelStyle}>Consequence</p>
      <SectionGrid
        items={CONSEQUENCES}
        selected={selectedConsequence}
        onSelect={setSelectedConsequence}
        accentColor="#8b5cf6"
        accentBg="#ede9fe"
      />

      <p style={sectionLabelStyle}>Function</p>
      <SectionGrid
        items={FUNCTIONS}
        selected={selectedFunction}
        onSelect={setSelectedFunction}
        accentColor="#0ea5e9"
        accentBg="#e0f2fe"
      />

      <button
        onClick={handleSave}
        disabled={!selectedBehavior}
        style={{
          width: '100%',
          padding: '20px',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          border: 'none',
          marginTop: '32px',
          background: selectedBehavior ? '#22c55e' : '#d1d5db',
          color: selectedBehavior ? '#fff' : '#9ca3af',
          cursor: selectedBehavior ? 'pointer' : 'not-allowed',
        }}
      >
        SAVE
      </button>
    </div>
  );
}
