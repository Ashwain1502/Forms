import React from 'react';

const SummaryPopup = ({ formData, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg relative">
        <button className="absolute top-2 right-2 text-red-500" onClick={closePopup}>X</button>
        <h2 className="text-2xl mb-4">Application Summary</h2>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        <p><strong>Position Applied For:</strong> {formData.position}</p>
        {(formData.position === 'Developer' || formData.position === 'Designer') && (
          <p><strong>Relevant Experience (Years):</strong> {formData.relevantExperience}</p>
        )}
        {formData.position === 'Designer' && (
          <p><strong>Portfolio URL:</strong> {formData.portfolioURL}</p>
        )}
        {formData.position === 'Manager' && (
          <p><strong>Management Experience:</strong> {formData.managementExperience}</p>
        )}
        <p><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
        <p><strong>Preferred Interview Time:</strong> {new Date(formData.preferredInterviewTime).toLocaleString()}</p>
        <div className='mt-4 flex justify-center'>
          <button onClick={closePopup} className="bg-[#588157] text-xl pt-1 pb-1 pl-4 pr-4 rounded-full">OK</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPopup;
