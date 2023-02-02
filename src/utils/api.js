import apiClient from '../axios/axiosConfig'
export const apiCreateReport = async (images, report) => {
    let data = new FormData()
    let imgs = images.filter(i => i !== null)
    if (imgs.length > 0) {
      imgs.forEach(i => {
        data.append('file', i)
      })
    }
    data.append('report', JSON.stringify(report))
  
    return await apiClient({
      method: 'POST',
      url: `/api/report`,
      data,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
    });
  }
  export const apiLogin = async (email, password) => {

    let login = new URLSearchParams({ login: email, password: password })
    return await apiClient({
      method: 'POST',
      url: `/api/login`,
      data: login,
      config: {
        headers: {
          'Accept': 'application/json',
        }
      }
    })
  }
  