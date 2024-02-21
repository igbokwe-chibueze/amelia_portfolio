import { Suspense, useRef, useState } from "react";
import { AppWrap } from "../wrapper";

const Contact = AppWrap(() => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  //const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // showAlert({
          //   show: true,
          //   text: "Thank you for your message 😃",
          //   type: "success",
          // });

          setTimeout(() => {
            //hideAlert(false);
            //setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          //setCurrentAnimation("idle");

          // showAlert({
          //   show: true,
          //   text: "I didn't receive your message 😢",
          //   type: "danger",
          // });
        }
      );
  };

  return (
    <section className='w-full min-h-screen'>
      <h2 className="head-text">
        Have a project in mind ? <span className="text-[#7700ff]">Lets build together.</span>
      </h2>
      <div className='relative flex flex-col laptop:flex-row mt-8'>
        <div className="w-full laptop:w-1/2 px-4 laptop:px-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 mt-14'
          >
            <div>
              <label htmlFor="name" className='relative block text-black font-semibold mb-2'>
                <input
                  id="name"
                  type='text'
                  name='name'
                  className='input'
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <span className="absolute left-2 top-2 px-1 transition duration-200 input-text">Test</span>
              </label>
            </div>


            <div>
              <label htmlFor="name" className='block text-black font-semibold mb-2'>
                Name
              </label>
              <input
                id="name"
                type='text'
                name='name'
                className='input'
                placeholder='John Doe'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="email" className='block text-black font-semibold mb-2'>
                Email
              </label>
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
            </div>
            <div>
              <label htmlFor="message" className='block text-black font-semibold mb-2'>
                Your Message
              </label>
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
            </div>

            <button
              type='submit'
              disabled={loading}
              className='mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="w-full laptop:w-1/2 flex items-center justify-center">
          {/* Your 3D content here */}
          3D
        </div>
      </div>


    </section>
  )
}, 'contact', 'bg-tea-green');

export default Contact