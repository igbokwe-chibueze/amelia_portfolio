import { useRef, useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import { motion } from "framer-motion";
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon } from "../constants/icons";
import { urlFor, client } from "../client";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import { Alert, CustomBtn} from "../components";


import Lottie from "lottie-react";
import { deliveryVan, deliverySent } from "../assets";


const leftSlideVariants = {
  whileInView: {
    x: [-100, 0],
    opacity: [0, 1],
    // Animation transition properties
    transition: {
      duration: 1.2, // Animation duration in seconds
      ease: 'easeInOut',
    },
  },
};

const rightSlideVariants = {
  whileInView: {
    x: [100, 0],
    opacity: [0, 1],
    // Animation transition properties
    transition: {
      duration: 1.2, // Animation duration in seconds
      ease: 'easeInOut',
    },
  },
};


const Contact = MotionWrap(AppWrap(() => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [contact, setcontact] = useState([]);
  
  // Fetch contact data using the 'client' object on component mount
  useEffect(() => {
    // Define queries to fetch data from the 'contact' from Sanity
    const query = '*[_type == "contact"][0]'; // Fetch the first contact object.

    // Fetch contact data
    client.fetch(query).then((data) => {
      setcontact(data);
    });

  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

 const handleFocus = () => {
    setCurrentImage(1); // Set the state to show the second image on focus
  };

  const handleBlur = () => {
    setCurrentImage(0); // Set the state to show the first image on blur
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentImage(2); // Set the state to show the third image on submission

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: contact.email,
          from_email: form.email,
          to_email: contact.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentImage(0);
            setForm({
              name: "",
              email: "",
              message: "",
            }); // Clears the contact form back to blank.
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "Message failed to send 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='w-full min-h-screen'>
      <h2 className="head-text">
        Have a project in mind ? <span className="text-[#7700ff]">Lets build together.</span>
      </h2>
      <div className='relative flex flex-col-reverse tablet:flex-row mt-6 mb-4 w-full'>

        {alert.show && <Alert {...alert} />}
        
        {/* Contact Form and Cards */}
        <motion.div
          variants={leftSlideVariants}
          whileInView={leftSlideVariants.whileInView}
          className="w-full tablet:w-1/2 px-4"
        >

          {/* Container for displaying contact cards */}
          <div className="contact-cards">
            {/* Card for email contact */}
            <motion.a 
              href={`mailto:${contact.email} `}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.5 }}
              className="contact-card bg-chartreuse-color  border border-caribbean-current"
            >
              <EnvelopeIcon className="w-10 h-10 mr-4 text-caribbean-current"/>
              <p className="p-text font-semibold">{contact.email}</p>
            </motion.a>

            {/* Card for phone contact */}
            <motion.a 
              //href="tel:+1 (123) 456-7890" 
              href={`tel:${contact.phone} `}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.5 }}
              className="contact-card bg-white  border border-caribbean-current"
            >
              <PhoneIcon className="w-10 h-10 mr-4 text-caribbean-current"/>
              <p className="p-text font-semibold">{contact.phone}</p>
            </motion.a>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 mt-8'
          >
            {/* Name Input */}
            <label htmlFor="name" className='label'>
              <input
                id="name"
                type='text'
                name='name'
                className='input'
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span 
                className='contact-span'
              >
                Name
              </span>
            </label>

            {/* Email Input */}
            <label htmlFor="email" className='label'>
              <input
                id="email"
                type='email'
                name='email'
                className='input'
                placeholder='john.doe@example.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span 
                className='contact-span'
              >
                Email
              </span>
            </label>

            {/* Message Textarea */}
            <label htmlFor="message" className='label'>
              <textarea
                id="message"
                name='message'
                rows='4'
                className='input'
                placeholder='Write your thoughts here...'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
                <span 
                  className='contact-span'
                >
                  Your Message
                </span>
            </label>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <motion.div 
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.3 }}
                className="w-fit"
              >
                <CustomBtn
                  btnType='submit'
                  classProps={`gap-4 px-8 py-2 ${loading ? 'animate-pulse' : ''}`}
                  label={loading ? 'Sending...' : 'Submit'} 
                  backgroundColor={"bg-chartreuse-color"} 
                  borderColor={"border-1 border-midnight-green"} 
                  textColor={"text-midnight-green"}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={loading}  // Disable the button during download
                >
                  <ArrowRightIcon 
                    className={`w-[35px] h-[35px] text-chartreuse-color fill-midnight-green `}
                  />
                </CustomBtn>
              </motion.div>
            </div>
          </form>
        </motion.div>

        {/* Profile Image and Animation */}
        <motion.div
          variants={window.innerWidth > 639 ? rightSlideVariants : leftSlideVariants}
          whileInView="whileInView"
          className=" flex flex-col items-center w-full h-auto px-4 tablet:px-0"
        >
          <div className="bg-midnight-green rounded-2xl w-full tablet:w-[350px] h-64 mx-4 tablet:mx-0">
            {contact.imgUrl ? (
              <img 
                src={urlFor(contact.imgUrl)} 
                alt="profile_bg"
                className="object-contain w-full h-full"
              />
            ) : (
              "" // In the absence of a profile picture, leave the area blank. I can also place a temporal picture here.
            )}
          </div>
          <div className="hidden tablet:flex tablet:items-center w-1/2 h-[150px]">
            {currentImage === 0 && <Lottie animationData={deliveryVan} autoplay={false}/>}
            {currentImage === 1 && <Lottie animationData={deliveryVan} autoplay={true}/>}
            {currentImage === 2 && <Lottie animationData={deliverySent} autoplay={true}/>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}, 'contact', 'bg-tea-green'));

export default Contact