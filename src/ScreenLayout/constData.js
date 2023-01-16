import {SCREEN_NAMES} from '../Constants';
import HomeSelected from '../assets/images/HomeSelected.png';
import Home from '../assets/images/home.png';
import Leaderboard from '../assets/images/Leaderboard.png';
import Profile from '../assets/images/Profile.png';
import Leagues from '../assets/images/Leagues.png';
import Research from '../assets/images/Research.png';
export const footerMenu = [
  {
    key: 'home',
    image: Home,
    screen: SCREEN_NAMES.home,
    name: 'Home',
  },
  {
    key: 'leagues',
    image: Leagues,
    screen: SCREEN_NAMES.leagues,
    name: 'Leagues',
  },
  {
    key: 'research',
    image: Research,
    screen: SCREEN_NAMES.research,
    name: 'Research',
  },
  {
    key: 'leaguerboard',
    image: Leaderboard,
    screen: SCREEN_NAMES.leaguerboard,
    name: 'Leaguerboard',
  },
  {
    key: 'profile',
    image: Profile,
    screen: SCREEN_NAMES.profile,
    name: 'Profile',
  },
];
