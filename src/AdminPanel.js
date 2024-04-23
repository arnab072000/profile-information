
import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    address: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProfile(formData);
  };

  const handleDelete = id => {
    deleteProfile(id);
  };

  const addProfile = data => {
    setProfiles([...profiles, data]);
  };

  const deleteProfile = id => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="admin-panel">
      <h2>Add/Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="photo">Photo URL:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      
      <h2>Delete Profile</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.name}{' '}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
