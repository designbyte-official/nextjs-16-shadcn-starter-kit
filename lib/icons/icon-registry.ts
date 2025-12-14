// Icon Registry - Centralized icon definitions and exports
// Provides unified way to import and use icons from different libraries (Huge Icons & Hero Icons)

// Huge Icons - Commonly used icons
export {
  // Navigation
  Home01Icon,
  Menu01Icon,
  Menu02Icon,
  Menu03Icon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,

  // User & Account
  UserIcon,
  UserCircleIcon,
  UserSettingIcon,
  LogoutIcon,
  LoginIcon,

  // Actions
  SearchIcon,
  FilterIcon,
  SettingsIcon,
  EditIcon,
  DeleteIcon,
  AddIcon,
  PlusSignIcon,
  CloseIcon,
  CheckIcon,
  CancelIcon,

  // Communication
  MailIcon,
  NotificationIcon,
  MessageIcon,
  PhoneIcon,

  // Files & Folders
  FileIcon,
  File01Icon,
  FolderIcon,
  FolderOpenIcon,
  DownloadIcon,
  UploadIcon,
  SaveIcon,
  FloppyDiskIcon,

  // Media
  ImageIcon,
  VideoIcon,
  PlayIcon,
  PauseIcon,

  // Status
  EyeIcon,
  EyeHideIcon,
  LockIcon,
  UnlockIcon,
  ShieldIcon,
  WarningIcon,
  InfoIcon,
  HelpCircleIcon,
  CheckCircleIcon,
  ErrorCircleIcon,

  // Payment
  CreditCardIcon,
  MoneyIcon,

  // Theme & Display
  SunIcon,
  MoonIcon,
  ComputerIcon,
  DarkModeIcon,
  LightModeIcon,

  // Other
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
  BookmarkIcon,
} from "@hugeicons/core-free-icons";

// Hero Icons - Commonly used icons
// Import from @heroicons/react/24/outline for outline style, use /24/solid for filled variants
import {
  BellIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  EyeSlashIcon,
  ArrowLeftIcon as HeroArrowLeftIcon,
  ArrowRightIcon as HeroArrowRightIcon,
  CheckIcon as HeroCheckIcon,
  ChevronLeftIcon as HeroChevronLeftIcon,
  ChevronRightIcon as HeroChevronRightIcon,
  EyeIcon as HeroEyeIcon,
  MoonIcon as HeroMoonIcon,
  SunIcon as HeroSunIcon,
  UserIcon as HeroUserIcon,
  HomeIcon,
  LockClosedIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Re-export Hero Icons with Hero prefix for consistency
export {
  HomeIcon as HeroHomeIcon,
  MagnifyingGlassIcon as HeroSearchIcon,
  BellIcon as HeroBellIcon,
  HeroUserIcon,
  Cog6ToothIcon as HeroSettingsIcon,
  HeroArrowRightIcon,
  HeroArrowLeftIcon,
  HeroChevronRightIcon,
  HeroChevronLeftIcon,
  XMarkIcon as HeroCloseIcon,
  HeroCheckIcon,
  PlusIcon as HeroPlusIcon,
  PencilIcon as HeroEditIcon,
  TrashIcon as HeroDeleteIcon,
  HeroEyeIcon,
  EyeSlashIcon as HeroEyeHideIcon,
  LockClosedIcon as HeroLockIcon,
  LockOpenIcon as HeroUnlockIcon,
  HeroSunIcon,
  HeroMoonIcon,
  ComputerDesktopIcon as HeroComputerIcon,
};
