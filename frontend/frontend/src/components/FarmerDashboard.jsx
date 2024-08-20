import React, { useState } from 'react';
import './FarmerDashboard.css';
import { FaUser, FaPhone, FaMapMarkerAlt, FaLandmark, FaIdBadge, FaEdit, FaPlus } from 'react-icons/fa';

const FarmerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    dob: '1985-08-15',
    age: 39,
    gender: 'Male',
    phone: '1234567890',
    email: 'john.doe@example.com',
    village: 'Green Village',
    city: 'Green City',
    district: 'Green District',
    state: 'Green State',
    postalcode: '123456',
    land: 'Farm Land',
    landacre: '50',
    aadhaarNumber: '1234-5678-9012',
    farmerCard: 'ABCD1234'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully');
    setIsEditing(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Farmer Dashboard</h1>
      <div className="dashboard-layout">
        {/* Column 1 */}
        <div className="dashboard-column">
          <div className="dashboard-card personal-info-card">
            <div className="card-header">
              <FaUser className="card-icon" /> Personal Information
            </div>
            <div className="card-content">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Date of Birth:</strong> {formData.dob}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
            </div>
            <div className="card-footer">
              <button onClick={handleEditClick} className="edit-profile-button">
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="dashboard-card contact-info-card">
            <div className="card-header">
              <FaPhone className="card-icon" /> Contact Information
            </div>
            <div className="card-content">
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
          </div>

          <div className="dashboard-card address-info-card">
            <div className="card-header">
              <FaMapMarkerAlt className="card-icon" /> Address Details
            </div>
            <div className="card-content">
              <p><strong>Village:</strong> {formData.village}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>District:</strong> {formData.district}</p>
              <p><strong>State:</strong> {formData.state}</p>
              <p><strong>Postal Code:</strong> {formData.postalcode}</p>
            </div>
          </div>

          <div className="dashboard-card land-info-card">
            <div className="card-header">
              <FaLandmark className="card-icon" /> Land Information
            </div>
            <div className="card-content">
              <p><strong>Land:</strong> {formData.land}</p>
              <p><strong>Land Acreage:</strong> {formData.landacre} acres</p>
            </div>
            <div className="card-footer">
              <button className="add-product-button">
                <FaPlus className="button-icon" /> Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="dashboard-column">
          <div className="dashboard-card id-info-card">
            <div className="card-header">
              <FaIdBadge className="card-icon" /> Identification Details
            </div>
            <div className="card-content">
              <p><strong>Aadhaar Number:</strong> {formData.aadhaarNumber}</p>
              <p><strong>Farmer Card:</strong> {formData.farmerCard}</p>
            </div>
          </div>

          {/* Update Information Section */}
          <div className={`dashboard-card ${isEditing ? 'editing-mode' : ''} update-info-card`}>
            <div className="card-header">
              <FaEdit className="card-icon" /> {isEditing ? 'Update Information' : 'View Information'}
            </div>
            <div className="card-content">
              {isEditing ? (
                <form onSubmit={handleSubmit} className="update-form">
                  {Object.entries(formData).map(([key, value]) => (
                    <div className="form-group" key={key}>
                      <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                      <input
                        type={key === 'dob' ? 'date' : key === 'age' || key === 'landacre' ? 'number' : 'text'}
                        name={key}
                        id={key}
                        value={value}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                  <button type="submit" className="submit-button">Save Changes</button>
                </form>
              ) : (
                <p>Click "Edit Profile" to make changes.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
