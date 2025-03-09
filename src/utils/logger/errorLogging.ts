import { emoji } from './loggerEmojis';
import { defaultSettings, LoggerSettings, LogLevel } from './loggerSettings';

const LOG_STORAGE_KEY = 'console_logs';

// Function to save logs as formatted strings
const saveLog = (log: string, level: LogLevel) => {
  if (level !== 'error') return;
  const logs: string[] = JSON.parse(localStorage.getItem(LOG_STORAGE_KEY) ?? '[]') as string[];
  logs.push(log);
  localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(logs));
};

const fetchLoggerSettings = async () => {
  try {
    const response = await fetch('/api/logger-settings');
    const settings = (await response.json()) as LoggerSettings;
    localStorage.setItem('loggerSettings', JSON.stringify(settings));
    return settings;
  } catch (error) {
    console.warn(`${emoji.warning} Failed to fetch logger settings, using defaults.`, error);
    return defaultSettings;
  }
};

const getLoggerSettings = (): LoggerSettings => {
  const storedSettings = localStorage.getItem('loggerSettings');
  return storedSettings ? (JSON.parse(storedSettings) as LoggerSettings) : defaultSettings;
};

const logMessage = (level: LogLevel, message: string, data?: unknown) => {
  const settings = getLoggerSettings();
  if (!settings.loggingEnabled || !settings.levels[level]) return;

  const timestamp = new Date().toISOString();
  const formattedMessage = `${emoji[level]} [${timestamp}] [${level.toUpperCase()}] ${message}`;

  // If it's an error and there's data, format the message accordingly
  if (level === 'error' && data) {
    const dataFormatted = JSON.stringify(data, null, 2);
    const log = `${formattedMessage} \n   "data": ${dataFormatted}`;
    saveLog(log, level);
  } else {
    saveLog(formattedMessage + (data ? ` {${JSON.stringify(data)}}` : ''), level);
  }

  console[level](formattedMessage, data || '');
};

export const logger = {
  async init() {
    await fetchLoggerSettings();
  },

  info: (message: string, data?: unknown) => {
    logMessage('info', message, data);
  },
  error: (message: string, data?: unknown) => {
    logMessage('error', message, data);
  },
  warn: (message: string, data?: unknown) => {
    logMessage('warn', message, data);
  },
  debug: (message: string, data?: unknown) => {
    logMessage('debug', message, data);
  },
  log: (level: LogLevel, message: string, data?: unknown) => {
    logMessage(level, message, data);
  },
  apiResponse: (url: string, data: unknown, status: 'active' | 'inactive' | 'pending' = 'active') => {
    logger.info(`${emoji.status[status]} [API Response] ${url}`, data);
  },
  apiError: (url: string, error: unknown, status: 'active' | 'inactive' | 'pending' = 'inactive') => {
    logger.error(`${emoji.status[status]} [API Error] ${url}`, error);
  },

  downloadLogs: () => {
    const logs = JSON.parse(localStorage.getItem(LOG_STORAGE_KEY) ?? '[]') as string[];
    if (logs.length === 0) {
      console.warn('No logs to download.');
      return;
    }

    const logBlob = new Blob([logs.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(logBlob);
    link.download = `console_logs_${new Date().toISOString()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  clearLogs: () => {
    localStorage.removeItem(LOG_STORAGE_KEY);
    console.log('Console logs cleared.');
  },
};
