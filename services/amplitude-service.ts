import * as amplitude from '@amplitude/analytics-react-native';

const AMPLITUDE_API_KEY = '_YOUR_AMPLITUDE_API_KEY_';

// Initialize once when module is imported
amplitude.init(AMPLITUDE_API_KEY);

export default amplitude;
