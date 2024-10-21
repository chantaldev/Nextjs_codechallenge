import { redirect } from 'next/navigation';
import '../app/page.module.css';

const HomePage = () => {
  redirect('/form/step-1');
  
};


export default HomePage;
