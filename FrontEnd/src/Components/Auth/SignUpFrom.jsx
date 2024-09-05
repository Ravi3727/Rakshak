import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpFrom() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    photo: "",
    age: "",
    address: "",
    phoneNumber: "",
    gender: "",  // Added gender field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    // Add sign-up logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.photo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpFrom;
