import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
// import { linkedin, GitHub} from '../assets';



const Contact = () => {
  const  formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setForm({...form, [name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_q24efmp',
      'template_mw9geei',
      {
        from_name:form.name,
        to_name:'Tejasvi',
        from_email:form.email,
        to_email:'tejasvi2708@gmail.com',
        message:form.message,
      },
      'PiBvHKP5t6zO1x3Lg'
    )
    .then(()=>{
      setLoading(false);
      alert('Thankyou. Your message is received.');

      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }
  return (
    <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-12 overflow-hidden">
      <motion.div 
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 pt-5 rounded-2xl'
      >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
             <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {/* <div className="w-25 h-20 ml-15 rounded-full flex justify-center items-center cursor-pointer">
          <img
           onClick={()=>window.open("https://www.linkedin.com/in/tejasvi-mishra27/","_blank")}
      src={linkedin}
      alt="linkedin"
      className="w-1/8 h-full"/>         
          <img 
          onClick={()=>window.open("https://github.com/tejasvi2708","_blank")}
      
      src={GitHub}
      alt="github"
      className="w-1/7 h-full
      "/>
      <h3>+91-8303902359</h3>
          </div> */}
          </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")