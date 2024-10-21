import { redirect } from 'next/navigation';
import '../../page.module.css';

const HomePage = () => {
  redirect('/form/step-1');
  
};


export default HomePage;
