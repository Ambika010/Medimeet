import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAACK1BMVEUAAAD////////////////////////////////////////r6+vt7e3u7u7v7+/w8PDx8fHy8vLy8vLz8/Pz8/P19fX19fX29vb39/f39/f39/f4+Pj09PT09PT09PT19fX19fX19fX29vb29vb29vb09PT19fX19fX19fX19fX19fX29vb29vb29vb29vb29vb29vb09PT09PT09PT09PT09PT09PT19fX19fX19fX29vb09PT09PT09PT09PT09PT09PT19fX19fX19fX19fX19fX19fX19fX19fX19fX29vb29vb29vb09PT19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX29vb19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX29vb09PT19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWqqqqtra2urq6vr6+wsLCxsbGzs7O0tLS1tbW2tra4uLi8vLy+vr7IyMjLy8vMzMzPz8/Q0NDR0dHT09PU1NTV1dXW1tbX19fY2NjZ2dna2trc3Nzd3d3e3t7f39/g4ODi4uLk5OTl5eXp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fVPrSccAAAAiXRSTlMAAQIDBAUGBwgJDA0ODxAREhMUFRYZGhseICEiLS8wMTI1Njc4RExNTk9QUVJTVFVWW1xdXl9hZGVnb3N0dXZ3eH1/gIGCg4SFhoiJi42Sk5SXmJmam56fqqusra6wsbi6vcXGx8jJysvMzc/R0tPU1dbY2d3e3+Dl5+jq6+zt7u/w8fn6+/z9/ivUx90AAAABYktHRAH/Ai3eAAADtElEQVQYGbXBiUOTdRwG8IdTBuFECyjLQi274+zAgwSRUKyIDsgUGJggHh14BG2zptv7VtAhHS8QoWWHQWwI7Pnzkmsc23i/7/Z7Px8IOXdV1B8/df6i99o178Xzp96vr9jlhDrb9hzp1hitt6m8AAoUHOjRGJfWc6AASXGUtQVowt9W6kCisiuvUKS/ZjMSkXfISzFPzRZYlVL+OS3xVqbCkh0dtKx7J+Qyj/mZAH9DJoQKO5igru0QecrLhH1ZDHMpdUyGVgszaU1M0nvp2NCmZibthAMbyGqnAu1ZiCuthUqcTEccKe9QkbcRRx2VqUVMezQqoz2DGAo9VOjqQ4iS0UGlTmdivWNUrAHrPOanYv5HsUZqJ5U7nYrVXqENXsIqeR7awO3EilraohoR93lpC08Olr1Km+zHEkcfbdLnwKIy2qYEi9pom1YsyPfTNoECzKuijfZhXg/FwjeHvv7qxsgMxc7gnvs1Sk0P6Qu+m6BUYCuAYkqFh/Ql305T6jkAjZT6XY/4hVJvAviUUj/qEQNhCn0MOCk2qK8IUSoXuyk2qK8IUqoIFRQb0iO+CVOqFPUUG9cjfqLYYXxAsbkb+pKBIMVa0Em5qR/0BQN3KOfCBVowM/K9rg/+HKIF53CZ1szO0ppL8NBmbvhoMx98tJkPHlowF/pvYmIyOEsL3LhMqam/x4aNRaN/ToYpdAkXKDM5bqzx679hipxDJyXm/jCi3JyhhAvHKRC+ZcQwNkOBZtRT4I4R020KHEYFBcaMmIbDNFeK3RQYMWIL0VwRnBQYMWIL0ZSWC3xCc6NGbLM09RGARpq7bcQ0RnNvACimudCIEcPwBM09C2CbRnPB34wooxM0F9iKe3ooMfXPrdFhY9no+F+TcxToxrwqSoXv3g1OTQWnZ+YotRfz8v20TaAAC9pom1YsKqNtSrDI0UebfObAkiraZD+WZbtpC08OImpoi4NYscVNG/Rvxiov0wYvYrXUDirnSsEaD1+nYv4dWKeBih3FehkdVOrDTEQpdFMh74OI4QmNymhPI6ZaKlONOF6nIm8hnrQWKnEyDXFltVOB9ixsYFMzk3bCgQ2lNTJJ76bDzCGNSdCqIfCkhwn74nmIFLqYoK7tEMps8DMB149mQO4RFy3rKoIlKeX9tMRTmQqrnNUeirkPbkYisiuvUKS/JheJcpS2+mnC31riQFLy950JMK5A994HoEDO40e6NUbrbXohD+rk7ix7rcV1ttfr83l7z7pa6kqLciHzP4cuzMcEWOhOAAAAAElFTkSuQmCC" },
    adress: { type: Object, default: {line1:'', line2:''} },
    gender: { type: String, default:"Not Selected" },
    dob: { type: String, default: "Not Selected" },
    phone: { type: String, default: '0000000000'  },
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel