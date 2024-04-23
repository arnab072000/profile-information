import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
    </div>
  );
};

export default ProfileDetails;
