import { redirect } from 'next/navigation';
import 'react-international-phone/style.css'; 

const HomePage = () => {
  redirect('/form/step-1');
  
};


export default HomePage;
