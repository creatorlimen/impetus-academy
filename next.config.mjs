/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/brief-history/', destination: '/about/our-story/', permanent: true },
      { source: '/founders-profile/', destination: '/about/founder/', permanent: true },
      { source: '/proprietors-profile/', destination: '/about/proprietor/', permanent: true },
      { source: '/academic/', destination: '/academics/', permanent: true },
      { source: '/kindergarten-curriculum/', destination: '/primary-school/kindergarten/', permanent: true },
      { source: '/elementary-curriculum/', destination: '/primary-school/elementary/', permanent: true },
      { source: '/jss-curriculum/', destination: '/secondary-school/junior-secondary/', permanent: true },
      { source: '/sss-curriculum-science/', destination: '/secondary-school/senior-secondary/science/', permanent: true },
      { source: '/sss-curriculum-art/', destination: '/secondary-school/senior-secondary/arts/', permanent: true },
      { source: '/sss-curriculum-commercial/', destination: '/secondary-school/senior-secondary/commercial/', permanent: true },
    ];
  },
};

export default nextConfig;
