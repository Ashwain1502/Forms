import { useState } from 'react';
import Popup from './Popup1'; // Import the Popup component
import level1 from '../assets/level1.jpg';

const Level1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: '',
    guestName: ''
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age <= 0) {
      newErrors.age = 'Age must be greater than 0';
    }
    if (formData.attendingWithGuest === 'yes' && !formData.guestName) {
      newErrors.guestName = 'Guest Name is required';
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
    <div className="bg-[#344E41] h-[100vh] w-[100%] flex justify-center items-center ">
      <div className="bg-[#DAD7CD] h-[80vh] w-[70vw] flex flex-row rounded-lg">
        <div className="w-[50%] overflow-hidden">
          <img
            src={level1}
            alt="backgroundimage"
            className='rounded-tl-lg rounded-bl-lg '
          />
        </div>
        <div className='flex flex-col w-[50%] h-[100%] pl-8'>
          <div className='mt-4 mb-1 text-[36px] font-semibold'>
            Fill The Form :
          </div>
          <div className='w-[148px] h-[8px] bg-[#344E41] mb-4'></div>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="name" className='text-lg'>Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
              placeholder='Enter Your Name'
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

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

            <label htmlFor="age" className='text-lg'>Age :</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
              placeholder='Enter Your Age'
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

            <label htmlFor="guest" className='text-lg inline'>Are you attending with a guest :</label>
            <div className='flex justify-center items-center gap-2 w-[80%] pt-1 pb-1'>
              <input
                type="radio"
                name="attendingWithGuest"
                id="yes"
                value="yes"
                onChange={handleChange}
                className=''
              />
              <label htmlFor="yes" className='mr-4'>Yes</label>

              <input
                type="radio"
                name="attendingWithGuest"
                id="no"
                value="no"
                onChange={handleChange}
                className=''
              />
              <label htmlFor="no">No</label>
            </div>
            {formData.attendingWithGuest === 'yes' && (
              <>
                <label htmlFor="guestName" className='text-lg'>Guest Name :</label>
                <input
                  type="text"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  className='outline-none bg-[#DAD7CD] mb-2 text-[#6D6D6D]'
                  placeholder='Enter Guest Name'
                />
                {errors.guestName && <p className="text-red-500 text-sm">{errors.guestName}</p>}
              </>
            )}

            <div className='mt-6 w-full flex justify-center items-center'>
              <button type="submit" className='bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <Popup formData={formData} closePopup={closePopup} />}
    </div>
  );
};

export default Level1;
