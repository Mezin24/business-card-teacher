import AboutPage from '@/pages/AboutPage';
import AchievementsPage from '@/pages/AchievementsPage';
import AdvicesPage from '@/pages/AdvicesPage';
import EssayPage from '@/pages/EssayPage';
import HomePage from '@/pages/HomePage';
import { Navigate, RouteProps } from 'react-router-dom';

enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  ACHIVEMENTS = 'achievements',
  ESSAY = 'essay',
  ADVICES = 'adviсes',
  NOT_FOUND = 'not-found',
}

export const RoutesPats: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ACHIVEMENTS]: '/achievements',
  [AppRoutes.ESSAY]: '/essay',
  [AppRoutes.ADVICES]: '/adviсes',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutesPats.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPats.about,
    element: <AboutPage />,
  },
  [AppRoutes.ACHIVEMENTS]: {
    path: RoutesPats.achievements,
    element: <AchievementsPage />,
  },
  [AppRoutes.ESSAY]: {
    path: RoutesPats.essay,
    element: <EssayPage />,
  },
  [AppRoutes.ADVICES]: {
    path: RoutesPats.adviсes,
    element: <AdvicesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPats['not-found'],
    element: <Navigate to='/' replace />,
  },
};
