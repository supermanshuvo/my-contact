import React  from 'react';
import Navbar from './components/Navbar';
import ContactTable from './components/ContactTable';
function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <ContactTable />
      </div>
    </div>
  );
}

export default App;
