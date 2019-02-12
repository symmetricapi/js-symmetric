export default {
  url: /^(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i,
  ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
  slug: /^[a-z0-9-]+$/i,
  username: /^[a-z0-9_@\-+.]{3,150}$/i,
  color: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  phone: value => (value.split('x')[0].match(/\d/g) || []).length >= 10,
};
