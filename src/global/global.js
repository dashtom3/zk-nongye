export default{
  baseUrl: 'http://chuangyegu.tongji.edu.cn/cyg/api/',
  // baseUrl:getHttpData('a'),
  // goPath: function (obj, url) {
  //   document.body.scrollTop = 0 + 'px'
  //   obj.$router.push({ name: url })
  // },
  success (obj, msg, url) {
    obj.$message({
      message: msg,
      type: 'success',
      duration: '1000',
      onClose: function () {
        if (url !== '') {
          obj.$router.push(url)
        }
      }
    })
  },
  error (obj, msg, url) {
    obj.$message({
      message: msg,
      duration: '1000',
      onClose: function () {
        if (url !== '') {
          obj.$router.push(url)
        }
      }
    })
  },
  postHttpData: function (data) {
    var temp = new FormData()
    for (var i in data) {
      if (data[i] != null) {
        temp.append(i, data[i])
      }
    }
    return temp
  },
  postHttpDataWithToken: function (data) {
    var temp = this.postHttpData(data)
    temp.append('token', this.getToken())
    return temp
  },
  getHttpData: function (data) {
    var temp = ''
    for (var i in data) {
      if (data[i] != null && data[i] !== 'null') {
        temp = temp + '&' + i + '=' + data[i]
      }
    }
    return temp
  },
  getToken: function () {
    var date = localStorage.getItem('cygtokentime')
    if (new Date().getTime() - date > 3600000) {
      return null
    }
    return localStorage.getItem('cygtoken')
  },
  setToken: function (token) {
    localStorage.setItem('cygtoken', token)
    localStorage.setItem('cygtokentime', new Date().getTime())
  },
  getUser: function () {
    return JSON.parse(localStorage.getItem('cyguser'))
  },
  setUser: function (caruser) {
    localStorage.setItem('cyguser', JSON.stringify(caruser))
  },
  logout: function () {
    localStorage.removeItem('cyguser')
    localStorage.removeItem('cygtokentime')
    localStorage.removeItem('cygtoken')
  },
  getDate(date) {
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+" "+date.getHours()+":"+(date.getMinutes()>9 ? date.getMinutes(): '0'+date.getMinutes())+":"+(date.getSeconds()>9 ? date.getSeconds():'0'+date.getSeconds())
  },
  convertData(data,geoCoordMap) {
      console.log(geoCoordMap)
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
              res.push(geoCoord.concat(data[i].value));
          }
      }
      return res;
  },
}
