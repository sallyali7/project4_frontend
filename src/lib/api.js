import axios from 'axios'

const baseUrl = '/api'


export function getAllJobs() {
  return axios.get(`${baseUrl}/jobs`)
}

export function getSingleJob(jobId) {
  return axios.get(`${baseUrl}/jobs/${jobId}`)
}

export function getAllBlogs() {
  return axios.get(`${baseUrl}/blogs`)
}

export function getSingleBlog(blogId) {
  return axios.get(`${baseUrl}/blogs/${blogId}`)
}

export function registerUser(formData) {
  console.log(formData) 
  return axios.post(`${baseUrl}/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login/`, formData)
}
