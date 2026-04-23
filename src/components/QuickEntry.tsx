import { useState } from 'react';
import type { Student, Behavior, BehaviorEntry } from '../types';

const BEHAVIORS: Behavior[] = ['Refusal', 'Aggression', 'Elopement', 'Disruption'];

interface QuickEntryProps {
  student: Student;
  onSave: (entry: BehaviorEntry) => void;
  onBack: () => void;
}

export function QuickEntry({ student, onSave, onBack }: QuickEntryProps) {
  const [selectedBehavior, setSelectedBehavior] = useState<Behavior | null>(null);

  function handleSave() {
    if (!selectedBehavior) return;
    onSave({
      student,
      behavior: selectedBehavior,
      timestamp: new Date().toISOString(),
    });
  }

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
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1rem', fontWeight: 'normal', color: '#6b7280' }}>
        Select Behavior
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {BEHAVIORS.map((behavior) => (
          <button
            key={behavior}
            onClick={() => setSelectedBehavior(behavior)}
            style={{
              padding: '32px 16px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: `2px solid ${selectedBehavior === behavior ? '#ef4444' : '#d1d5db'}`,
              background: selectedBehavior === behavior ? '#fee2e2' : '#f9fafb',
              cursor: 'pointer',
              minHeight: '80px',
            }}
          >
            {behavior}
          </button>
        ))}
      </div>
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
