import * as amplitude from '@amplitude/analytics-react-native';

const AMPLITUDE_API_KEY = '9509fabbd3a3b72fe6fb3485c3c9f8fa';

// Initialize once when module is imported
amplitude.init(AMPLITUDE_API_KEY);

export default amplitude;
