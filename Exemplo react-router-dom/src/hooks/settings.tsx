import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface Setting {
  name: string;
  value: string;
}

interface SettingsContextData {
  loadingSettings: boolean;
  settings: Setting[];
}

interface SettingsProviderProps {
  children: React.ReactNode;
}

// Simulando uma API
function getSettingsFromServer(): Setting[] {
  return [
    {
      name: 'enableDashboard',
      value: 'false',
    },
  ];
}

const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData
);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [settings, setSettings] = useState<Setting[]>([]);

  useEffect(() => {
    function loadSettings() {
      // Chamada à API
      setTimeout(() => {
        const settingsFromServer = getSettingsFromServer();
        setSettings(settingsFromServer);
        setLoadingSettings(false);
      }, 5000);
    }

    loadSettings();
  }, []);

  const settingsData = useMemo(
    () => ({
      loadingSettings,
      settings,
    }),
    [loadingSettings, settings]
  );

  return (
    <SettingsContext.Provider value={settingsData}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextData {
  const context = useContext(SettingsContext);
  return context;
}
