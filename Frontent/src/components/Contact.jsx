import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data:", data)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative border-[2px] shadow-md p-5 rounded-md w-[500px]">
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
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
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
              className="textarea textarea-bordered w-full"
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
