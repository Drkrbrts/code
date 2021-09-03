import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App(){
  const notify = () => toast("Successful!");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
}

export default App; 