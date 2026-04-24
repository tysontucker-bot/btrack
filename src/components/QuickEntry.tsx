import { useState } from 'react';
import type { Student, Behavior, Antecedent, Response, Outcome, BehaviorEntry } from '../types';

const BEHAVIORS: Behavior[] = ['Refusal', 'Aggression', 'Elopement', 'Disruption'];
const ANTECEDENTS: Antecedent[] = ['Transition', 'Denied Item', 'Work Demand', 'Peer Conflict'];
const RESPONSES: Response[] = ['Redirect', 'Break', 'Loss Privilege', 'Ignore'];
const OUTCOMES: Outcome[] = ['Complied', 'Escalated', 'Needed Removal'];

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
  const [selectedResponse, setSelectedResponse] = useState<Response | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<Outcome | null>(null);

  function handleSelectBehavior(behavior: Behavior) {
    if (behavior !== selectedBehavior) {
      setSelectedAntecedent(null);
      setSelectedResponse(null);
      setSelectedOutcome(null);
    }
    setSelectedBehavior(behavior);
  }

  function handleSelectAntecedent(antecedent: Antecedent) {
    setSelectedAntecedent(antecedent === selectedAntecedent ? null : antecedent);
  }

  function handleSelectResponse(response: Response) {
    setSelectedResponse(response === selectedResponse ? null : response);
  }

  function handleSelectOutcome(outcome: Outcome) {
    setSelectedOutcome(outcome === selectedOutcome ? null : outcome);
  }

  function handleSave() {
    if (!selectedBehavior) return;
    onSave({
      student,
      behavior: selectedBehavior,
      antecedent: selectedAntecedent,
      response: selectedResponse,
      outcome: selectedOutcome,
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
        onSelect={handleSelectBehavior}
        accentColor="#ef4444"
        accentBg="#fee2e2"
      />

      {selectedBehavior && (
        <>
          <p style={sectionLabelStyle}>Antecedent</p>
          <SectionGrid
            items={ANTECEDENTS}
            selected={selectedAntecedent}
            onSelect={handleSelectAntecedent}
            accentColor="#f59e0b"
            accentBg="#fef3c7"
          />

          <p style={sectionLabelStyle}>Response</p>
          <SectionGrid
            items={RESPONSES}
            selected={selectedResponse}
            onSelect={handleSelectResponse}
            accentColor="#8b5cf6"
            accentBg="#ede9fe"
          />

          <p style={sectionLabelStyle}>Outcome</p>
          <SectionGrid
            items={OUTCOMES}
            selected={selectedOutcome}
            onSelect={handleSelectOutcome}
            accentColor="#0ea5e9"
            accentBg="#e0f2fe"
          />

          <button
            onClick={handleSave}
            style={{
              width: '100%',
              padding: '20px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: 'none',
              marginTop: '32px',
              background: '#22c55e',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            SAVE
          </button>
        </>
      )}
    </div>
  );
}
