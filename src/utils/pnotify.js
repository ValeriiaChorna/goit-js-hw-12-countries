import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from '../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
import{messages} from './messages';

const pWarning = (message) => PNotify.alert(message || messages.warning);
const pInfo = (message) => PNotify.alert(message || messages.info);

export { pWarning, pInfo}