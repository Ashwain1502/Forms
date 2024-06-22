import React from 'react';

const Popup = ({ showPopup, closePopup, formData, additionalQuestions }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-xl" onClick={closePopup}>
          &times;
        </button>
        <h2 className="text-2xl mb-4">Survey Summary</h2>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
        {formData.surveyTopic === 'Technology' && (
          <>
            <p><strong>Favorite Programming Language:</strong> {formData.favoriteProgrammingLanguage}</p>
            <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
          </>
        )}
        {formData.surveyTopic === 'Health' && (
          <>
            <p><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
            <p><strong>Diet Preference:</strong> {formData.dietPreference}</p>
          </>
        )}
        {formData.surveyTopic === 'Education' && (
          <>
            <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
            <p><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
          </>
        )}
        <p><strong>Feedback:</strong> {formData.feedback}</p>
        <h3 className="text-xl mt-4">Additional Questions:</h3>
        {additionalQuestions.map((question, index) => (
          <p key={index}>{question}</p>
        ))}
        <button className="bg-[#588157] text-white mt-4 pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl" onClick={closePopup}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
