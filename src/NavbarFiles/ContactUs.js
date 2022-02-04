import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    })
  }
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      }

      await emailjs.send(
        process.env.REACT_APP_SERVICE_hnqaunl,
        process.env.REACT_APP_TEMPLATE_he6xh17,
        templateParams,
        process.env.REACT_APP_USER_7dIaQw2VAvKmZKVdnFa9
      )

      reset()
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-light text-black">
              <div className="card-body p-5 text-center">
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="form-outline mb-4">
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  // <div className='ContactForm'>
  //   <div className='container'>
  //     <div className='row'>
  //       <div className='col-12 text-center'>
  //         <div className='contactForm'>
  //           <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
  //             {/* Row 1 of form */}
  //             <div className='row formRow'>
  //               <div className='col-6'>
  //                 <input
  //                   type='text'
  //                   name='name'
  //                   {...register('name', {
  //                     required: { value: true, message: 'Please enter your name' },
  //                     maxLength: {
  //                       value: 30,
  //                       message: 'Please use 30 characters or less',
  //                     },
  //                   })}
  //                   className='form-control formInput'
  //                   placeholder='Name'
  //                 ></input>
  //                 {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
  //               </div>
  //               <div className='col-6'>
  //                 <input
  //                   type='email'
  //                   name='email'
  //                   {...register('email', {
  //                     required: true,
  //                     pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //                   })}
  //                   className='form-control formInput'
  //                   placeholder='Email address'
  //                 ></input>
  //                 {errors.email && (
  //                   <span className='errorMessage'>Please enter a valid email address</span>
  //                 )}
  //               </div>
  //             </div>
  //             {/* Row 2 of form */}
  //             <div className='row formRow'>
  //               <div className='col'>
  //                 <input
  //                   type='text'
  //                   name='subject'
  //                   {...register('subject', {
  //                     required: { value: true, message: 'Please enter a subject' },
  //                     maxLength: {
  //                       value: 75,
  //                       message: 'Subject cannot exceed 75 characters',
  //                     },
  //                   })}
  //                   className='form-control formInput'
  //                   placeholder='Subject'
  //                 ></input>
  //                 {errors.subject && (
  //                   <span className='errorMessage'>{errors.subject.message}</span>
  //                 )}
  //               </div>
  //             </div>
  //             {/* Row 3 of form */}
  //             <div className='row formRow'>
  //               <div className='col'>
  //                 <textarea
  //                   rows={3}
  //                   name='message'
  //                   {...register('message', {
  //                     required: true,
  //                   })}
  //                   className='form-control formInput'
  //                   placeholder='Message'
  //                 ></textarea>
  //                 {errors.message && <span className='errorMessage'>Please enter a message</span>}
  //               </div>
  //             </div>
  //             <button className='submit-btn' type='submit'>
  //               Submit
  //             </button>
  //           </form>
  //         </div>
  //         <ToastContainer />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default ContactForm











// import ButtonMailto from './mailto'

// function ContactUs(){
//   return (
//     <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
//   )
// }

// export default ContactUs