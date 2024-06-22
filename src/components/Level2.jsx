import { useState } from 'react';
import level2 from '../assets/level2.jpg'
import SummaryPopup from './SummaryPopup';

const Level2 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: ''
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const skills = checked
          ? [...prevData.additionalSkills, value]
          : prevData.additionalSkills.filter(skill => skill !== value);
        return { ...prevData, additionalSkills: skills };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be a valid number';
    }
    if (formData.position === 'Developer' || formData.position === 'Designer') {
      if (!formData.relevantExperience) {
        newErrors.relevantExperience = 'Relevant Experience is required';
      } else if (isNaN(formData.relevantExperience) || formData.relevantExperience <= 0) {
        newErrors.relevantExperience = 'Relevant Experience must be a number greater than 0';
      }
    }
    if (formData.position === 'Designer' && !formData.portfolioURL) {
      newErrors.portfolioURL = 'Portfolio URL is required';
    } else if (formData.portfolioURL && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.portfolioURL)) {
      newErrors.portfolioURL = 'Portfolio URL is invalid';
    }
    if (formData.position === 'Manager' && !formData.managementExperience) {
      newErrors.managementExperience = 'Management Experience is required';
    }
    if (formData.additionalSkills.length === 0) {
      newErrors.additionalSkills = 'At least one skill must be selected';
    }
    if (!formData.preferredInterviewTime) {
      newErrors.preferredInterviewTime = 'Preferred Interview Time is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#344E41] h-[100vh] w-[100%] flex justify-center items-center">
      <div className="bg-[#DAD7CD] h-[80vh] w-[70vw] flex flex-row rounded-lg scroll-auto">
        <div className="w-[50%] overflow-hidden">
          <img
            src={level2} 
            alt="backgroundimage"
            className='rounded-tl-lg rounded-bl-lg'
          />
        </div>
        <div className='flex flex-col w-[50%] h-[100%] pl-8'>
          <div className='mt-4 mb-1 text-[36px] font-semibold'>
            Job Application Form :
          </div>
          <div className='w-[148px] h-[8px]  bg-[#344E41] mb-4'></div>
          <form className='flex flex-col overflow-y-auto h-[60vh]' onSubmit={handleSubmit}>
            <label htmlFor="fullName" className='text-lg'>Full Name :</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
              placeholder='Enter Your Full Name'
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

            <label htmlFor="email" className='text-lg'>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
              placeholder='Enter Your Email'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label htmlFor="phoneNumber" className='text-lg'>Phone Number :</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
              placeholder='Enter Your Phone Number'
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

            <label htmlFor="position" className='text-lg'>Applying for Position :</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
            >
              <option value="">Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}

            {(formData.position === 'Developer' || formData.position === 'Designer') && (
              <>
                <label htmlFor="relevantExperience" className='text-lg'>Relevant Experience (Years) :</label>
                <input
                  type="number"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleChange}
                  className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
                  placeholder='Enter Your Relevant Experience'
                />
                {errors.relevantExperience && <p className="text-red-500 text-sm">{errors.relevantExperience}</p>}
              </>
            )}

            {formData.position === 'Designer' && (
              <>
                <label htmlFor="portfolioURL" className='text-lg'>Portfolio URL :</label>
                <input
                  type="text"
                  name="portfolioURL"
                  value={formData.portfolioURL}
                  onChange={handleChange}
                  className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
                  placeholder='Enter Your Portfolio URL'
                />
                {errors.portfolioURL && <p className="text-red-500 text-sm">{errors.portfolioURL}</p>}
              </>
            )}

            {formData.position === 'Manager' && (
              <>
                <label htmlFor="managementExperience" className='text-lg'>Management Experience :</label>
                <textarea
                  name="managementExperience"
                  value={formData.managementExperience}
                  onChange={handleChange}
                  className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
                  placeholder='Describe Your Management Experience'
                />
                {errors.managementExperience && <p className="text-red-500 text-sm">{errors.managementExperience}</p>}
              </>
            )}

            <label htmlFor="additionalSkills" className='text-lg'>Additional Skills :</label>
            <div className='flex flex-wrap mb-2'>
              {['JavaScript', 'CSS', 'Python', 'React', 'Node.js', 'Django'].map(skill => (
                <label key={skill} className='mr-4'>
                  <input
                    type="checkbox"
                    name="additionalSkills"
                    value={skill}
                    checked={formData.additionalSkills.includes(skill)}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  {skill}
                </label>
              ))}
            </div>
            {errors.additionalSkills && <p className="text-red-500 text-sm">{errors.additionalSkills}</p>}

            <label htmlFor="preferredInterviewTime" className='text-lg'>Preferred Interview Time :</label>
            <input
              type="datetime-local"
              name="preferredInterviewTime"
              value={formData.preferredInterviewTime}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
            />
            {errors.preferredInterviewTime && <p className="text-red-500 text-sm">{errors.preferredInterviewTime}</p>}

            <div className='mt-6 w-full flex justify-center items-center'>
              <button type="submit" className='bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <SummaryPopup formData={formData} closePopup={closePopup} />}
    </div>
  );
};

export default Level2;
