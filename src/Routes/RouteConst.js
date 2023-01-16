import ScoreCart from '../Screens/ScoreCart';
import ScoreCartDetail from '../Screens/ScoreCartDetail';
import Profile from '../Screens/Profile';
import Research from '../Screens/Research';
import Home from '../Screens/Home';
import Leagues from '../Screens/Leagues';
import Leaguerboard from '../Screens/Leaguerboard';
import {SCREEN_NAMES} from '../Constants';

export const SCREEN_ROUTES = [
  {
    key: 'Scorecart',
    name: SCREEN_NAMES.scorecart,
    component: ScoreCart,
    private: false,
    initial: true,
  },
  {
    key: 'scorecardDetail',
    name: SCREEN_NAMES.scorecardDetail,
    component: ScoreCartDetail,
    private: false,
    initial: true,
  },
  {
    key: 'profile',
    name: SCREEN_NAMES.profile,
    component: Profile,
    private: false,
    initial: true,
  },
  {
    key: 'research',
    name: SCREEN_NAMES.research,
    component: Research,
    private: false,
    initial: true,
  },
  {
    key: 'home',
    name: SCREEN_NAMES.home,
    component: Home,
    private: false,
    initial: true,
  },
  {
    key: 'leagues',
    name: SCREEN_NAMES.leagues,
    component: Leagues,
    private: false,
    initial: true,
  },
  {
    key: 'leaguerboard',
    name: SCREEN_NAMES.leaguerboard,
    component: Leaguerboard,
    private: false,
    initial: true,
  },
];
