import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate() // ✅ navigation hook

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    }
    await axios.post("http://localhost:4001/contact", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Message sent successfully");

          // ✅ Save to localStorage
          localStorage.setItem("ContactData", JSON.stringify(userInfo))

          // ✅ Redirect to home after success
          setTimeout(() => {
            navigate("/")
          }, 1500) // thoda delay taki toast dikh jaye
        }
      }).catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative border-[2px] shadow-md p-5 rounded-md w-[500px] 
                      bg-white text-black dark:bg-gray-800 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4">Contact Us</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none 
                         bg-white text-black"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none 
                         bg-white text-black"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full px-3 py-2 border rounded-md outline-none 
                         bg-white text-black"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">Message is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
