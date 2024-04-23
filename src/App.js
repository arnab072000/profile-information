
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './ProfileList';
import ProfileDetails from './ProfileDetails';
import Map from './Map';
import AdminPanel from './AdminPanel';
import SearchFilter from './SearchFilter';
import LoadingIndicator from './LoadingIndicator';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch profiles here
    // For example:
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    try {
      // Simulate API call
      const response = await fetch('https://api.example.com/profiles');
      const data = await response.json();
      setProfiles(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setLoading(false);
    }
  };

  const handleSearch = searchTerm => {
    //search functionality
    console.log('Search term:', searchTerm);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Profile Explorer</h1>
          <SearchFilter handleSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ErrorBoundary>
                  {loading ? <LoadingIndicator /> : <ProfileList profiles={profiles} />}
                </ErrorBoundary>
              }
            />
            <Route path="/profile/:id" element={<ErrorBoundary><ProfileDetails /></ErrorBoundary>} />
            <Route path="/map" element={<ErrorBoundary><Map /></ErrorBoundary>} />
            <Route path="/admin" element={<ErrorBoundary><AdminPanel /></ErrorBoundary>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;





