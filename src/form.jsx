import React, { useState } from "react";

const Form = () => {
  const [children, setChildren] = useState([
    { name: "", age: "", gender: "", grade: "", school: "" },
  ]);
  const [parent, setParent] = useState({
    name: "",
    phone1: "",
    phone2: "",
    address: "",
  });
  const [tutorial, setTutorial] = useState({
    daysPerWeek: "",
    hoursPerDay: "",
    subject: "",
  });
  const [extra, setExtra] = useState("");
  const [estimate, setEstimate] = useState(0);

  const addChild = () => {
    setChildren([
      ...children,
      { name: "", age: "", gender: "", grade: "", school: "" },
    ]);
  };

  const handleChildChange = (index, field, value) => {
    const updated = [...children];
    updated[index][field] = value;
    setChildren(updated);
  };

  const calculateEstimate = () => {
    const rate = 240; // example birr/hour
    const total = tutorial.daysPerWeek * tutorial.hoursPerDay * rate * 4;
    setEstimate(total || 0);
  };
//  aws
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ parent, children, tutorial, extra, estimate }),
    });
    

    const data = await response.json();

    if (data.success) alert("Form submitted successfully!");
    else alert("Failed to send form: " + (data.message || "Unknown error"));
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Error submitting form. Check console for details.");
  }
};



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
      >
        {/* Parent Information */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Parent Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) => setParent({ ...parent, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) => setParent({ ...parent, phone1: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) => setParent({ ...parent, phone2: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) => setParent({ ...parent, address: e.target.value })}
            />
          </div>
        </div>

        {/* Child Information */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Child Information</h2>
        {children.map((child, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 mb-6 rounded-lg shadow-sm"
          >
            <p className="font-medium text-gray-700 mb-4 text-lg">Child {index + 1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Child Name</label>
                <input
                  type="text"
                  placeholder="Child Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={(e) => handleChildChange(index, "name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={(e) => handleChildChange(index, "age", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={(e) => handleChildChange(index, "gender", e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={(e) => handleChildChange(index, "grade", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={(e) => handleChildChange(index, "school", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addChild}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 mb-8"
        >
          Add Another Child
        </button>

        {/* Tutorial Details */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Tutorial Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Days per Week</label>
            <input
              type="number"
              placeholder="Days per Week"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) =>
                setTutorial({ ...tutorial, daysPerWeek: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hours per Day</label>
            <input
              type="number"
              placeholder="Hours per Day"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) =>
                setTutorial({ ...tutorial, hoursPerDay: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subjects</label>
            <input
              type="text"
              placeholder="Subjects"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              onChange={(e) =>
                setTutorial({ ...tutorial, subject: e.target.value })
              }
            />
          </div>
        </div>

        {/* Extra Information */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
          <textarea
            placeholder="Anything you want to add"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="4"
            onChange={(e) => setExtra(e.target.value)}
          />
        </div>

        {/* Estimate Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={calculateEstimate}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Calculate Estimate
              </button>
            </div>
            <div className="text-lg text-gray-700">
              Your estimated monthly value is{" "}
              <span className="font-bold text-blue-600">{estimate} birr</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-900 transition duration-200 text-lg font-medium"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;