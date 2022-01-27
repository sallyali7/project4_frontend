import axios from 'axios'

const baseUrl = '/api'

export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  window.localStorage.removeItem('token')
}

function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export function setId(userId) {
  window.localStorage.setItem('userId', userId)
}

export function getId() {
  return window.localStorage.getItem('userId')
}

export function removeId() {
  window.localStorage.removeItem('userId')
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

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

export function registerUser(formdata) {
  console.log(formdata) 
  return axios.post(`${baseUrl}/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login/`, formdata)
}
