import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'Main',
  path: `${APP_PREFIX_PATH}/dashboard`,
  title: 'custom.Main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'Dashboard',
      path: `${APP_PREFIX_PATH}/`,
      title: 'custom.Dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
    key: 'Catalog',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Catalog',
    icon: ShoppingCartOutlined,
    breadcrumb: true,
    submenu: [    {
      key: 'Items',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'custom.Items',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Сategories',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'custom.Сategories',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Collections',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'custom.Collections',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Combo',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'custom.Combo',
      icon: '',
      breadcrumb: false,
      submenu: []
    }]
  },
  {
    key: 'Orders',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Orders',
    icon: ShoppingOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'Clients',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Clients',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'Clients_1',
        path: `${APP_PREFIX_PATH}/client_list`,
        title: 'custom.Clients_1',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Clients_2',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'custom.Clients_2',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    key: 'Banners',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Banners',
    icon: PictureOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'Promo',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Promo',
    icon: GiftOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'Offline',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Off',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'Offline_1',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'custom.Adress',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Offline_2',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'custom.Geo',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    key: 'Employee',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Employee',
    icon: UsergroupAddOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'Mailing',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'custom.Mailing',
    icon: MailOutlined,
    breadcrumb: false,
    submenu: []
  },
]
},
]

const devNav = [{
  key: 'dev',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'custom.dev',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'Setting',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'custom.Setting',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Mobile',
      path: `${APP_PREFIX_PATH}/dashboards/analytic`,
      title: 'custom.Mobile',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Logs',
      path: `${APP_PREFIX_PATH}/dashboards/sales`,
      title: 'custom.Logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...devNav
]

export default navigationConfig;
