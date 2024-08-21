import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../Photos/bg_01.jpg";
import bg2 from "../Photos/bg_02.jpg";
import bg3 from "../Photos/bg_03.jpg";
import defaultBackground from "../Photos/farm1.jpg";

const MultiStepSignup = () => {
  const [step, setStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    phone: "",
    profilePhoto: null,
    village: "",
    city: "",
    district: "",
    state: "",
    postalcode: "",
    land: "",
    landacre: "",
    aadhaar: "",
    password: "",
    confirmPassword: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Step 1 validation
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.age || isNaN(formData.age)) newErrors.age = "Valid age is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone number is required";
      if (!formData.profilePhoto) newErrors.profilePhoto = "Profile photo is required";
    }

    // Step 2 validation
    if (step === 2) {
      if (!formData.village.trim()) newErrors.village = "Village is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.district.trim()) newErrors.district = "District is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.postalcode || !/^\d{6}$/.test(formData.postalcode)) newErrors.postalcode = "Valid 6-digit postal code is required";
    }

    // Step 3 validation
    if (step === 3) {
      if (!formData.land.trim()) newErrors.land = "Land details are required";
      if (!formData.landacre || isNaN(formData.landacre)) newErrors.landacre = "Valid land area in acres is required";
      if (!formData.aadhaar || !/^\d{12}$/.test(formData.aadhaar)) newErrors.aadhaar = "Valid 12-digit Aadhaar number is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      try {
        const response = await fetch("http://localhost:8080/api/farmer/create", {
          method: "POST",
          body: formDataToSend,
        });

        if (response.ok) {
          // Handle success (e.g., redirect to the dashboard)
          navigate("/dashboard");
        } else {
          // Handle server errors
          console.error("Server error:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  const getBackgroundImage = () => {
    switch (step) {
      case 1:
        return `url(${bg1})`;
      case 2:
        return `url(${bg2})`;
      case 3:
        return `url(${bg3})`;
      default:
        return `url(${defaultBackground})`;
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: getBackgroundImage() }}
    >
      <div className="max-w-lg w-full p-6 bg-white bg-opacity-70 shadow-lg rounded-lg">
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center font-serif text-gray-800">
              Farmer Registration
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Profile Photo
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                />
                {errors.profilePhoto && <p className="text-red-500 text-sm">{errors.profilePhoto}</p>}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-7 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 font-serif font-bold"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-serif font-bold"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center font-serif text-gray-800">
              Farmer Registration
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Village
                </label>
                <input
                  type="text"
                  id="village"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter village"
                  value={formData.village}
                  onChange={handleInputChange}
                />
                {errors.village && <p className="text-red-500 text-sm">{errors.village}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter district"
                  value={formData.district}
                  onChange={handleInputChange}
                />
                {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalcode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter postal code"
                  value={formData.postalcode}
                  onChange={handleInputChange}
                />
                {errors.postalcode && <p className="text-red-500 text-sm">{errors.postalcode}</p>}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-7 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 font-serif font-bold"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-serif font-bold"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center font-serif text-gray-800">
              Farmer Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Land Name
                </label>
                <input
                  type="text"
                  id="land"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter land name"
                  value={formData.land}
                  onChange={handleInputChange}
                />
                {errors.land && <p className="text-red-500 text-sm">{errors.land}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Land Area (in acres)
                </label>
                <input
                  type="text"
                  id="landacre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter land area in acres"
                  value={formData.landacre}
                  onChange={handleInputChange}
                />
                {errors.landacre && <p className="text-red-500 text-sm">{errors.landacre}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaar"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Aadhaar number"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                />
                {errors.aadhaar && <p className="text-red-500 text-sm">{errors.aadhaar}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 font-serif">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-7 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 font-serif font-bold"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-serif font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepSignup;
