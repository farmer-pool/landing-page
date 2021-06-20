import discord from 'assets/images/icons/discord.png';
import twitter from 'assets/images/icons/twitter.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [
      {
        path: '#!',
        label: 'About Us',
      },
      {
        path: '#!',
        label: 'Copyright',
      }
    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [
      {
        path: '#!',
        label: 'Privacy Policy',
      },
      {
        path: '#!',
        label: 'Terms & Conditions',
      }
    ],
  },
  {
    id: 4,
    title: 'My Account',
    items: [
      {
        path: '#!',
        label: 'Press inquiries',
      },
      {
        path: '#!',
        label: 'Social media ',
      }
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: 'https://twitter.com/PoolIndian',
        icon: twitter,
        label: 'Twitter',
        height: 24
      },
      {
        path: 'https://discord.gg/JezADP9a',
        icon: discord,
        label: 'Discord',
        height: 24
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
