import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'ba634933-a40a-488e-bf8b-9720d0155fba'}
})

export const userAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  getAuth(){
    return instance.get('auth/me').then(response => response.data)
  }
}

export const followAPI = {
  setUnfollow(userID: number){
    return instance.delete(`follow/${userID}`).then(response => response.data)
  },
  setFollow(userID: number){
    return instance.post(`follow/${userID}`).then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId: string | undefined){
    return instance.get(`profile/${userId}`)
  }
}