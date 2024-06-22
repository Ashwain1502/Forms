

const Popup = ({ formData, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="p-8 rounded-lg relative bg-[#DAD7CD] w-[30%] h-[45%]">
        <button className="absolute top-2 right-2 text-black-500" onClick={closePopup}>X</button>
        <h2 className="text-2xl mb-4">Summary</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest === 'yes' ? 'Yes' : 'No'}</p>
        {formData.attendingWithGuest === 'yes' && (
          <p><strong>Guest Name:</strong> {formData.guestName}</p>
        )}
        <div className='mt-4 flex justify-center'>
          <button onClick={closePopup} className="bg-[#588157] text-xl pt-1 pb-1 pl-4 pr-4 rounded-full">OK</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
