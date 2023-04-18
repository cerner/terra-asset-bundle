// ----- terra-core -----
import TerraActionFooter from 'terra-action-footer';
import TerraActionHeader from 'terra-action-header';
import TerraAlert from 'terra-alert';
import TerraArrange from 'terra-arrange';
import TerraBadge from 'terra-badge';
import TerraBase from 'terra-base';
import TerraBreakpoints from 'terra-breakpoints';
import TerraButton from 'terra-button';
import TerraButtonGroup from 'terra-button-group';
import TerraCard from 'terra-card';
import TerraCellGrid from 'terra-cell-grid';
import TerraContentContainer from 'terra-content-container';
import TerraDemographicsBanner from 'terra-demographics-banner';
import TerraDialog from 'terra-dialog';
import TerraDivider from 'terra-divider';
import TerraDropdownButton from 'terra-dropdown-button';
import TerraDynamicGrid from 'terra-dynamic-grid';
import TerraFormCheckbox from 'terra-form-checkbox';
import TerraFormField from 'terra-form-field';
import TerraFormFieldset from 'terra-form-fieldset';
import TerraFormInput from 'terra-form-input';
import TerraFormRadio from 'terra-form-radio';
import TerraFormSelect from 'terra-form-select';
import TerraFormTextarea from 'terra-form-textarea';
import TerraGrid from 'terra-grid';
import TerraHeading from 'terra-heading';
import TerraHTMLTable from 'terra-html-table';
import TerraHyperlink from 'terra-hyperlink';
import { I18nProvider, i18nLoader as I18nLoader } from 'terra-i18n';
import TerraImage from 'terra-image';
import TerraList from 'terra-list';
import TerraOverlay from 'terra-overlay';
import TerraPaginator from 'terra-paginator';
import TerraProfileImage from 'terra-profile-image';
import TerraProgressBar from 'terra-progress-bar';
import TerraResponsiveElement from 'terra-responsive-element';
import TerraScroll from 'terra-scroll';
import TerraSearchField from 'terra-search-field';
import TerraSectionHeader from 'terra-section-header';
import TerraShowHide from 'terra-show-hide';
import TerraSignature from 'terra-signature';
import TerraSpacer from 'terra-spacer';
import TerraStatus from 'terra-status';
import TerraStatusView from 'terra-status-view';
import TerraSwitch from 'terra-switch';
import TerraTable from 'terra-table';
import TerraTag from 'terra-tag';
import TerraText from 'terra-text';
import TerraToggle from 'terra-toggle';
import TerraToggleButton from 'terra-toggle-button';
import TerraToggleSectionHeader from 'terra-toggle-section-header';
import TerraToolbar from 'terra-toolbar';
import TerraVisuallyHiddenText from 'terra-visually-hidden-text';

// ----- terra-framework -----
import TerraCollapsibleMenuView from 'terra-collapsible-menu-view';
import TerraDateInput from 'terra-date-input';
import TerraDatePicker from 'terra-date-picker';
import TerraDateTimePicker from 'terra-date-time-picker';
import TerraDisclosureManager from 'terra-disclosure-manager';
import TerraEmbeddedContentConsumer from 'terra-embedded-content-consumer';
import TerraHookshot from 'terra-hookshot';
import TerraInfiniteList from 'terra-infinite-list';
import TerraLayout from 'terra-layout';
import TerraMenu from 'terra-menu';
import TerraModalManager from 'terra-modal-manager';
import TerraNavigationLayout from 'terra-navigation-layout';
import TerraNavigationPrompt from 'terra-navigation-prompt';
import TerraNavigationSideMenu from 'terra-navigation-side-menu';
import TerraNotificationDialog from 'terra-notification-dialog';
import TerraPopup from 'terra-popup';
import TerraSlideGroup from 'terra-slide-group';
import TerraSlidePanelManager from 'terra-slide-panel-manager';
import TerraTabs from 'terra-tabs';
import TerraThemeContext from 'terra-theme-context';
import TerraThemeProvider from 'terra-theme-provider';
import TerraTimeInput from 'terra-time-input';

// ----- terra-clinical -----
import TerraClinicalDataGrid from 'terra-clinical-data-grid';
import TerraClinicalDetailView from 'terra-clinical-detail-view';
import TerraClinicalHeader from 'terra-clinical-header';
import TerraClinicalItemCollection from 'terra-clinical-item-collection';
import TerraClinicalItemDisplay from 'terra-clinical-item-display';
import TerraClinicalItemView from 'terra-clinical-item-view';
import TerraClinicalLabelValueView from 'terra-clinical-label-value-view';
import TerraClinicalOnsetPicker from 'terra-clinical-onset-picker';
import TerraClinicalResult from 'terra-clinical-result/lib/index';

// ----- terra-application -----
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from 'terra-application/lib/application-loading-overlay';

import ApplicationNavigation, { ApplicationNavigationActionsContext } from 'terra-application/lib/application-navigation';
import ApplicationStatusOverlay, { ApplicationStatusOverlayProvider } from 'terra-application/lib/application-status-overlay';

import ModalManager from 'terra-application/lib/modal-manager';
import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-application/lib/navigation-prompt';

import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
import { WorkspaceContent } from 'terra-application/lib/workspace';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import Breakpoints, { activeBreakpointForSize as ActiveBreakpointForSize, breakpointIsActiveForSize as BreakpointIsActiveForSize } from 'terra-application/lib/breakpoints';
import EventEmitter from 'terra-application/lib/utils/event-emitter';
import Logger from 'terra-application/lib/utils/logger';
import { ThemeContext } from 'terra-application/lib/theme';
import TerraIcon from './TerraIconAssets';

const TerraFrontendAssets = {};

// ----  terra-application -------
TerraFrontendAssets.TerraApplication = {
  ApplicationBase,
  DisclosureManagerContext,
  ApplicationErrorBoundary,
  ApplicationLoadingOverlay,
  ApplicationLoadingOverlayProvider,
  ApplicationNavigation,
  ApplicationNavigationActionsContext,
  ApplicationStatusOverlay,
  ApplicationStatusOverlayProvider,
  Breakpoints,
  ActiveBreakpointForSize,
  BreakpointIsActiveForSize,
  EventEmitter,
  Logger,
  ModalManager,
  NavigationPrompt,
  NavigationPromptCheckpoint,
  SlidePanelManager,
  ThemeContext,
  WorkspaceContent,
};

// ----  terra-core -------
TerraFrontendAssets.TerraActionFooter = TerraActionFooter;
TerraFrontendAssets.TerraActionHeader = TerraActionHeader;
TerraFrontendAssets.TerraAlert = TerraAlert;
TerraFrontendAssets.TerraArrange = TerraArrange;
TerraFrontendAssets.TerraBase = TerraBase;
TerraFrontendAssets.TerraBadge = TerraBadge;
TerraFrontendAssets.TerraBreakpoints = TerraBreakpoints;
TerraFrontendAssets.TerraButton = TerraButton;
TerraFrontendAssets.TerraButtonGroup = TerraButtonGroup;
TerraFrontendAssets.TerraCard = TerraCard;
TerraFrontendAssets.TerraCellGrid = TerraCellGrid;
TerraFrontendAssets.TerraContentContainer = TerraContentContainer;
TerraFrontendAssets.TerraDemographicsBanner = TerraDemographicsBanner;
TerraFrontendAssets.TerraDialog = TerraDialog;
TerraFrontendAssets.TerraDivider = TerraDivider;
TerraFrontendAssets.TerraDropdownButton = TerraDropdownButton;
TerraFrontendAssets.TerraDynamicGrid = TerraDynamicGrid;
TerraFrontendAssets.TerraFormCheckbox = TerraFormCheckbox;
TerraFrontendAssets.TerraFormField = TerraFormField;
TerraFrontendAssets.TerraFormFieldset = TerraFormFieldset;
TerraFrontendAssets.TerraFormInput = TerraFormInput;
TerraFrontendAssets.TerraFormRadio = TerraFormRadio;
TerraFrontendAssets.TerraFormSelect = TerraFormSelect;
TerraFrontendAssets.TerraFormTextarea = TerraFormTextarea;
TerraFrontendAssets.TerraGrid = TerraGrid;
TerraFrontendAssets.TerraHeading = TerraHeading;
TerraFrontendAssets.TerraHTMLTable = TerraHTMLTable;
TerraFrontendAssets.TerraHyperlink = TerraHyperlink;
TerraFrontendAssets.TerraI18n = { I18nProvider, I18nLoader };
TerraFrontendAssets.TerraIcon = TerraIcon;
TerraFrontendAssets.TerraImage = TerraImage;
TerraFrontendAssets.TerraList = TerraList;
TerraFrontendAssets.TerraOverlay = TerraOverlay;
TerraFrontendAssets.TerraPaginator = TerraPaginator;
TerraFrontendAssets.TerraProfileImage = TerraProfileImage;
TerraFrontendAssets.TerraProgressBar = TerraProgressBar;
TerraFrontendAssets.TerraResponsiveElement = TerraResponsiveElement;
TerraFrontendAssets.TerraScroll = TerraScroll;
TerraFrontendAssets.TerraSearchField = TerraSearchField;
TerraFrontendAssets.TerraSectionHeader = TerraSectionHeader;
TerraFrontendAssets.TerraShowHide = TerraShowHide;
TerraFrontendAssets.TerraSignature = TerraSignature;
TerraFrontendAssets.TerraSpacer = TerraSpacer;
TerraFrontendAssets.TerraStatus = TerraStatus;
TerraFrontendAssets.TerraStatusView = TerraStatusView;
TerraFrontendAssets.TerraSwitch = TerraSwitch;
TerraFrontendAssets.TerraTable = TerraTable;
TerraFrontendAssets.TerraTag = TerraTag;
TerraFrontendAssets.TerraText = TerraText;
TerraFrontendAssets.TerraToggle = TerraToggle;
TerraFrontendAssets.TerraToggleButton = TerraToggleButton;
TerraFrontendAssets.TerraToggleSectionHeader = TerraToggleSectionHeader;
TerraFrontendAssets.TerraToolbar = TerraToolbar;
TerraFrontendAssets.TerraVisuallyHiddenText = TerraVisuallyHiddenText;

// ----- terra-framework -----
TerraFrontendAssets.TerraCollapsibleMenuView = TerraCollapsibleMenuView;
TerraFrontendAssets.TerraContentContainer = TerraContentContainer;
TerraFrontendAssets.TerraDateInput = TerraDateInput;
TerraFrontendAssets.TerraDatePicker = TerraDatePicker;
TerraFrontendAssets.TerraDateTimePicker = TerraDateTimePicker;
TerraFrontendAssets.TerraDisclosureManager = TerraDisclosureManager;
TerraFrontendAssets.TerraTimeInput = TerraTimeInput;
TerraFrontendAssets.TerraThemeProvider = TerraThemeProvider;
TerraFrontendAssets.TerraThemeContext = TerraThemeContext;
TerraFrontendAssets.TerraTabs = TerraTabs;
TerraFrontendAssets.TerraSlidePanelManager = TerraSlidePanelManager;
TerraFrontendAssets.TerraSlideGroup = TerraSlideGroup;
TerraFrontendAssets.TerraSectionHeader = TerraSectionHeader;
TerraFrontendAssets.TerraPopup = TerraPopup;
TerraFrontendAssets.TerraNotificationDialog = TerraNotificationDialog;
TerraFrontendAssets.TerraNavigationLayout = TerraNavigationLayout;
TerraFrontendAssets.TerraNavigationPrompt = TerraNavigationPrompt;
TerraFrontendAssets.TerraNavigationSideMenu = TerraNavigationSideMenu;
TerraFrontendAssets.TerraModalManager = TerraModalManager;
TerraFrontendAssets.TerraMenu = TerraMenu;
TerraFrontendAssets.TerraLayout = TerraLayout;
TerraFrontendAssets.TerraInfiniteList = TerraInfiniteList;
TerraFrontendAssets.TerraHookshot = TerraHookshot;
TerraFrontendAssets.TerraEmbeddedContentConsumer = TerraEmbeddedContentConsumer;

// ----- terra-clinical -----
TerraFrontendAssets.TerraClinicalDataGrid = TerraClinicalDataGrid;
TerraFrontendAssets.TerraClinicalDetailView = TerraClinicalDetailView;
TerraFrontendAssets.TerraClinicalHeader = TerraClinicalHeader;
TerraFrontendAssets.TerraClinicalItemCollection = TerraClinicalItemCollection;
TerraFrontendAssets.TerraClinicalItemDisplay = TerraClinicalItemDisplay;
TerraFrontendAssets.TerraClinicalItemView = TerraClinicalItemView;
TerraFrontendAssets.TerraClinicalLabelValueView = TerraClinicalLabelValueView;
TerraFrontendAssets.TerraClinicalOnsetPicker = TerraClinicalOnsetPicker;
TerraFrontendAssets.TerraClinicalResult = TerraClinicalResult;

window.terra = window.terra || TerraFrontendAssets;

export default TerraFrontendAssets;
