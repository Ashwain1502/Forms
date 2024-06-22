import { useNavigate } from 'react-router-dom';
import homebg from '../assets/homebg.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#344E41] h-[100vh] w-[100%] flex justify-center items-center'>
      <div className='bg-[#DAD7CD] h-[80vh] w-[70vw] flex flex-row rounded-lg'>
        <div className='w-[50%] overflow-hidden'>
          <img 
            src={homebg} 
            alt="background image" 
            className='rounded-tl-lg rounded-bl-lg'
          />
        </div>
        <div className='w-[70%] h-[100%] flex justify-center items-center gap-10'>
          <button
            className='bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl'
            onClick={() => navigate('/level1')}
          >
            Level 1
          </button>
          <button
            className='bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl'
            onClick={() => navigate('/level2')}
          >
            Level 2
          </button>
          <button
            className='bg-[#588157] text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl'
            onClick={() => navigate('/level3')}
          >
            Level 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
