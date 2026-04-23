import type { Student } from '../types';

const STUDENTS: Student[] = ['Ronan', 'Audrina', 'Caleb', 'Ayden', 'Jaxon', 'Jacob', 'Finnley'];

interface StudentSelectionProps {
  onSelect: (student: Student) => void;
}

export function StudentSelection({ onSelect }: StudentSelectionProps) {
  return (
    <div style={{ padding: '16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem' }}>
        Select Student
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        {STUDENTS.map((student) => (
          <button
            key={student}
            onClick={() => onSelect(student)}
            style={{
              padding: '32px 16px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              background: '#eff6ff',
              cursor: 'pointer',
              minHeight: '80px',
            }}
          >
            {student}
          </button>
        ))}
      </div>
    </div>
  );
}
