import { useState } from 'react';
import axios from 'axios';
import level3 from '../assets/level3.jpg'
import Popup from './Popup';

const Level3 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';
    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteProgrammingLanguage) newErrors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of Experience is required';
      else if (formData.yearsOfExperience <= 0) newErrors.yearsOfExperience = 'Years of Experience must be greater than 0';
    }
    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.dietPreference) newErrors.dietPreference = 'Diet Preference is required';
    }
    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
      if (!formData.fieldOfStudy) newErrors.fieldOfStudy = 'Field of Study is required';
    }
    if (!formData.feedback) newErrors.feedback = 'Feedback is required';
    else if (formData.feedback.length < 50) newErrors.feedback = 'Feedback must be at least 50 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.get('https://api.example.com/questions', {
        params: { topic: formData.surveyTopic }
      });
      setAdditionalQuestions(response.data.questions);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching additional questions', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#344E41] h-[100vh] w-[100%] flex justify-center items-center">
      <div className="bg-[#DAD7CD] h-[80vh] w-[70vw] flex flex-row rounded-lg">
        <div className="w-[50%] overflow-hidden">
          <img 
            src={level3} 
            alt="background image" 
            className="rounded-tl-lg rounded-bl-lg" />
        </div>
        <div className='flex flex-col w-[50%] h-[100%] pl-8'>
          <div className='mt-4 mb-1 text-[36px] font-semibold'>
            Survey Form :
          </div>
          <div className='w-[148px] h-[8px]  bg-[#344E41] mb-4'></div>
        <div className="w-full h-[150vh] flex overflow-auto">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-2">
              <label className="text-lg">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter Your Name'
                className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="mb-2">
              <label className="text-lg">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-2">
              <label className="text-lg">Survey Topic:</label>
              <select
                name="surveyTopic"
                value={formData.surveyTopic}
                onChange={handleChange}
                className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
              >
                <option value="">Select Topic</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
              {errors.surveyTopic && <p className="text-red-500 text-sm">{errors.surveyTopic}</p>}
            </div>

            {formData.surveyTopic === 'Technology' && (
              <div className="mb-2">
                <label className="text-lg">Favorite Programming Language:</label>
                <select
                  name="favoriteProgrammingLanguage"
                  value={formData.favoriteProgrammingLanguage}
                  onChange={handleChange}
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteProgrammingLanguage && <p className="text-red-500 text-sm">{errors.favoriteProgrammingLanguage}</p>}

                <label className="text-lg">Years of Experience:</label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  placeholder='Enter Your Experience'
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                />
                {errors.yearsOfExperience && <p className="text-red-500 text-sm">{errors.yearsOfExperience}</p>}
              </div>
            )}

            {formData.surveyTopic === 'Health' && (
              <div className="mb-2">
                <label className="text-lg">Exercise Frequency:</label>
                <select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && <p className="text-red-500 text-sm">{errors.exerciseFrequency}</p>}

                <label className="text-lg">Diet Preference:</label>
                <select
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleChange}
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && <p className="text-red-500 text-sm">{errors.dietPreference}</p>}
              </div>
            )}

            {formData.surveyTopic === 'Education' && (
              <div className="mb-2">
                <label className="text-lg">Highest Qualification:</label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelors</option>
                  <option value="Master's">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && <p className="text-red-500 text-sm">{errors.highestQualification}</p>}

                <label className="text-lg">Field of Study:</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  placeholder='Enter Your Field of Study'
                  className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full"
                />
                {errors.fieldOfStudy && <p className="text-red-500 text-sm">{errors.fieldOfStudy}</p>}
              </div>
            )}

            <div className="mb-2">
              <label className="text-lg">Feedback:</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder='Enter Your Feedback in more than 50 words.'
                className="outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D] w-full h-24"
              />
              {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Popup
        showPopup={showPopup}
        closePopup={closePopup}
        formData={formData}
        additionalQuestions={additionalQuestions}
      />
    </div>
  );
};

export default Level3;
