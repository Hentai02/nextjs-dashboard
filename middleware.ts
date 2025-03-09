import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

//使用中间件完成这项任务的好处是，在中间件验证身份验证之前，受保护的路由甚至不会开始渲染，
// 从而提高了应用程序的安全性和性能。