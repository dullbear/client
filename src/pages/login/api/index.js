import urlMap from '@url';
import md5 from 'md5';
export function fetchLoginData(data) {
  return new Promise((resolve, reject) => {
    console.log(md5(data.password))
    fetch(urlMap.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        password: md5(data.password),
        }),
      })
      .then(res => {
        console.log('转换 json 之前的数据');
        console.log(res);
        return res.json()
      })
      .then(res => {
        return resolve(res.msg);
      });
  });
}

export function fetchRegData(data) {
  return new Promise((resolve, reject) => {
    fetch(urlMap.reg, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        password: md5(data.password),
        college: data.college,
        idCard: data.idCard
      }),
    })
    .then(res => res.json())
    .then(res => {
      return resolve(res.msg);
    });
  });
}
