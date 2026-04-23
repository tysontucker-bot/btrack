import { useState } from 'react';
import { StudentSelection } from './components/StudentSelection';
import { QuickEntry } from './components/QuickEntry';
import type { Student, BehaviorEntry } from './types';

function App() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  // entries accumulates saved records in local state
  const [, setEntries] = useState<BehaviorEntry[]>([]);

  function handleSelectStudent(student: Student) {
    setSelectedStudent(student);
  }

  function handleSave(entry: BehaviorEntry) {
    setEntries((prev) => [...prev, entry]);
    setSelectedStudent(null);
  }

  function handleBack() {
    setSelectedStudent(null);
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {selectedStudent === null ? (
        <StudentSelection onSelect={handleSelectStudent} />
      ) : (
        <QuickEntry student={selectedStudent} onSave={handleSave} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
